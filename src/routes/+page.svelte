<script>
	import {lista} from './wordlist-a'
	import {listb} from './wordlist-b'

	let randomElement = $state()
  let currentLevel = $state('A')
	let startButton = $derived(randomElement ? 'Next' : 'Start')

	function openTab(word, website) {
		let baseUrl = '';
		if( website === 'google'){
			baseUrl = 'https://translate.google.com/?hl=en&tab=TT&sl=no&tl=en&op=translate&text='
		} else {
			baseUrl = 'https://ordbokene.no/bm/search?q=';
		}
	
    const url = baseUrl + encodeURIComponent(word);
    window.open(url, '_blank');
  }

	function toggleLevel(){
		currentLevel = currentLevel === 'A' ? 'B' : 'A';
		randomElement = '';
	}

	function randomword (){
		let selectedList = currentLevel === 'A' ? lista : listb;
		randomElement = selectedList[Math.floor(Math.random() * selectedList.length)];
		return randomElement;
	}
</script>

<main class="m-8">
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Explain and Guess Norwegian Word</h1>
	<p class="mb-6 text-xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Play this game with your friends or team to learn Norwegian.</p>
	<h2 class="text-4xl font-bold dark:text-white">How to play</h2>
	<ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 my-4">
		<li>Click "Change Level" to select your difficulty.</li>
    <li>Player 1 clicks "Start" or continues clicking to find a Norwegian word to explain.</li>
    <li>Player 2 guesses the word or asks questions in Norwegian until guessing correctly.</li>
    <li>Take turns.</li>
	</ul>

	<button on:click={toggleLevel} class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800">
		Change level: {currentLevel}
	</button>
	
	<button on:click={randomword} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
		{startButton}
	</button>
	<p class="my-4 text-2xl text-green-500">
		Norwegian word: {randomElement}
	</p>

	<h2 class="text-4xl font-bold dark:text-white">Help</h2>
	<p class="my-4 text-2xl text-purple-500 hover:underline cursor-pointer"><button  on:click={() => openTab(randomElement, 'ordbokene')}>Ordbøkene: {randomElement}</button>
	</p>
	<p class="my-4 text-2xl text-purple-500 hover:underline cursor-pointer"><button  on:click={() => openTab(randomElement, 'google')}>English translation: {randomElement}</button>
	</p>
</main>