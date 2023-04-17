// // // 'use strict';

// // // // Data needed for a later exercise
// // // const flights =
// // //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// // };

// // //   order: function (starterIndex, mainIndex) {
// // //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// // //   },

// // //   orderDelivery: function (starterIndex, mainIndex, time, address) {
// // //     console.log(
// // //       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// // //     );
// // //   },

// // //   orderPasta: function (ing1, ing2, ing3) {
// // //     console.log(
// // //       `Here is you delicious pasta with ${ing1}, ${ing2} and ${ing3} `
// // //     );
// // //   },

// // //   openingHours: {
// // //     thu: {
// // //       open: 12,
// // //       close: 22,
// // //     },
// // //     fri: {
// // //       open: 11,
// // //       close: 23,
// // //     },
// // //     sat: {
// // //       open: 0, // Open 24 hours
// // //       close: 24,
// // //     },
// // //   },
// // // };

// // // const ingredients = [
// // //   //   prompt('Lets make some pasta! Ingredient 1?'),
// // //   //   prompt('Ingredient 2?'),
// // //   //   prompt('Ingredient 3?'),
// // // ];

// // // console.log(ingredients);

// // // restaurant.orderPasta(...ingredients);

// // // // Destructuring objects
// // // const { name, openingHours, categories } = restaurant;
// // // console.log(name, openingHours, categories);

// // // const {
// // //   name: restaurantName,
// // //   openingHours: hours,
// // //   categories: tags,
// // // } = restaurant;
// // // console.log(restaurantName, hours, tags);

// // // // Default values
// // // const { menu = [], starterMenu: starters = [] } = restaurant;
// // // console.log(menu, starters);

// // // // Mutating variables
// // // let a = 111;
// // // let b = 999;
// // // const obj = { a: 25, b: 21, c: 33 };
// // // ({ a, b } = obj);
// // // console.log(a, b);

// // // // Nested objects
// // // const {
// // //   fri: { open, close },
// // // } = openingHours;
// // // console.log(open, close);

// // // // Destructuring arrays
// // // // let [main, secondary] = restaurant.categories;
// // // // console.log(main, secondary);

// // // // [main, secondary] = [secondary, main];
// // // // console.log(main, secondary);

// // // // console.log(restaurant.order(2, 0));
// // // // const [starter, mainCourse] = restaurant.order(2, 0);

// // // // console.log(starter, mainCourse);

// // const arr = [7, 8, 9];
// // // // Bad way for creating new array
// // // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // // console.log(badNewArr);
// // // // Good way for creating new array - spread
// // const goodNewArr = [1, 2, ...arr];
// // console.log(goodNewArr);

// // // console.log(...goodNewArr);

// // // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // // console.log(newMenu);

// // // // Copy array
// // // const mainMenuCopy = [...restaurant.mainMenu];

// // // // Join 2 or more arrays
// // // const menuNew = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // // console.log(menuNew);

// // // // spread operator on string
// // // const str = 'Dejan';
// // // const letters = [...str, '', 'K'];
// // // console.log(letters);
// // // console.log(...str);

// // // // SPREAD operator because RIGHT of =
// // // const arrSpread = [1, 2, 3, ...[4, 5]];
// // // console.log(arrSpread);

// // // // REST operator because LEFT of =
// // // const [d, f, ...others] = [1, 2, 3, 4, 5];
// // // console.log(d, f, others);

// // // const [pizza, , risotto, , ...otherFood] = [
// // //   ...restaurant.mainMenu,
// // //   ...restaurant.starterMenu,
// // // ];
// // // console.log(pizza, risotto, otherFood);

// // // const { sat, ...weekdays } = restaurant.openingHours;
// // // console.log(weekdays);

// // // const add = function (...numbers) {
// // //   // console.log(numbers);
// // //   let sum = 0;
// // //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// // //   console.log(sum);
// // // };

// // // add(2, 3);
// // // add(2, 4, 6, 7, 8);
// // // add(1, 3, 2, 5, 6, 7, 8, 9);

// // // const x = [25, 27, 7];
// // // add(...x);

// // console.log('------OR------');
// // console.log(3 || 'Dejan');
// // console.log('' || 'Dejan');
// // console.log(true || 0);
// // console.log(undefined || null);

// // console.log('------AND------');
// // console.log(0 && 'Dejan');
// // console.log(7 && 'Dejan');

// // console.log('Hello' && null && 'Dejan' && 23);

// // const rest1 = {
// //   name: 'Capri',
// //   numGuests: 0,
// // };

// // const rest2 = {
// //   name: 'La Piazza',
// //   owner: 'Dejan',
// // };

// // // rest2.numGuests = rest2.numGuests || 10;
// // // rest1.numGuests = rest1.numGuests || 10;

// // // rest1.numGuests ||= 10;
// // // rest2.numGuests ||= 10;

// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // console.log(rest1);
// // console.log(rest2);

// // for (const item of menu) console.log(item);

// // Sets
// // const ordersSet = new Set(['Pasta', 'Pizza', 'Rissoto', 'Pasta', 'Pizza']);
// // console.log(ordersSet);

// // const nameSet = new Set('Dejan');
// // console.log(nameSet);

// // console.log(ordersSet.size);
// // console.log(nameSet.size);
// // console.log(ordersSet.has('Pizza'));
// // console.log(ordersSet.has('Bread'));

// // ordersSet.add('Garlic Bread');
// // ordersSet.add('Garlic Bread');
// // ordersSet.delete('Rissoto');
// // // ordersSet.clear();
// // console.log(ordersSet);

// // for (const order of ordersSet) console.log(order);

// // // Example:

// // const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// // const staffUnique = [...new Set(staff)];
// // console.log(staffUnique);

// // const rest = new Map();
// // rest.set('name', 'Clasico Italano');
// // console.log(rest);
// // rest.set(1, 'Firenze, Italy');
// // rest.set(2, 'Lisbon, Portugal');
// // console.log(rest);

// // rest
// //   .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'We are open')
// //   .set(false, 'We are closed');

// // console.log(rest.get('name'));
// // // console.log(rest.get(true));

// // const time = 21;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // console.log(rest.has('categories'));
// // console.log(rest.delete(2));
// // console.log(rest.size);
// // // console.log(rest.clear());
// // console.log(rest);

// // const question = new Map([
// //   ['question', 'What is the best programming language in the world?'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'JavaScript'],
// //   ['correct', 3],
// //   [true, 'Correct!'],
// //   [false, 'Try again'],
// // ]);

// // console.log(question);

// // console.log(question.get('question'));
// // for (const [key, value] of question) {
// //   if (typeof key === 'number') {
// //     console.log(`Answer ${key}: ${value}`);
// //   }
// // }

// // const answer = Number(prompt('Your answer?'));
// // console.log(answer);
// // if (answer === question.get('correct')) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[3]);
// console.log(plane[1]);

// console.log(airline.length);
// console.log('8737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal')); // Case sensitive

// console.log(airline.slice(4));

// console.log(airline.toLocaleLowerCase());
// console.log(airline.toLocaleUpperCase());

// // Fix capitalization in name
// const passenger = 'dEJaN'; // Dejan
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Split method

// const fullName = 'Dejan Kurcubic';
// console.log(fullName.split(' '));

// const [firstName, secondName] = 'Dejan Kurcubic'.split(' ');
// console.log(firstName);
// console.log(secondName);
// console.log(firstName, secondName);

// const newName = ['Mr.', firstName, secondName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('dejan kurcubic ivana kurcubic petar kurcubic');
// capitalizeName('katarina perc');

// const message = 'Go to gate 23';
// console.log(message.padStart(30, '_'));
// console.log(message.padEnd(30, '_'));
// console.log(message.padEnd(30, '_'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(32343456778872345));

// const message2 = 'Bad weather, ALL departures delayed ';
// console.log(message2.repeat(5));

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
