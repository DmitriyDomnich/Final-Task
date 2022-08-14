// ! TASK 1
// import { Student } from './Student.js';

// const student = new Student('Dmytro', 'Domnich', 2021);

// console.log(student.getFullName());
// console.log(student.getCourse());

// ! TASK 2
// import { countCalls } from './CountCalls.js';

// const func = countCalls();
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());

// ! TASK 3
// import { randomHundred } from './RandomHundred.js';

// const generateHundred = randomHundred();
// console.log(generateHundred());

// ! TASK 4
// import './FillDiv.js';

// ! TASK 5
// import './PromiseChain.js';

// ! TASK 6
// import './TillBirthday.js';

// ! TASK 7
// import { squarePositiveValues } from './PositiveArray.js';

// console.log(squarePositiveValues([4, 9, 0, -1, -5, -10, -20, 36, 100]));

// ! TASK 8
// import './RandomPromise.js';

// ! TASK 9
// import './Fibonacci.js';

// ! TASK 10
// import './FormsSum.js';

// ! TASK 11
// import { Human, sortHumansByAge } from './Human.js';

// const humans = [
//   new Human(26, 'Maria', [
//     { k: 5, name: 'Games' },
//     { k: 3, name: 'Gym' },
//     { k: 4, name: 'Music' },
//   ]),
//   new Human(20, 'Dmytro', [
//     { k: 4, name: 'Coding' },
//     { k: 5, name: 'Music' },
//   ]),
//   new Human(32, 'Oleksandr', [
//     { k: 5, name: 'Traveling' },
//     { k: 1, name: 'Chess' },
//   ]),
// ];
// const sortAscending = sortHumansByAge();
// const sortDescending = sortHumansByAge(true);

// console.log(humans.sort(sortAscending));
// console.log(humans.slice().sort(sortDescending));

// console.log(humans[0].getFavouriteHobbyName());
// console.log(humans[1].getFavouriteHobbyName());
// console.log(humans[2].getFavouriteHobbyName());

// ! TASK 12

// import { mayonnaiseAdditive, seasoningAdditive } from './FastFood/Additives.js';
// import { BigHamburger } from './FastFood/BigHamburger.js';
// import { SmallHamburger } from './FastFood/SmallHamburger.js';

// const bigHamburger = new BigHamburger('Cheese', [
//   mayonnaiseAdditive,
//   seasoningAdditive,
// ]);
// const smallHamburger = new SmallHamburger('Salad', [seasoningAdditive]);

// console.log(bigHamburger.price + '$');
// console.log(bigHamburger.kallories + ' kals');
// console.log(smallHamburger.price + '$');
// console.log(smallHamburger.kallories + ' kals');

// ! TASK 13

// import { reliableMultiply } from './ReliableMultiply.js';

// console.log(reliableMultiply(42, 32));
