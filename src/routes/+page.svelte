<script>
	import {list} from './wordlist'

	let randomElement = $state()

	function randomword (){
		randomElement = list[Math.floor(Math.random() * list.length)];
		// console.log('random: ', randomElement) 
		return randomElement
	}
</script>

<main class="m-8">
  <h1>Explain and Guess Norwegian Word</h1>
	<p>Play this game with your friends to learn Norwegian.</p>
	<h2>How to play</h2>
	<ul>
		<li>Player 1 click the button "Klikk" and explain the Norwegian word using Norwegian.</li>
		<li>Player 2 guess the word or ask questions until you guess the word correctly.</li>
	</ul>
	<button on:click={randomword} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
		Klikk
	</button>
	<p class="text-xl">
	{randomElement}
	</p>
</main>