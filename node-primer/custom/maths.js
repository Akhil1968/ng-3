var add = function (x, y){
	console.log("Addition of " + x + " and " + y + " is " + (x + y));
}

var mult = function (x, y){
	console.log("Multiplication of " + x + " and " + y + " is " + (x * y));
}

module.exports.add = add;
module.exports.mult = mult;