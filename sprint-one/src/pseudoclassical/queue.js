var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //use keyword new and this
  this.first = 0;
  this.index = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return;
};

Queue.prototype.dequeue = function(value) {
  var firstQueue = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return firstQueue;
};

Queue.prototype.size = function() {
  if (this.first > this.index) {
    return 0;
  }
  if (this.index > 0) {
    return this.index - this.first;
  } else {
    return 0;
  }
}

