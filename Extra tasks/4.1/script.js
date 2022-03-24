// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(number, next) {
    this.number = number;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(number) {
    let node = new Node(number);

    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      let current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
      this.size++;
    }
  }

  removeNode(number) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;
    let early = null;

    while (current != null) {
      if (current.number === number) {
        if (early === null) {
          this.head = current.next;
        } else {
          early.next = current.next;
        }

        this.size--;

        return current.number;
      }

      early = current;
      current = current.next;
    }
    return false;
  }

  print() {
    while (this.head != null) {
      console.log(this.head.number);
      this.head = this.head.next;
    }
  }
}

//const myList = new List();
