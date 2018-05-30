const getMatch = (string, regex) => {
	const match = string.match(regex);
	return match ? match.join(''):'';
};


const getVowels = string => {
	const regex = /[aeiouy]/ig;

	return getMatch(string, regex);
};


const getConsonants = string => {
	const regex = /[bcdfghjklmnpqrstvwxz]/ig;

	return getMatch(string, regex);
};


const getNumbers = string => {
	const regex = /[0-9]/ig;

	return getMatch(string, regex);
};


const formResult = (string) => {
	const vowels = getVowels(string);
	const consonants = getConsonants(string);
	const numbers = getNumbers(string);

	return [vowels, consonants, numbers].join(' ').trim();
};


const string = process.argv[2];  // String from CLI
process.stdout.write(formResult(string));
