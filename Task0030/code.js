document.addEventListener("DOMContentLoaded", () => {
    const inputElem = document.querySelector("input")

    document.getElementById("one").addEventListener('click', () => {
        inputElem.value += '1'
    } )
    document.getElementById("two").addEventListener('click', () => {
        inputElem.value += '2'
    } )
    document.getElementById("three").addEventListener('click', () => {
        inputElem.value += '3'
    } )
    document.getElementById("four").addEventListener('click', () => {
        inputElem.value += '4'
    } )
    document.getElementById("five").addEventListener('click', () => {
        inputElem.value += '5'
    } )
    document.getElementById("six").addEventListener('click', () => {
        inputElem.value += '6'
    } )
    document.getElementById("seven").addEventListener('click', () => {
        inputElem.value += '7'
    } )
    document.getElementById("eight").addEventListener('click', () => {
        inputElem.value += '8'
    } )
    document.getElementById("nine").addEventListener('click', () => {
        inputElem.value += '9'
    } )
    document.getElementById("zero").addEventListener('click', () => {
        inputElem.value += '0'
    } )


    document.getElementById("plus").addEventListener('click', () => {
        inputElem.value += '+'
    } )
    document.getElementById("minus").addEventListener('click', () => {
        inputElem.value += '-'
    } )
    document.getElementById("divide").addEventListener('click', () => {
        inputElem.value += '/'
    } )
    document.getElementById("multiply").addEventListener('click', () => {
        inputElem.value += '*'
    } )
    document.getElementById("equal").addEventListener('click', calculate)

})

function calculate () {
    let si = 0
    let text = document.querySelector("input").value
    for ( let i = 0; i < text.length; i++ ) {
        if ("+-/*".includes(text[i])){
            si = i
        }
    }
    const firstNum = Number(text.slice(0, si))
    const secondNum = Number(text.slice(si+1, text.length))
    let result = 0
    if (text[si] == "+") result = firstNum + secondNum
    else if (text[si] == "-") result = firstNum - secondNum
    else if (text[si] == "*") result = firstNum * secondNum
    else if (text[si] == "/") result = firstNum / secondNum
     
    document.querySelector("input").value = result
}



// function run () {
//     let button = document.querySelectorAll("button")
//     let field = document.getElementById("input_field")
//     for ( let i = 0; i < button.length; i++ ) {
//         let btn = button[i]
//         btn.addEventListener("click", () => {
//             field.innerText = []
//             field.push("btn.innerText")
//             calc(btn.innerText)
//         })
//     }

// }

// function calc (sign) {
//     if (!Number(btn.innerText)) {
//         let 
//     }

//     if (sign === "+") {

//     }

// }