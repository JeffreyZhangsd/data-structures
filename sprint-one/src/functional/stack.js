var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var i = 0; //index

  // Implement the methods below
  someInstance.push = function(value) {
    storage[i] = value;
    //should add value to end of object
    if (i in storage) {
      someInstance[i] = value;
      i++
    }
    return;
  };

  someInstance.pop = function() {
    //should remove most recent value from end of object
    i--;
    var popped = storage[i];
    delete storage[i];
    return popped;
  };

  someInstance.size = function() {
    //should get size of stack
    if (i >= 0) {
      return i--;
    } else {
      return 0;
    }
  };
  return someInstance;
};
