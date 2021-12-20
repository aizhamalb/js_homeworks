let myArrayTwo = []
let myArrayThree = []

let a = Number(prompt("Введите 1-ое число: "))
let b = Number(prompt("Введите 2-ое число: "))
let c = Number(prompt("Введите 3-е число: "))
let d = Number(prompt("Введите 4-ое число: "))
let e = Number(prompt("Введите 5-ое число: "))
let f = Number(prompt("Введите 6-ое число: "))
let g = Number(prompt("Введите 7-ое число: "))

if (a % 2 === 0) {
    myArrayTwo.push(a)
}

if (b % 2 === 0) {
    myArrayTwo.push(b)
}

if (c % 2 === 0) {
    myArrayTwo.push(c)
}

if (d % 2 === 0) {
    myArrayTwo.push(d)
}

if (e % 2 === 0) {
    myArrayTwo.push(e)
}

if (f % 2 === 0) {
    myArrayTwo.push(f)
}

if (g % 2 === 0) {
    myArrayTwo.push(g)
}

console.log(myArrayTwo)

if (a % 3 === 0) {
    myArrayThree.push(a)
}

if (b % 3 === 0) {
    myArrayThree.push(b)
}

if (c % 3 === 0) {
    myArrayThree.push(c)
}

if (d % 3 === 0) {
    myArrayThree.push(d)
}

if (e % 3 === 0) {
    myArrayThree.push(e)
}

if (f % 3 === 0) {
    myArrayThree.push(f)
}

if (g % 3 === 0) {
    myArrayThree.push(g)
}

console.log(myArrayThree)