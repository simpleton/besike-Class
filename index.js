module.exports = Class

function Class(_this, _super) {
  var _this_ctor
  if (_this && _this.initialize && typeof(_this.initialize) == 'function') {
    _this_ctor = _this.initialize;
    delete _this.initialize
  } else {
    _this_ctor = function() {};
  }
  __extends(_this_ctor, _super)
  for (var v in _this) {
    if (typeof(_this[v]) == "function") {
      _this_ctor.prototype[v] = _this[v]
    }
  }

  var current_class = _this_ctor
  _this_ctor.prototype.super = function(func_name) {
    current_class = current_class.__super__
    return current_class.prototype[func_name].apply(this, __extract_funcname(arguments))
  }
  return _this_ctor
}

var __extract_funcname = function(arguments) {
  args = []
  for (var v in arguments) {
    if (v > 0) {
      args[v-1] = arguments[v];
    }
  }
  return args
}

var __extends = function(child, parent) {
  // Copy "class properties" from parent to child
  if (!parent) {
    child.__super__ = Object
    return;
  }
  for (var key in parent) {
    child[key] = parent[key];
  }

  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor;

  child.__super__ = parent
  return child;
};
