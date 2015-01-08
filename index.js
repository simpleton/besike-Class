module.exports = Class

function Class(_this) {
  var _this_ctor
  if (_this && _this.initialize && typeof(_this.initialize) == 'function') {
    _this_ctor = _this.initialize;
    delete _this.initialize
  } else {
    _this_ctor = function() {};
  }

  _this_ctor.prototype = _this
  return _this_ctor
}
