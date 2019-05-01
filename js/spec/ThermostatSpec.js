'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("starts at 20 degree", function(){
    expect(thermostat.temp).toBe(20)
  });

  it('increase temperature by 1 degree when call up function', function(){
    thermostat.increaseTemperature();
    expect(thermostat.temp).toBe(21);
  });

  it('decrease temperature by 1 degree when call down function', function(){
    thermostat.decreaseTemperature();
    expect(thermostat.temp).toBe(19);
  });

  it('does not decrese the temperature when temperature is at minimum temperature', function(){
    thermostat.temp = 10;
    thermostat.decreaseTemperature();
    expect(thermostat.temp).toBe(10);
  });

  it('allow the heating on upto 25 degree at powersaving mode ', function(){
    this.powerSavingMode = true;
    thermostat.temp = 25;
    thermostat.increaseTemperature();
    expect(thermostat.temp).toBe(25);
  });

  it('allow the heating on upto 32 degree not at powersaving mode ', function(){
    this.powerSavingMode = false;
    thermostat.temp = 32;
    thermostat.increaseTemperature();
    expect(thermostat.temp).toBe(32);
  });

  it('the powersaving mode is on by default ', function(){
    thermostat.temp = 24;
    thermostat.increaseTemperature();
    expect(thermostat.temp).toBe(25);
    thermostat.increaseTemperature();
    expect(thermostat.temp).toBe(25);
  });

  it('can reset the temperature to 20', function(){
    thermostat.temp = 24;
    thermostat.reset();
    expect(thermostat.temp).toBe(20);
  });

  it('return low-usage when temperature lower than 18 degree exclusive', function(){
    thermostat.temp = 17;
    expect(thermostat.engeryUsage()).toBe("low-usage");
  });

  it('retur medium-usage when temperature between 18  degree inclusive and 25  degree exclusive ', function(){
    thermostat.temp = 18
    expect(thermostat.engeryUsage()).toBe("medium-usage");
  });

  it('return high-usage when temperature above 25 degree inclusive ', function(){
    
    thermostat.temp = 25;
    expect(thermostat.engeryUsage()).toBe("high-usage");
  });

});