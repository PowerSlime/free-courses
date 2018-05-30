const fib = n => {
	let [a, b] = [1, 0];
	while (n-- > 0) {
		[a, b] = [b + a, a];
	}

	return b;
};

const number = parseInt(process.argv[2]);  // Number from CLI
process.stdout.write(fib(number).toString());
