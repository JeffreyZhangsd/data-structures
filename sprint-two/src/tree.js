var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  //extend treeMethods
  newTree.children = [];  //array containing a number of subtrees
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
//takes any value, sets that as the target of a node and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  //create a tree object
    //with value and children = []
  //push tree object into current (this) .children
  var newestTree = new Tree(value);
  this.children.push(newestTree);
};

//reads through nodes and returns boolean if target is found
treeMethods.contains = function(target) {
  //if this.value === target
    //return true;
  //for each child
    //checkCurrentTree(TreeNode)
  var checkCurrentTree = function(tree) {
    //for each child, check child value and THEN check their children
    if (this.value === target) {
      return true;
    }
    //if no children, do this
    if (this.children.length === 0) {
      return false;
    }
    var foundBelow = false;
    this.children.forEach(function(child) {
      //checkCurrentTree(child) --> returns boolean
      //foundBelow = foundBelow || checkCurrentTree(child)
      var checked = checkCurrentTree.call(child);
      foundBelow = foundBelow || checked;
    });
    return foundBelow;
  }
  return checkCurrentTree.call(this);
};

/*
 * Complexity: What is the time complexity of the above functions?

linear time complexity

 */
