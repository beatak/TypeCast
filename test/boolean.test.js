// express drops path info? that's silly to me...
var cast = require('TypeCast'),
assert = require('assert');

module.exports = {
  'test boolean:true' : function () {
    assert.equal(true, cast.boolean(true));
  },
  'test boolean:false' : function () {
    assert.equal(false, cast.boolean(false));
  },
  'test function' : function () {
    assert.equal(true, cast.boolean(function (){}));
  },
  'test number:0' : function () {
    assert.equal(false, cast.boolean(0));
  },
  'test number:1' : function () {
    assert.equal(true, cast.boolean(1));
  },
  'test object:null' : function () {
    assert.equal(false, cast.boolean(null));
  },
  'test object:others' : function () {
    assert.equal(true, cast.boolean({}));
  },
  'test string:false' : function () {
    assert.equal(false, cast.boolean('false'));
  },
  'test string:0' : function () {
    assert.equal(false, cast.boolean('0'));
  },
  'test string:undefined' : function () {
    assert.equal(false, cast.boolean('undefined'));
  },
  'test string:null' : function () {
    assert.equal(false, cast.boolean('null'));
  },
  'test string:empty' : function () {
    assert.equal(false, cast.boolean(''));
  },
  'test string:others' : function () {
    assert.equal(true, cast.boolean('OH HAI'));
  },
  'test undefined' : function () {
    assert.equal(false, cast.boolean(undefined));
  }
};
