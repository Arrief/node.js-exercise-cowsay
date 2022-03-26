const student = require('./information');

const cowsay = require('cowsay');

console.log(cowsay.say({
  text: `Hey there, greetings from ${student.name}, a student at Wild Code School's ${student.campus} campus.`, 
  e: 'oO',
  T: 'U',
})
);
