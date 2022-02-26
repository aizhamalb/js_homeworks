document.addEventListener("DOMContentLoaded", )


function btnPlus () {
    const firstNumber = document.getElementById("first")
    const secondNumber = document.getElementById("second")
    const result = document.querySelector("div")

    let equal = result.textContent
    equal = Number(firstNumber.value) + Number(secondNumber.value)
    result.textContent = equal
}