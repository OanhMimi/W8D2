// Array.prototype.uniq = function() {
//   let newUnique = [];
//   this.forEach(function(ele) {
//     if (!newUnique.includes(ele)) {
//       newUnique.push(ele);
//     }
//   })
//   return newUnique;
// }

// console.log(([1,2,2,3,3,3].uniq()))

// function uniq(array) {
//   let newUnique = [];
//     array.forEach(function(ele) {
//     if (!newUnique.includes(ele)) {
//       newUnique.push(ele);
//     }
//   })

//   return newUnique;
// }

// console.log(uniq([1, 2, 2, 3, 3, 3]))

// Array.prototype.twoSum = function() {
//   let sumArr = [];

//   for(let i = 0; i < this.length; i++) {
//     let ele1 = this[i];
//     for(let j = 0; j < this.length; j++) {
//       let ele2 = this[j];
//       if (ele1 + ele2 === 0) {
//         sumArr.push([i, j]);
//       }
//     }
//   }

//   return sumArr;
// }

// console.log(([1,2,-1,3,3,-3].twoSum()));


Array.prototype.transpose = function() {
  let newArr = [];

  for(let i = 0; i < this[0].length; i++) {
    newArr.push([]);
    for(let j = 0; j < this.length; j++) {
      newArr[i][j] = this[j][i];
    }
  }

  return newArr;
}


console.log(([[1,2,3], [4,5,6]].transpose()))




