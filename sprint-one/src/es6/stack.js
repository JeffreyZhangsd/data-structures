class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    //constructor builds current instance of object
    this.index = 0;
    this.storage = {};
  }
  //functions within the same class of Stack

  push(value) {
    this.storage[this.index] = value;
    this.index++;
    return;
  };

  pop(value) {
    this.index--;
    var popped = this.storage[this.index];
    delete this.storage[this.index];
    return popped;
  };

  size() {
    if (this.index > 0) {
      return this.index--;
    } else {
      return 0;
    }
  };
}