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
    	result == !(t === null);
    break;
    case (t === 'string'):
    	if (arg.length === 0) {
        result = false;
      }
    	else {
        result = !(arg === 'false');
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
  var t = typeof arg, result;
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
    	result = TypeCast.Number(arg.toString())
    break;
    case (t === 'string'):
    	if (arg.length === 0) {
        result = 0;
      }
    	else {
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
          result = 0;
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
  raddix = raddix || 10;
  var t = typeof arg, result;
  switch (true) {
    case (t === 'boolean'):
    case (t === 'number'):
    case (t === 'function'):
    	result = arg.toString();
    break;
    case (t === 'object'):
    	if (Object.prototype.toString.apply(value) === '[object Array]') {
        result = ['[', arg.join(','), ']'].join('');
      }
    	else {
        result = arg.toString();
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