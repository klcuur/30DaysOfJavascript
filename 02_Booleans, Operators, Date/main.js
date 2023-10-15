// Booleans

/* let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false */

const PI = 3.14
let radius = 100          // length in meter

const weight = mass * gravity
console.log(weight)       

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


const check = 4 > 3 && 10 > 5         // true && true -> true
const check1 = 4 > 3 || 10 > 5         // true  || true -> true


// Increment Operator
// Pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
//Post-increment
let count1 = 0
console.log(count++)        // 0
console.log(count)          // 1

//Decrement Operator
//Pre-decrement
let count2 = 0
console.log(--count) // -1
console.log(count)  // -1
//Post-decrement
let count3 = 0
console.log(count--) // 0
console.log(count)   // -1
//Ternary Operators
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

isRaining = false
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

alert('Welcome to 30DaysOfJavaScript')
prompt('required text', 'optional text')

const now = new Date()
console.log(now) // Sat Jan 04 2023 00:56:41 GMT+0200 (Eastern European Standard Time)

const now1 = new Date()
console.log(now.getFullYear()) // 2023

const now2 = new Date()
console.log(now.getMonth()) // 0, because the month is January,  month(0-11)

const now3 = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
