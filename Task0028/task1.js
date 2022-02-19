let calculator = {
    read () {
        this.a = Number(prompt('Enter a:'))
        this.b = Number(prompt('Enter b:'))
    },
    sum () {
        return sum = this.a + this.b
    },
    mul (){
        return mul = this.a * this.b
    },

}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );