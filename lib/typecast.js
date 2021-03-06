var TypeCast = {},
REGEX_NUMBER = /-?(?=[1-9]|0(?!\d))\d+(\.\d+)?([eE][+-]?\d+)?/;

TypeCast.Boolean = function (arg) {
  var t = typeof arg, result;
  switch (true) {
    case (t === 'boolean'):
    	result = arg;
    break;
    case (t === 'function'):
    	result = true;
    break;
    case (t === 'number'):
    	result = !(0 === arg);
    break;
    case (t === 'object'):
    	if (arg === null) {
        result = false;
      }
    	else {
        result = true;
      }
    break;
    case (t === 'string'):
    	if (arg.length === 0) {
        result = false;
      }
    	else {
        if (arg === 'false' || arg === '0' || arg === 'undefined' || arg === 'null') {
          result = false;
        }
        else {
          result = true;
        }
      }
    break;
    case (t === 'undefined'):
    	result = false;
    break;
  }
  return result;
};

TypeCast.Number = function (arg, raddix) {
  raddix = raddix || 10;
  var t = typeof arg, result, tmp;
  switch (true) {
    case (t === 'boolean'):
    	result = arg ? 1 : 0;
    break;
    case (t === 'function'):
    	result = 0;
    break;
    case (t === 'number'):
    	result = arg;
    break;
    case (t === 'object'):
    	tmp = arg.valueOf();
    	if (typeof tmp === 'number') {
        result = tmp;
      }
    	else {
        result = TypeCast.Number(arg.toString())
      }
    break;
    case (t === 'string'):
    	if (arg.length === 0) {
        result = 0;
      }
    	else {
        // this regexp does not much a string like
        // ".5" hmm
        var base = arg.match(REGEX_NUMBER);
        if (base) {
          if (base[1] || base[2]) {
            result = parseFloat(base[0]);
          }
          else {
            result = parseInt(base[0], raddix);
          }
        }
        else {
          tmp = parseInt(arg, raddix);
          if (isNaN(tmp)) {
            result = 0;
          }
          else {
            result = tmp;
          }
        }
      }
    break;
    case (t === 'undefined'):
    	result = 0;
    break;
  }
  return result;
};

TypeCast.String = function (arg) {
  var t = typeof arg, result, val;
  switch (true) {
    case (t === 'boolean'):
    case (t === 'function'):
    case (t === 'number'):
    	result = arg.toString();
    break;
    case (t === 'object'):
    	if (Object.prototype.toString.apply(arg) === '[object Array]') {
        result = ['[', arg.join(','), ']'].join('');
      }
    	else if (arg === null) {
        result = 'null';
      }
    	else {
        val = arg.valueOf();
        if (typeof val === 'string') {
          result = val;
        }
        else {
          result = arg.toString();
        }
      }    	
    break;
    case (t === 'string'):
    	result = arg;
    break;
    case (t === 'undefined'):
    	result = 'undefined';
    break;
  }
  return result;
};

exports.boolean = TypeCast.Boolean;
exports.number = TypeCast.Number;
exports.string = TypeCast.String;