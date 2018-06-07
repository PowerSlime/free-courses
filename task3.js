const getMatch = (string, regex) => {
	const match = string.match(regex);
	return match ? match.join(''):'';
};


const getVowels = string => {
	const regex = /[aeiou]/ig;

	return getMatch(string, regex);
};


const getConsonants = string => {
	const regex = /[bcdfghjklmnpqrstvwxzy]/ig;

	return getMatch(string, regex);
};


const getNumbers = string => {
	const regex = /[0-9]/g;

	return getMatch(string, regex);
};


const formResult = string => {
	const vowels = getVowels(string),
		consonants = getConsonants(string),
		numbers = getNumbers(string);

	const array = [vowels, consonants, numbers];
	// Clean empty strings
	// ['aeui', '', '123'] -> ['aeui', '123']
	//
	// We need that filter because when we'll use .join(' ') method
	// with unfiltred array we wi'll get resut like 'aeui  123',
	// but it must be 'aeui 123'
	//
	// Callback function in filter should return boolean value
	// but we know that empty string by default is equal to 'false'
	// ex. 'some letters' -> true, '' -> false
	const filtered = array.filter(item => item);

	return filtered.join(' ').trim();
};


const string = process.argv[2];  // String from CLI
process.stdout.write(formResult(string));
