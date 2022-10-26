var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //use keyword new and this
  this.index = 0;
  this.storage = {};

  //don't declare instance explicitly or ret urn it explicitly
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return;
};

Stack.prototype.pop = function(value) {
  this.index--;
  var popped = this.storage[this.index];
  delete this.storage[this.index];
  return popped;
};

Stack.prototype.size = function() {
  if (this.index > 0) {
    return this.index--;
  } else {
    return 0;
  }
};

