let n = [23, 72, 35, 62, 75, 25]
let m = Number(prompt())

while (m != 0) {
    for (let i = 0; i < n.length; i++) {
        let found = false
       
        if ( m === n[i]) {
            found = true
        }
        
        if (found) console.log ("Есть")
        else console.log("Нет")
    
        m = Number(prompt())   
    }   
}