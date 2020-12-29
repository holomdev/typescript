class Sorter {

  constructor(public collection: number[] | string) {
  }

  sort(): void {
    const {length} = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        //All of this only works if collection is number[]
        //if collection is an array of numbers
        if (this.collection instanceof Array) {
          //collection === number[]
          if (this.collection[i] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        //Only going to work if collection is string
        //if collection is a string, do this instead
        // logic to compare and swap characters in a string
        if (typeof this.collection === 'string') {

        }

      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter);