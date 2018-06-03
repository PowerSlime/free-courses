const fib = n => {
	let isNegative = n < 0;
	let isEven = n % 2 == 0;

	n = Math.abs(n);  // If it is negative then will make positive

	let [a, b] = [1, 0];
	while (n-- > 0) {
		[a, b] = [b + a, a];
	}

	return (isNegative && isEven) ? b * -1 : b;
};

const number = parseInt(process.argv[2]);  // Number from CLI
process.stdout.write(fib(number).toString());
