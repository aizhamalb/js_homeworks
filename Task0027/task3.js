function pow(x, n) {
    let res = x
    for (i = 1; i < n; i++) {
        res *= x
    }

    return res
}

console.log(pow(3,2))
console.log(pow(3,3))
console.log(pow(1,100))

let x = Number(prompt('Введите число:'))
let n = Number(prompt('Введите степень:'))

if (n < 1) {
    alert(`${n} степень не поддерживается, введите натуральное число`)
} else {
    alert(pow(x, n))
}