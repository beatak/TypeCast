var TypeCast = {};

TypeCast.Boolean = function (arg) {
  var t = typeof arg, result;
  switch (true) {
    case (t === 'boolean'):
    	result = arg;
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
  // 
};

TypeCast.String = function (arg) {
};

