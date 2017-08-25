var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');

var firstBasicCard = new BasicCard('What is your fav color?', 'Blue');

console.log(firstBasicCard);

var firstClozeCard = new ClozeCard('Blue is my favorite color.', 'Blue');


console.log(firstClozeCard.partial);

// 'use strict';
// var inquirer = require('inquirer');

// var questions = [
//   {
//     type: 'input',
//     name: 'first_name',
//     message: 'Who was the first president of the United States?'
//   },
//   {

//   }
//   {
//     type: 'input',
//     name: 'last_name',
//     message: 'What\'s your last name',
//     default: function () {
//       return 'Doe';
//     }
//   },
//   {
//     type: 'input',
//     name: 'phone',
//     message: 'What\'s your phone number',
//     validate: function (value) {
//       var pass = value.match(/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
//       if (pass) {
//         return true;
//       }

//       return 'Please enter a valid phone number';
//     }
//   }
// ];

// inquirer.prompt(questions).then(function (answers) {
//   console.log(JSON.stringify(answers, null, '  '));
// });