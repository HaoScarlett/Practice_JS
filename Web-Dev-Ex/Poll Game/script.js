'use strict';
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199*numPassengers) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123',2,200);
// createBooking('AVC',undefined,300);

// const flight = 'A123';
// const shelly = {
//     name: 'Shelly Davis',
//     passport: 32193049,
// };
// const checkIn = function (flightNum,passenger){
//     passenger.name = 'Mrs.'+passenger.name;
//     if(passenger.passport===32193049){
//         alert('Check in')
//     }else alert('Wrong passport')
// }
// checkIn(flight,shelly);
// console.log(flight);

// const newPassport = function(person){
//     person.passport=Math.trunc(Math.random()*1000)
// };
// newPassport(shelly);
// checkIn(flight,shelly);
// console.log(shelly);

// const oneWord = function(str){
//     return str.replace(/ /g,'').toLowerCase();
// };

// const upperFirst = function(str){
//     const [first,...others] = str.split(' ');
//     return [first.toUpperCase(),...others].join(' ');
// };

// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirst);
// transformer('JavaScript is the best!', oneWord);

// const canadaAir = {
//   airline: 'Canada Air',
//   iataCode: 'CA',
//   booking: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat 
//         on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// canadaAir.book(237, 'Emma');
// console.log(canadaAir);

// const euroWings = {
//   airline: 'euroWings',
//   iataCode: 'EU',
//   booking: [],
// };

// const book = canadaAir.book;

// book.call(euroWings, 23,'David');
// book.call(canadaAir, 123, 'Carter');

// const flightData = [123, 'Judy'];

// book.call(euroWings,...flightData);
// console.log(euroWings);

// const bookEW = book.bind(euroWings);
// // bookEW(23, 'Brian');
// const bookEW23 = book.bind(euroWings, 23);
// bookEW23('Cooper');

// canadaAir.planes = 300;
// canadaAir.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // Use bind to point ait canadaAir,
// // otherwise this points to the btn
// document
//   .querySelector('.buy')
//   .addEventListener('click', canadaAir.buyPlane.bind(canadaAir));

// const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.13, 200));

// const addVAT = addTax.bind(null, 0.23);
// // const addVat = value => value+value*rate;
// // null as the context, 0.13 as the first argument. 
// console.log(addVAT(450));

