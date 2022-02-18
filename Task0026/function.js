function myMax (arr) {
    let maxNum = arr[0]

    for (let i = 0; i < arr.length; i++ ) {
        if ( maxNum < arr[i]) {
            maxNum = arr[i]
        }
    }
    return maxNum
}

console.log(myMax([45, 56, 34, 5657, 65, 323]))