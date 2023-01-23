// ERROR HANDLING
import { readFile } from "fs/promises"

// readFile(new URL('app.mjs', import.meta.url), 'utf-8', (error, data) => {
//   if (error) {
//     throw error
//   } else {
//     // do something else
//   }
// })

// calling function readFile with three paramaters. the first parameter is a new URL referring to 'app.mjs' and import.meta.url
// utf-8 is for encoding (to read it), then third paramter is a callback with two arguments (error and data)
// the callback function will perform separate tasks depending on whether error or data is triggered...
// this callback is only necessary when running synchronous code. if we wanted it to be async we could use await and would get
// a promise. to catch error you would wrap it in a try catch like follows:


try {
  const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
} catch (e) {
  console.error(e)
  console.log('heyyyy')
}

// Scott likes using await. makes it feel more similar to other languages... 
