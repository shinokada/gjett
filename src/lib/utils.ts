export function removeHyphensAndCapitalize(str: string) {
	// Handle empty string or strings without '-'
	if (!str || !str.includes('-')) {
		return str;
	}

	// Capitalize the first letter (including after hyphens)
	const capitalized = str.replace(/(^|\s|-)\w/g, (match) => match.toUpperCase());

	// Remove hyphens and ensure spaces after words
	return capitalized.replace(/-|\s{2,}/g, ' ');
}

const randomNumberGenerator = (
	min: number,
	max: number,
	maxConsecutiveRepeats: number
): (() => number) => {
	const previousNumbers: number[] = [];

	return (): number => {
		let randomNumber: number;

		do {
			randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		} while (previousNumbers.includes(randomNumber));

		if (previousNumbers.length >= maxConsecutiveRepeats) {
			previousNumbers.shift();
		}

		previousNumbers.push(randomNumber);

		return randomNumber;
	};
};

export function randomword(wordList: string[], maxConsecutiveRepeats: number = 50): string {
	const randomIndexFn = randomNumberGenerator(0, wordList.length - 1, maxConsecutiveRepeats);

	const randomIndex = randomIndexFn();
	return wordList[randomIndex];
}

export function openTab(word: string, website: string) {
	let baseUrl = '';
	if (website === 'google') {
		baseUrl = 'https://translate.google.com/?hl=en&tab=TT&sl=no&tl=en&op=translate&text=';
	} else {
		baseUrl = 'https://ordbokene.no/bm/search?q=';
	}

	const url = baseUrl + encodeURIComponent(word);
	window.open(url, '_blank');
}

export function cleanWord(word: string) {
	// Remove characters after '/'
	const withoutSlash = word.replace(/\/.*$/, '');

	// Remove characters after ','
	const withoutComma = withoutSlash.replace(/,.*/, '');

	// Remove characters after ' -'
	const withoutHyphen = withoutComma.replace(/ -.*/, '');

	return withoutHyphen.trim(); // Trim to remove leading/trailing spaces
}

interface Emoji {
	label: string;
	emoji: string;
	// Add other properties that your Emoji object has
}

export function getRandomEmoji(selectedEmojis: Emoji[]): Emoji | null {
	if (selectedEmojis.length === 0) {
		// Handle the case where there are no selected emojis
		return null;
	}

	const randomIndex = Math.floor(Math.random() * selectedEmojis.length);
	return selectedEmojis[randomIndex];
}
