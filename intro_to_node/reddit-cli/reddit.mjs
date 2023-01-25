#! /usr/bin/env node

//1st line = hash bang that tells us to interepret this file in the NODE enviornment

import open from '../server/node_modules/open'
import fetch from 'node-fetch'
import yargs from 'yargs'

// install 3 modules

// parse env vars
const { argv } = yargs(process.argv)
// init fetch to reddit api
const res = await fetch('https://www.reddit.com/.json');
const data = await res.json();
// console.log(data)

const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]
const link = `https://reddit.com${randomPost.data.permalink}`

if (argv.print) {
  console.log(`
  title: ${randomPost.data.title}
  link: ${link}
  `)
} else {
  open(link)
}

// bin = all global commands get installed (cli's)
// need to register new command in bin folder
// to make a CLI you need to add a bin and then a hashbang to entry file (the line at the top of this page)
