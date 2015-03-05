// returns first n fibonacci numbers
function fibonacci(n) {
	if (n == 0) {
		return 0;
	} else if (n === 1 || n === 2) {
		return 1;
	} else {
		var a = 1;
		var b = 1;
		n = n - 2;

		while (n > 0) {
			var sum = a + b;
			a = b;
			b = sum;
			n = n - 1;
		}
	}

	return sum;
};

console.log(fibonacci(35));