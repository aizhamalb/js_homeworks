let n = 0
let myArrThree = []
let myArrFour = []

for (i = 1; i < 101; i++) {
    let res = n + i
    if (res % 3 === 0) {
        myArrThree.push(res)
    }

    if (res % 4 === 0) {
        myArrFour.push(res)
    }
}

console.log(myArrThree)
console.log(myArrFour)
