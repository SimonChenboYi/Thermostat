'use strict';

function Thermostat(){
  this.DEFAULT_START = 20;
  this.MINIMUM_TEMP = 10;
  this.MAXTEP_SAVINGMODE = 25;
  this.MAXTEP_NONSAVINGMODE = 32;
  this.LOWUSAGELIMIT = 18;
  this.HIGHUSAGELIMIT = 25;
  this.temp = this.DEFAULT_START;
  this.powerSavingMode = true;
};

Thermostat.prototype.increaseTemperature = function(){
  var maxTemp = this.powerSavingMode ? this.MAXTEP_SAVINGMODE : this.MAXTEP_NONSAVINGMODE
  if(this.temp < maxTemp){
    this.temp++;
  };
};

Thermostat.prototype.decreaseTemperature = function(){
  if(this.temp > this.MINIMUM_TEMP){
    this.temp--;
  };
};

Thermostat.prototype.reset = function(){
  this.temp = this.DEFAULT_START;
};

Thermostat.prototype.powerSavingModeOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.engeryUsage = function(){
  if (this.temp < this.LOWUSAGELIMIT ) {return 'low-usage'};
  if (this.temp >= this.HIGHUSAGELIMIT ) {return 'high-usage'};
  return 'medium-usage';
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temp;
}

Thermostat.prototype.isPowerSavingModeon = function(){
  return this.powerSavingMode;
}

