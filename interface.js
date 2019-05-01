$( document ).ready(function() {

  function updateTemperature(){
    $('#temperature').text(thermostat.getCurrentTemperature());
  };
  
  var thermostat = new Thermostat();
  updateTemperature();
  
  $('#temperature-up').on('click',function(){
  thermostat.increaseTemperature();
  updateTemperature();
  });

  $('#temperature-down').on('click',function(){
  thermostat.decreaseTemperature();
  updateTemperature();
  });

  $('#temperature-reset').on('click',function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').on('click',function(){
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').on('click',function(){
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

});





