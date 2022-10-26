var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0; //first index
  var i = 0; //numeric key

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //starting at index 0, should add into queue
    storage[i] = value;
    i++;
  };

  someInstance.dequeue = function() {
    //should dequeue from earliest index
    //looking at first key
    var firstQueue = storage[first]
    delete storage[first];
    first++;
    return firstQueue;
  };

  someInstance.size = function() {
    //should get size of queue
    if (first > i) {
      return 0;
    }

    if (i > 0) {
      return i - first;
    } else {
      return 0;
    }
  };

  return someInstance;
};
