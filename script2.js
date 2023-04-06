'use strict';

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

//
//
//
//
//
//
//
//

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

//
//
//
//
//
//
//
//
// Function return another function:

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//Using arrows function:
const newGreet = greeting => name => console.log(`${greeting} ${name}`);

newGreet('hello')('Karol');
greet('Hiho')('Szymon');
//
//
//
//
//
//
//
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
// set this keyword as a typed
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

//
//
//
//
//
//
//
