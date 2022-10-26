var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.first = 0;
  instance.index = 0;
  instance.storage = {};

  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

//inside the functions, each "this" refers to instance

//should push value into end
queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return;
}

//should pop value at beginning
queueMethods.dequeue = function(value) {
  var firstQueue = this.storage[this.first];
  delete this.storage[this.first]
  this.first++;
  return firstQueue;
};

queueMethods.size = function() {
  if (this.first > this.index) {
    return 0;
  }
  if (this.index > 0) {
    return this.index - this.first;
  } else {
    return 0;
  }
};
