class LinkedList {
  /* Do not modify the constructor */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /* Add the given value to the tail
  of the list. The `tail` pointer
  should be updated accordingly */
  addToTail(value) {
    const node = {
      value: value,
      next: null
    }

    if (this.head === null) {
      this.head = node;
      this.list = [ node ];
    } else {
      this.list[this.list.length - 1].next = node;
      this.list.push(node);
    }

    this.tail = node;
  }

  /* Remove the list's `head` value 
  The `head` pointer should be updated
  accordingly */
  removeHead() {

  }

  /* Searches the list for the given value
  Returns true or false accordingly */
  contains(value) {

  }

  /* Finds and returns the maximal value
  of all the values in the list */
  getMax() {
    
  }
}

module.exports = LinkedList;