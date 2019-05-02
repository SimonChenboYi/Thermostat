$( document ).ready(function() {

  function updateTemperature(){
    $('#temperature').text(thermostat.getCurrentTemperature()+String.fromCharCode(176)+"C");
    $('#temperature').attr('class',thermostat.engeryUsage())
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

  $.get("http://api.openweathermap.org/data/2.5/weather?id=2648110&APPID=e494a3c89657f4b009dab219451b871f",
   function(weatherResponse) {
     console.log(weatherResponse)
     $("#city").html(weatherResponse.name);
     $("#weather").html(weatherResponse.weather[0].main);
     $("#min-temp").html((weatherResponse.main.temp_min-273.15).toFixed(2)+String.fromCharCode(176)+"C");
     $("#max-temp").html((weatherResponse.main.temp_max-273.15).toFixed(2)+String.fromCharCode(176)+"C");
      });

});





