var validator = require("validator")


let email ="royal1@gmail.com"
let name = "royal1"


console.log(validator.isEmail(email));
console.log(validator.isAlpha(name));