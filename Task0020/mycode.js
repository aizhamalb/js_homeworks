let a = Number(prompt('Enter first number:'))
let sign = prompt('Enter an operator:')
let b = Number(prompt('Enter second number:'))

if (sign === "-") {
    let res = a - b
    alert(`Answer is ${res}`)
} else if ( sign === "+") {
    let res = a + b
    alert(`Answer is ${res}`)
} else if (sign === "*") {
    let res = a * b
    alert(`Answer is ${res}`)
} else if (sign === "/") {
    let res = a % b
    alert(`Answer is ${res}`)
} else {
    alert("Error!")
}