function repeat(operation, num) {
	operation = function foo() {};
	for(var i = 0; i <= num; i++) {
		return operation;
	}
}
module.exports = repeat;
