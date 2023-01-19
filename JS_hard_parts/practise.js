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

// const count = 5;
// let counter = 0;

// function increment(){
//   if (++counter <= count){
//     console.log(counter);
//   }
// }

// increment();
// increment();

// function counter(){
//   let counter = 0;
//   function incrementCounter(){
//     counter ++
//     console.log(counter);
//   }
//   return incrementCounter;
// }

// const myNewFunction = counter();

// myNewFunction();

// myNewFunction();

// function display(data){
//   console.log(data);
// }

// const futureData = fetch('https://twitter.com/will/tweets/1');
// futureData.then(display);

// const myObject = {};

// myObject.name = "Dom"
// myObject.score = 3;

// console.log(myObject);
// console.log(myObject.score);

// myObject.increment = function(){
//   myObject.score ++
// }

// myObject.increment();

// console.log(myObject.score);

function userCreator(name, score){
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function(){this.score++;};
userCreator.prototype.login = function(){ console.log("login");};

const user1 = new userCreator('dom', '5');

user1.increment();

console.log(user1.score);
