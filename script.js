'use strict';
/*
const bookings = [];

// default values
const createBooking = function (
  flightNumber,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  //  ES5 old
  //   numPassangers = numPassangers || 1;
  //   price = price || 199;

  const booking = {
    flightNumber,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('A212', undefined, 1000); // set undefinded value

const flight = 'H231';
const szymon = {
  name: 'Szymon',
  lastName: 'Burek',
  passport: 1231231313,
};

const checkIn = function (flightNumber, passanger) {
  flightNumber = 'LH999';
  passanger.name = 'Mr.' + passanger.name;
  if (passanger.passport === 1231231313) alert('Correct passport');
  else alert('Wrong passport!');
};

checkIn(flight, szymon);
console.log(flight, szymon);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(szymon);
checkIn(flight, szymon);
*/
/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), others.join(' ')];
};

console.log(upperFirstWord('Siema, co tam sluchac?'));

const transforming = function (str, fn) {
  console.log(`Ztransformowany tekst: ${fn(str)}, przez ${fn.name}`);
};

transforming(
  'JavaScript jest spoko ale ten kurs sie ciongnie dosc',
  upperFirstWord // Callback function
);

transforming('JavaScript jest spoko ale ten kurs sie ciongnie dosc', oneWord);
*/
/*
// Function return another function:

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//Using arrays:
const newGreet = greeting => name => console.log(`${greeting} ${name}`);

newGreet('hello')('Karol');
greet('Hiho')('Szymon');

// greeting => name => console.log(`${greeting} ${name}`);

// const heyStr = greet('Hey');
// heyStr('Szymon');

// greet('Hello')('Karol');
*/
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked flight in ${this.airline} airlines in ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Szymon Burek');
lufthansa.book(411, 'Karol Burek');

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// TODO: Call method:

//         this = eurowings
book.call(eurowings, 23, 'Andrzej Duda');
book.call(eurowings, 23, 'Andrzej Duda');
book.call(eurowings, 23, 'Andrzej Duda');

const swiss = {
  airline: 'Swiss Airlanes',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 22, 'Andrzej Kowalski');

console.log(swiss);
console.log(lufthansa);
console.log(eurowings);

// TODO: Apply method  - using array as an argument

const flightData = [583, 'Imie Nazwisko'];
book.apply(swiss, flightData);
// === the same:
book.call(swiss, ...flightData);

// TODO: Bind method:
// book.call(eurowings, 23, 'Andrzej Duda');

const bookEW = book.bind(eurowings); // Create a new Function with new parameter this = eurowings
const bookLH = book.bind(lufthansa);
const bookSA = book.bind(swiss);
bookEW(131, 'Andrzej Kowalski');
bookLH(222, 'Pawel Nowak');
bookSA(333, 'Adrianna Kowalska');

const bookEW23 = book.bind(eurowings, 23); // Flight number is also SET as 23
bookEW23('Zenon Kowalski');
bookEW23('Marta Zelenska');

//with eventListener:

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application:  - to preset parameters:

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value *0.23;

console.log(addVAT(1000));
console.log(addVAT(250));

// const addVat2 = function (value) {
//   console.log(value);
//   return console.log(addTax(0.23, value));
// };

// addVat2(100);

const calcRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const newVat = calcRate(0.23);
console.log(calcRate(0.23)(100));
console.log(newVat(100));
*/

// Challange 1
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0), // generate array with 4 elemts with is '0'
  registerNewAnswer() {
    let answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`));

    // if (answer === 0 || answer === 1 || answer === 2 || answer === 3) {
    //   poll.answers[answer]++;

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // } else console.log('Wrong answer!');
    // displayResults(this.answers);
    this.displayResults(this.answers);
  },
  displayResults(type) {
    if (typeof type === 'array') {
      console.log(type);
    } else {
      console.log(`Poll results are: ${type}`);
    }
  },

  // const registerNewAnswer = function () {
  //   let answer = Number(
  //     prompt(
  //       `What is your favourite programming language? \n0: JavaScript \n1: Python \n2: Rust \n3: C++'`
  //     )
  //   );
  //   if (answer === 0 || answer === 1 || answer === 2 || answer === 3) {
  //     poll.answers[answer]++;
  //   } else console.log('Wrong answer!');
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
*/

// Immedialety Invoked function expression (IIFE)
/*
// Closures - keeps varialbe in memmory, even the function was executed
const secureBooking = function () {
  let passangerCount = 0;
  return function () {
    passangerCount++;
    console.log(`${passangerCount} passangers`);
  };
};

let booking = secureBooking();

booking();
booking();
booking();

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // a = 23, that was assign during G function

const h = function () {
  const b = 500;
  f = function () {
    console.log(b * 2);
  };
};

h();
f(); //b = 500, that was assign during H function

// EXAMPLE nr 2:

const boardPassangers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`Passangers will be bording in ${perGroup} persons per group`);
  }, wait * 1000);

  console.log(`${n} passangers will be bording in ${wait} seconds!`);
};

boardPassangers(999, 5);


*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
