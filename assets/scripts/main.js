// // console.log("Hello World!")

// // var varName1 = "Ken1"
// // console.log(varName1)


// // let varName2 = "Ken2"
// // console.log(varName2)


// // const varName3 = "Ken3"
// // console.log(varName3)

// // const varNum = 3.1416
// // console.log(varNum)

// // //boolean (True / False)
// // const bool = false
// // console.log(bool)

// // //array -- Indexing
// // const myArr = ['Ken', 2]
// // console.log(myArr)
// // console.log(myArr[0])

// //operators

// const firstNum = 300
// const secondNum = 7
// const sum = firstNum + secondNum;

// console.log(sum)

// // function myFunc() {
// //     return "I am a working function."
// // }
// console.log(myFunc(firstNum, secondNum))

// function myFunc(x,y) {
//     return x + y
// }



// /*
//     sum + 
//     diff -
//     product *
//     quotient /
//     exp **
//     modulo %
// */

// function Difference (x,y) {
//     return x - y
// }

// function Product (x,y) {
//     return x * y
// }

// function Quotient (x,y) {
//     return x / y
// }

// function Exponencial (x,y) {
//     return x ** y
// }

// function Modulo (x,y) {
//     return x % y
// }

// const firstNum = 300
// const secondNum = 7

// console.log("The first number is :" + firstNum)
// console.log("The second number is " + secondNum)

// console.log("The Difference of first number and second number is : "  + Difference(firstNum,secondNum))
// console.log("The Product  of first number and second number is : "  + Product(firstNum,secondNum))
// console.log("The Quotient  of first number and second number is : "  + Quotient(firstNum,secondNum))
// console.log("The Exponencial  of first number and second number is : "  + Exponencial(firstNum,secondNum))
// console.log("The Modulo  of first number and second number is : "  + Modulo(firstNum,secondNum))


//conditional statement

// const x = 300
// const y = 200

// if (x === 200) {
//     console.log('X is equal to 200')
// }else if(x === 300) {
//     console.log('X is equal to 300')
// }
// else {
//     console.log('The statement is false.')
// }

// for(let x=100; x >= 0; x = x - 1) {
//     console.log(x)
// }


// for (x = 0; x <= 100; x++) {
//     if (x%2) {
//         console.log(x)
//     }
// }


// const body = document.body
// const div = document.createElement("div")
// body.append(div)

// const  strong = document.createElement("strong")
// strong.innerText = "Hello Text"
// div.append(strong)

const div = document.querySelector('div')
console.log(div)

const spanHi = document.querySelector('#Hi')
const spanBye = document.querySelector('#Bye')


// spanBye.remove()
// div.append(spanBye)

// console.log(spanHi.getAttribute("title"))
// spanHi.setAttribute("id", "changedValue")
// spanHi.removeAttribute("id")

// console.log(spanHi.dataset)
// spanHi.dataset.newName = "hi"


// spanHi.classList.add("new-class")
// spanHi.classList.remove("hi1")
// // remove/add 
// spanHi.classList.toggle("hi1")

spanHi.style.color = "red"
spanHi.style.backgroundColor = "blue"