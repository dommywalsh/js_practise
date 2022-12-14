// const students = ["dom", "georgie", "matt", ]

// // for (let score = 0; score < students.length; score ++) {
// //   console.log(`Hi ${students[score]}`)
// // }

// // for (let student of students) {
// //   console.log(`Hi ${student}`)
// // }

// // while (students.length > 0) {
// //   let student = students.pop();
// //   console.log(`Hi ${student} ${students.length}`)
// // }

// // function timeRemaining(timeElapsed,endTime) {
// //   return endTime - timeElapsed
// // }

// // const left = timeRemaining(42, 240);

// // console.log(left);
// function addFavoriteBook(bookName) {
//   if (!bookName.includes("Great")) {
//     favoriteBooks.push(bookName)
//   }
// };

// const favoriteBooks = []

// addFavoriteBook("A Song of Ice and Fire");
// addFavoriteBook("The Great Gatsby");
// addFavoriteBook("Crime & Punishment");
// addFavoriteBook("Great Expectations");
// addFavoriteBook("You Don't Know JS");

// function printBooks(array) {
//   console.log(`favorite books: ${favoriteBooks.length}`)
//   for (let bookName of favoriteBooks) {
//     console.log(bookName)
//   }
// }

// printBooks()

// const numberOne = 55
// const numberTwo = 30

// const numberThree = "30"
// console.log(numberThree)
// const numberThreeInt =  parseInt(numberThree, 10)
// console.log(typeof numberThreeInt )

// sum = 0
// console.log(sum)

// if (numberOne > numberTwo) {
//  sum += 1
// }

// console.log(sum)

// let teacher = "kyle"

// function otherClass() {
//   teacher = "Suzy";
//   topic = "react";
// }

// name = "Dom"

// otherClass();

// console.log(teacher)
// console.log(topic)
// console.log(name)

// const array = ['dom', 'g','bel']

// let hash = new Map()

// hash.set('name', "dom")

// console.log(hash.get('name'))

// let myAttributes = {name: "dom", age: "28", height: 183, hairColor: "blonde"}

// console.log(myAttributes.age)

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("david", "walsh", 64, "blue");

console.log(myFather.eyeColor);

Person.prototype.ask = function(question){
  console.log(this.firstName, question);
}

myFather.ask("are you okay? ")
