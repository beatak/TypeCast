var cast = require('../lib/typecast.js'),
assert = require('assert');

module.exports = {
  'test number:true' : function () {
    assert.equal(1, cast.number(true));
  }
  ,'test number:false' : function () {
    assert.equal(0, cast.number(false));
  }
  ,'test number:function' : function () {
    assert.equal(0, cast.number(function(){}));
  }
  ,'test number:number' : function () {
    assert.equal(1, cast.number(1));
  }
  ,'test number:object number contains' : function () {
    assert.equal(8, cast.number(new Number(8)));
  }
  ,'test number:object not number' : function () {
    assert.equal(0, cast.number({}));
  }
  ,'test number:object number contains with raddix' : function () {
    assert.equal(8, cast.number(new String(010), 8));
  }
  ,'test number:string number contains' : function () {
    assert.equal(1, cast.number('1'));
  }
  ,'test number:string number contains with raddix' : function () {
    assert.equal(10, cast.number('a', 16));
  }
  ,'test number:string number default raddix 10' : function () {
    assert.equal(10, cast.number('010'));
  }
  ,'test number:string not number' : function () {
    assert.equal(0, cast.number('a'));
  }
  ,'test number:string ieee notation' : function () {
    assert.equal(-1e+110, cast.number('-0.1e111'));
  }
  ,'test number:string float' : function () {
    assert.equal(0.15, cast.number('0.15'));
  }
  ,'test number:string in the middle of the string' : function () {
    assert.equal(0.5, cast.number('the profit of this quarter is expected 0.5 percent'));
  }
  ,'test number:undefined' : function () {
    assert.equal(0, cast.number(undefined));
  }
};
