var LinkedList = function() {
  var list = {};
  //debugger;
  list.head = null;
  list.tail = null;
  //linkedlist keeps track of order
  //the head points to the next "node" in the linked list, which points to it's next node
  //until it reaches the tail which doesn't point to any node
  // { value: actual value, next: actual next node || null }

  list.addToTail = function(value) {
    //create new Node(value)
    //list.tail.next = new Node
    //list.tail = new Node
    var newTail = new Node(value);
    if (list.head === null) {
      list.head = newTail;
      list.tail = newTail;
    } else {
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    //var past = list.head
    //update list.head
    //return past
    var past = list.head.value;
    list.head = list.head.next;
    return past;
  };

  list.contains = function(target) {
    //search current Node
    //if value === target
      //return true
    //otherwise if current Node has next value
      //call contains on next Node
    //otherwise
      //return false

      //checkCurrentNode()
    if (this.value === target) {
      return true;
    }

    var checkCurrentNode = function(node) {
      if (node.value === target) {
        return true;
      }
      if (node.next !== null) {
        return checkCurrentNode(node.next);
      }
      return false;
    }
    return checkCurrentNode(list.head);
  };
  //RETURN LIST
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

seems logarithmic

 */
