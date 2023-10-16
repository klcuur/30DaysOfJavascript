// Arrays

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)


const arr = [
    'Kilic',
    250,
    true,
    { country: 'Turkiye', city: 'Ankara' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'C#'] }
] // arr containing different data types
console.log(arr)


const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies
  
  console.log(webTechs1)        // all the array items
  console.log(webTechs1.length) // => to know the size of the array, which is 7
  console.log(webTechs1[0])     //  -> HTML
  console.log(webTechs1[6])     //  -> MongoDB
  
  let lastIndex = webTechs1.length - 1
  console.log(webTechs1[lastIndex]) // -> MongoDB


const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits1.indexOf('banana')  // 0

const numbers1 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers1.lastIndexOf(2)) // 7
console.log(numbers1.lastIndexOf(0)) // -1
console.log(numbers1.lastIndexOf(1)) //  6
console.log(numbers1.lastIndexOf(4)) //  3
console.log(numbers1.lastIndexOf(6)) // -1
console.log(numbers1.includes(5)) // true
console.log(numbers1.includes(0)) // false
console.log(numbers1.includes(1)) // true
console.log(numbers1.includes(6)) // false

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const numbers2 = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers2.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items