'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

const say = (message) => console.log(message);
const students = require('./students.json');

students.forEach(student => {
  say(`Hello ${student.firstName} ${student.lastName}!`)
})

const filterName = students.filter((student) => student.lastName.toLowerCase().indexOf("d") === 0);
say("Count of last names starting with D is " + filterName.length + ".");