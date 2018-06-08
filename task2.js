debug = false;

const fib = n => {
	const isNegative = n < 0;
	const isEven = n % 2 == 0;

	n = isNegative ? n * -1 : n;  // If it is negative then will make positive

	let [a, b] = [1, 0];
	while (n-- > 0) {
		[a, b] = [b + a, a];
	}

	return (isNegative && isEven) ? b * -1 : b;
};

if (debug) {
	const checkResult = (func, input, output) => func(input) === output;
	const runTest = (func, dict, header) => {
		header ? console.log(header) : null;
		let result = null;
		for (let key in dict) {
			// key is input argument
			// dict[key] is output
			result = func(key);
			console.log(result === dict[key] ? 'OK' : `"${key}" must be equal to "${dict[key]}" but it is "${result}"`);
		}
	};

	runTest(fib, {
		'-10': -55,
		'-2': -1,
		'-1': 1,
		'0': 0,
		'1': 1,
		'2': 1,
		'10': 55
	}, 'fib');

} else {
	const number = parseInt(process.argv[2]);  // Number from CLI
	process.stdout.write(fib(number).toString());
}
