var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.index = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++
  return;
}

stackMethods.pop = function(value) {
  this.index--;
  var popped = this.storage[this.index];
  delete this.storage[this.index];
  return popped;
}

stackMethods.size = function() {
  if (this.index > 0) {
    return this.index--;
  } else {
    return 0;
  }
}

