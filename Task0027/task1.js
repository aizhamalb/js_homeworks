function checkAge(age) {
    if (age > 18) {
        return true
    } else {
        return confirm('Родители разрешили?')
    }

}

// Сделайте два варианта функции checkAge:
//     Используя оператор ?
//     Используя оператор ||



function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?')
}

console.log(checkAge())

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?')
}

console.log(checkAge())