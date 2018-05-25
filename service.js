var util = require('util');
var bleno = require('bleno');

var BlenoPrimaryService = bleno.PrimaryService;
var bleCharacteristic = require('./characteristic');

function bleService() {
  bleService.super_.call(this, {
      uuid: 'a1b0',
      characteristics: [
          new bleCharacteristic()
      ]
  });
}

util.inherits(bleService, BlenoPrimaryService);

module.exports = bleService;
