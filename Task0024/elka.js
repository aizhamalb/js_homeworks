let tree = Number(prompt())
let leftSide = ""
let left = "/"
let center = ""
let right = "\\"

for (let i = 0; i < tree; i++ ) {
    leftSide = ''
    for (let j = 0; j < tree - i; j++) {
        leftSide = leftSide + ' ' 
    }

    center = ''
    for (let k = 0; k < i; k++) {
        center = center + " " + " "
    }
    console.log(leftSide+left+center+right)
}



