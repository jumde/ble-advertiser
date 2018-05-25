var util = require('util');
var bleno = require('bleno');

var Characteristic = bleno.Characteristic;

var bleCharacteristic = function() {
  bleCharacteristic.super_.call(this, {
    uuid: '0321',
    properties: ['read'],
    value: new Buffer('02c33456010002844d0104120e0401e46cee71545c2003cf')
  });
};

util.inherits(bleCharacteristic, Characteristic);

bleCharacteristic.prototype.onReadRequest = function(offset, callback) {
    callback(this.RESULT_SUCCESS, new Buffer('02c33456010002844d0104120e0401e46cee71545c2003cf'));
};

module.exports = bleCharacteristic;
