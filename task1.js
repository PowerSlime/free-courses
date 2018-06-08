debug = false;

const getLettersFromString = string => {
	// Regex for matching only numbers and letters from string
	const regex = /[^a-z0-9]/g;
	// Delete all non-word characters from string
	const letters = string.toLowerCase().replace(regex, '');

	return letters;
};


const isPolindrome = string => {
	const letters = getLettersFromString(string);

	for (let firstIndex = 0; firstIndex < Math.floor(letters.length / 2); firstIndex++) {
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
			console.log(result === dict[key] ? 'OK' : `${key} must be equal to ${dict[key]} but it is ${result}`);
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
