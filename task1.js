debug = false;

const getLettersFromString = string => {
	let result = [];
	const allownedChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

	string
		.toLowerCase()
		.split('')
		.forEach(char => allownedChars.includes(char) ? result.push(char) : null);

	return result.join('');
}


const isPolindrome = string => {
	const letters = getLettersFromString(string);

	// parseInt(3.14) -> 3, as parseInt("3.14")
	for (let firstIndex = 0; firstIndex < parseInt(letters.length / 2); firstIndex++) {
		// +1 because we mustn't try to get "out of range" item from array (string)
		let lastIndex = letters.length - (firstIndex + 1);

		if (letters[firstIndex] !== letters[lastIndex]) {
			return false;
		}
	};

	return true;
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

	runTest(isPolindrome, {
		'abc': false,
		'a': true,
		'__a': true,
		'Was it a car or a cat I saw?': true
	}, 'isPolindrome');

	runTest(getLettersFromString, {
		'Was it a car or a cat I saw?': 'wasitacaroracatisaw',
		'Test another 123 string': 'testanother123string',
		'__a': 'a',
		'_': ''
	}, 'getLettersFromString');

} else {
	const string = process.argv[2];  // String from CLI
	process.stdout.write(isPolindrome(string) ? 'YES':'NO');
}
