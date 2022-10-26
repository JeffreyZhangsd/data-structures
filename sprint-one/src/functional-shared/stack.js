var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.index = 0;
  instance.storage = {};
  //use thi s
  //use _.extend
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {}

//should push value into end
stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return;
};

//should pop out value at end
stackMethods.pop = function(value) {
  this.index--;
  var popped = this.storage[this.index];


  delete this.storage[this.index];

  return popped;
};

//should get stack size
stackMethods.size = function() {
  if (this.index > 0) {
    return this.index--;
  } else {
    return 0;
  }
};