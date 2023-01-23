// console.log(global); like window in the browser. contains functions like set interval and set timeout
// console.log(process);

// function hi(){
//   console.log('hi')
// };

// export const myName = () => {
//   console.log('hi Dom')
// }
//  interesting, you can immediately invoke a function if you put brackets at the end. But the function
// has to be encapsulated in brackets for it to work...


// to export a function from one file into another you need to write module.exports = name_of_function

import  { readFile, writeFile } from 'fs/promises'
// importing the function readFile from the file system that comes with NODE ?

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8');
// defining a constant called template which is the result of calling the funciton readFile, which takes
// two arguments(it can take three, including a function at the end). the arguments are the URL path, which
// we've created using new URL and then passing 2 more arguments (absolute path and import.meta.url),
// then the second argument for readfile is 'encoding', which is how to encode/read the file. UTF essentially means convert
// into a string
console.log(template);

const data = {
  title: 'Learn NODE',
  body: 'This is the final HTML'
}

for (const [k,v] of Object.entries(data)){
  template = template.replace(`{${k}}`, v)
}
// for loop. defining two constants, k and v (key and value), for an object. in this case data is the object, so for each iteration
// k will be the key (title, body) and the v will be value ('learn NODE' etc).
// now in the loop we are going to go through 'template' and replace the current 'key' with the current value.
// i.e. in the first loop, k is title, so the comp will search for {title} and replace with 'learn NODE'
console.log(template);

await  writeFile(new URL('index.html', import.meta.url), template)
// await is essentially saying don't move to the next line of code until this is done.


