// Functions

// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}

//Function returning value
function printFullName() {
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  

  sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93

  function greetings(name = 'Ugur') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())//Ugur, welcome to 30 Days Of JavaScript!
  console.log(greetings('Kilic'))//Kilic, welcome to 30 Days Of JavaScript!