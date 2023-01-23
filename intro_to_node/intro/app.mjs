// const hello = require('./index.mjs')
// requiring method from another file. Question: what if there are multiple functions being sent across?
// answer - can export in an object
console.log('hello');

import { myName } from './index.mjs';

myName();
