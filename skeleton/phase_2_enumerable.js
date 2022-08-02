// let callback = function(ele) {
//   console.log(ele * 2);
// }


// Array.prototype.myEach = function(callback) {
//   for(let i = 0; i < this.length; i++) {
//     let ele = this[i];
//     res = callback(ele);
//   }
// }

// console.log([3,2,1,4].myEach(callback))

// Array.prototype.myMap = function(callback) {
//   let newArr = [];

//   for(let i = 0; i < this.length; i++) {
//     let ele = this[i];
//     res = callback(ele);
//     newArr.push(res);
//   }
//   return newArr;

// }

// console.log(([1,2,3].myMap(callback)));

let callback = function(ele) {
  return (ele);
}

Array.prototype.myReduce = function(callback, num = 0) {
  let sum = num;

  for(let i = 0; i < this.length; i++) {
    let ele = this[i];
    sum += callback(ele);
  }

  return sum;
}

console.log(([1,2,3].myReduce(callback)));

console.log('hi')