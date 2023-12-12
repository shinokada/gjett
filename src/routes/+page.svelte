<script>
	import {list} from './wordlist'

	let randomElement = $state()

	function randomword (){
		randomElement = list[Math.floor(Math.random() * list.length)];
		// console.log('random: ', randomElement) 
		return randomElement
	}

	function openTab(word) {
    const baseUrl = 'https://ordbokene.no/bm/search?q=';
    const url = baseUrl + encodeURIComponent(word);
    window.open(url, '_blank');
  }
</script>

<main class="m-8">
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Explain and Guess Norwegian Word</h1>
	<p class="mb-6 text-xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Play this game with your friends to learn Norwegian.</p>
	<h2 class="text-4xl font-bold dark:text-white">How to play</h2>
	<ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 my-4">
		<li>Player 1 click the button "Klikk" and explain the Norwegian word using Norwegian.</li>
		<li>Player 2 guess the word or ask questions until you guess the word correctly.</li>
	</ul>
	<button on:click={randomword} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
		Klikk
	</button>
	<p class="my-4 text-2xl text-green-500">
		Explain in Norwegian. If you need a hint, click the word.</p>
	
	<p class="my-4 text-2xl text-purple-500 hover:underline cursor-pointer"><span on:click={() => openTab(randomElement)}>{randomElement}</span>
	</p>
</main>