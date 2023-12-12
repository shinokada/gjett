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
  <h1>Norsk</h1>
	<h2>How to play</h2>
	<button on:click={randomword} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
		Klikk
	</button>
	<p class="text-xl">
	{randomElement}
	</p>
</main>