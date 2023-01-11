// function tenSquared(){
//   console.log(10*10)
// }

// tenSquared();
// // DRY - Don't repeat yourself.

// function squared(number){
//   return number*number
// }

// // console.log(squared(12));

// squared(12);

// // execution context

// function copyArrayAndMultiplyBy2(array) {
//   const output = []
//   for (let i = 0; i < array.length; i++){
//     output.push(array[i] * 2);
//   }
//   return output;
// }

// const myArray = [1,2,3];
// const result = copyArrayAndMultiplyBy2(myArray);
// console.log(result);

// function copyArrayAndDivideBy2(array) {
//   const output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i]/2);
//   }
//   return output;
// }

// const divideResult = copyArrayAndDivideBy2(myArray);
// console.log(divideResult);


// function after(count, func) {
//   let counter = 0;
//   return (val) => {
//     if (++counter >= count) func(val);
//   }
// }

const count = 5;
let counter = 0;

function increment(){
  if (++counter <= count){
    console.log(counter);
  }
}

increment();
increment();
