const getLettersFromString = string => {
	// Regex for matching only numbers and letters from string
	const regex = /[^a-z0-9]/g;
	// Delete all non-word characters from string
	const letters = string.toLowerCase().replace(regex, '');

	return letters;
};


const isPolindrome = string => {
	const letters = getLettersFromString(string).toLowerCase();

	for (let firstIndex = 0; firstIndex < Math.floor(letters.length / 2); firstIndex++) {
		// +1 because we mustn't try to get "out of range" item from array (string)
		let lastIndex = letters.length - (firstIndex + 1);

		if (letters[firstIndex] !== letters[lastIndex]) {
			return false;
		}
	};

	return true;
};


const string = process.argv[2];  // String from CLI
process.stdout.write(isPolindrome(string) ? 'YES':'NO');
