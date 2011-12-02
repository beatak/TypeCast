var cast = require('../lib/typecast.js'),
assert = require('assert');

module.exports = {
  'test string:true' : function () {
    assert.equal('true', cast.string(true));
  }
  ,'test string:false' : function () {
    assert.equal('false', cast.string(false));
  }
  ,'test string:function (experimental)' : function () {
    assert.equal('function (){}', cast.string(function(){}));
  }
  ,'test string:number' : function () {
    assert.equal('1', cast.string(1));
  }
  ,'test string:object array' : function () {
    assert.equal('[1,2]', cast.string([1, 2]));
  }
  ,'test string:object array constructor' : function () {
    assert.equal('[,,]', cast.string(new Array(3)));
  }
  ,'test string:object boolean constructor' : function () {
    assert.equal('true', cast.string(new Boolean(true)));
  }
  ,'test string:object number constructor' : function () {
    assert.equal('1', cast.string(new Number(1)));
  }
  ,'test string:object string constructor' : function () {
    assert.equal('a', cast.string(new String('a')));
  }
  ,'test string:object generic' : function () {
    assert.equal('[object Object]', cast.string({}));
  }
  ,'test string:object null' : function () {
    assert.equal('null', cast.string(null));
  }
  ,'test string:string' : function () {
    assert.equal(' ', cast.string(' '));
  }
  ,'test string:object undefined' : function () {
    assert.equal('undefined', cast.string(undefined));
  }
};
