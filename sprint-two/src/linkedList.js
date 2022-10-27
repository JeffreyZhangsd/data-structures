var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //linkedlist keeps track of order
  //the head points to the next "node" in the linked list, which points to it's next node
  //until it reaches the tail which doesn't point to any node
  // { '12': 6, '6': 71, '71': 26, '26': null }
  // { key: next key }

  list.addToTail = function(value) {
    //our last ideas weereee uhhh
    //we get a new value
    //we set the key value of our old tail to be our new value
    //we set the new tail to be our given value
    //boom profit
  };

  list.removeHead = function() {
    //
  };

  list.contains = function(target) {
    //find target using key
    //return true
    for (var key in list) {
      if (list[key] === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
