export function removeHyphensAndCapitalize(str) {
  // Handle empty string or strings without '-'
  if (!str || !str.includes('-')) {
    return str;
  }

  // Capitalize the first letter (including after hyphens)
  const capitalized = str.replace(/(^|\s|-)\w/g, (match) => match.toUpperCase());

  // Remove hyphens and ensure spaces after words
  return capitalized.replace(/-|\s{2,}/g, ' ');
}

const randomNumberGenerator = (min, max, maxConsecutiveRepeats) => {
	let previousNumbers = [];

	return () => {
		let randomNumber;

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

export function randomword (wordList, maxConsecutiveRepeats = 50) {
  const randomIndexFn = randomNumberGenerator(0, wordList.length - 1, maxConsecutiveRepeats);

	const randomIndex = randomIndexFn();
  return wordList[randomIndex];
}

export function openTab(word, website) {
  let baseUrl = '';
  if( website === 'google'){
    baseUrl = 'https://translate.google.com/?hl=en&tab=TT&sl=no&tl=en&op=translate&text='
  } else {
    baseUrl = 'https://ordbokene.no/bm/search?q=';
  }

  const url = baseUrl + encodeURIComponent(word);
  window.open(url, '_blank');
}

export function cleanWord(word) {
  // Remove characters after '/'
  let withoutSlash = word.replace(/\/.*$/, '');

  // Remove characters after ','
  let withoutComma = withoutSlash.replace(/,.*/, '');

  // Remove characters after ' -'
  let withoutHyphen = withoutComma.replace(/ -.*/, '');

  return withoutHyphen.trim(); // Trim to remove leading/trailing spaces
}

export function getRandomEmoji(selectedEmojis) {
  if (selectedEmojis.length === 0) {
      // Handle the case where there are no selected emojis
      return null;
  }

  const randomIndex = Math.floor(Math.random() * selectedEmojis.length);
  return selectedEmojis[randomIndex];
}