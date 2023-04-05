// // 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// //   order: function (starterIndex, mainIndex) {
// //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //   },

// //   orderDelivery: function (starterIndex, mainIndex, time, address) {
// //     console.log(
// //       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// //     );
// //   },

// //   orderPasta: function (ing1, ing2, ing3) {
// //     console.log(
// //       `Here is you delicious pasta with ${ing1}, ${ing2} and ${ing3} `
// //     );
// //   },

// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// // };

// // const ingredients = [
// //   //   prompt('Lets make some pasta! Ingredient 1?'),
// //   //   prompt('Ingredient 2?'),
// //   //   prompt('Ingredient 3?'),
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// // // Destructuring objects
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // // Default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // // Mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 25, b: 21, c: 33 };
// // ({ a, b } = obj);
// // console.log(a, b);

// // // Nested objects
// // const {
// //   fri: { open, close },
// // } = openingHours;
// // console.log(open, close);

// // // Destructuring arrays
// // // let [main, secondary] = restaurant.categories;
// // // console.log(main, secondary);

// // // [main, secondary] = [secondary, main];
// // // console.log(main, secondary);

// // // console.log(restaurant.order(2, 0));
// // // const [starter, mainCourse] = restaurant.order(2, 0);

// // // console.log(starter, mainCourse);

// const arr = [7, 8, 9];
// // // Bad way for creating new array
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);
// // // Good way for creating new array - spread
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// // console.log(...goodNewArr);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // // Copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // // Join 2 or more arrays
// // const menuNew = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menuNew);

// // // spread operator on string
// // const str = 'Dejan';
// // const letters = [...str, '', 'K'];
// // console.log(letters);
// // console.log(...str);

// // // SPREAD operator because RIGHT of =
// // const arrSpread = [1, 2, 3, ...[4, 5]];
// // console.log(arrSpread);

// // // REST operator because LEFT of =
// // const [d, f, ...others] = [1, 2, 3, 4, 5];
// // console.log(d, f, others);

// // const [pizza, , risotto, , ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, otherFood);

// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // const add = function (...numbers) {
// //   // console.log(numbers);
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };

// // add(2, 3);
// // add(2, 4, 6, 7, 8);
// // add(1, 3, 2, 5, 6, 7, 8, 9);

// // const x = [25, 27, 7];
// // add(...x);

// console.log('------OR------');
// console.log(3 || 'Dejan');
// console.log('' || 'Dejan');
// console.log(true || 0);
// console.log(undefined || null);

// console.log('------AND------');
// console.log(0 && 'Dejan');
// console.log(7 && 'Dejan');

// console.log('Hello' && null && 'Dejan' && 23);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Dejan',
// };

// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests = rest1.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// for (const item of menu) console.log(item);

// Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Rissoto', 'Pasta', 'Pizza']);
console.log(ordersSet);
