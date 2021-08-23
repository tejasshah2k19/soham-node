function add(a, b) {
    console.log("addition = ", (a + b));
}

function sub(a, b) {
    console.log("subtraction = ", (a - b));
}

module.exports.add = add 
module.exports.subtraction = sub  // publicname = functionname 
