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
  return _this_ctor
}

var __extends = function(child, parent) {
  // Copy "class properties" from parent to child
  if (!parent) return;
  for (var key in parent) {
    child[key] = parent[key];
  }

  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  return child;
};
