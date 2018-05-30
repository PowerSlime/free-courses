const getLettersFromString = string => {
	// Regex for matching only numbers and letters from string
	let regex = /\w/g;
	let letters = string.match(regex);

	return letters.join('');
};


const isPolindrome = string => {
	let letters = getLettersFromString(string).toLowerCase();

	for (let i = 0; i < Math.floor(letters.length / 2); i++) {
		let firstIndex = i;
		// +1 because we mustn't try to get "out of range" item from array (string)
		let lastIndex = letters.length - (i + 1);

		if (letters[firstIndex] !== letters[lastIndex]) {
			return false;
		}
	};

	return true;
};


const string = process.argv[2];  // String from CLI
process.stdout.write(isPolindrome(string) ? 'YES':'NO');
