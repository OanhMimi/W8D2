
function range(x,y){

    if(x === y){
        return [x];
    }
    else{
       var arr = range(x, y-1)
       arr.push(y);
       return arr
    }
}

console.log(range(1,4))



// function rangeOfNumbers(startNum, endNum) {
//  if (startNum - endNum === 0) {
//   return [startNum];
//  } else {
//   const numbers = rangeOfNumbers(startNum + 1, endNum);    
//   numbers.unshift(startNum);
//   return numbers;
//  }
// };

// console.log(rangeOfNumbers(1,4))