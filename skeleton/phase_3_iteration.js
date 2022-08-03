Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for(let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
}



// console.log(([1,2,3].myReduce(callback)));


String.prototype.subStrings = function() {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      if (!newArr.includes(this.slice(i, j+1))) {
        newArr.push(this.slice(i, j+1));
      }
    }
  }
  return newArr;
}


console.log("apple".subStrings());