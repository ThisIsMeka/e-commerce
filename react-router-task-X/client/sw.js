function t (num) {
    let value = 0;
    return {
        a: function (val) {
            value = value + val
            return this
        },
        b: function (val) {
            value = value + val
            return this
        },
        result: ()=>{
            return value
        }
    }
}


console.log(t())