<script>
	import { No, Modal } from '$lib'

	import awordList from '$lib/awords.json';
	import bwordList from '$lib/bwords.json';

	let modalStatus = $state(false)

	const awords = awordList.awords
	const bwords = bwordList.bwords
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
		let selectedList = currentLevel === 'A' ? awords : bwords;
		randomElement = selectedList[Math.floor(Math.random() * selectedList.length)];
		return randomElement;
	}
</script>

<section class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
	<div class="pt-8 px-4 mx-auto max-w-screen-xl text-center z-10 relative">
		<h1 class="mb-4 text-4xl text-left font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl sm:text-center lg:text-6xl dark:text-white"><No size={40} class="mr-2 mb-2 display: inline"/> Gjett Norsk</h1>
		<p class="mb-8 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Learn Norwegian together with friends and make learning enjoyable and collaborative.</p>

		<button onclick={()=>modalStatus =  true} class="block absolute right-2 sm:right-8 top-8 w-md md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
			How to play
		</button>

		<div class="flex flex-col m-4 lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
			<button on:click={toggleLevel} class="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
				Change level: {currentLevel}
			</button>

			<button on:click={randomword} class="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
				{startButton}
			</button>
		</div>
		{#if randomElement}
		<p class="block py-12 text-4xl max-w-lg mx-auto text-green-500 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
			{randomElement}
		</p>
		<h2 class="text-2xl text-left my-4 font-bold dark:text-white">Need help?</h2>
		<div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
			<div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
			<p class="m-4 text-xl text-purple-500 hover:underline cursor-pointer"><button  on:click={() => openTab(randomElement, 'ordbokene')}>Open Ordbøkene: {randomElement}</button>
			</p>
			</div>
			<div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
			<p class="m-4 text-xl text-purple-500 hover:underline cursor-pointer"><button  on:click={() => openTab(randomElement, 'google')}>Open Google translation: {randomElement}</button>
			</p>
			</div>
		</div>
		{/if}
	</div>

	<footer class="bg-white dark:bg-gray-900 m-4 border-t">
		<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
			<div class="sm:flex sm:items-center sm:justify-between">
					<a href="https://gjett-norsk.vercel.app/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse z-10">
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gjett Norsk</span>
					</a>
					<ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 z-10">
						<li>
								<a href="https://svelte-5-preview.vercel.app/docs/introduction" target="_blank" class="hover:underline me-4 md:me-6">Svelte 5</a>
						</li>
						<li>
								<a href="https://github.com/shinokada/gjett-norsk" target="_blank" class="hover:underline me-4 md:me-6">Github repo</a>
						</li>
						<li>
								<a href="https://github.com/shinokada" target="_blank" class="hover:underline">Made by Shin</a>
						</li>
					</ul>
			</div>
		</div>
	</footer>
	<div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-4/5 absolute top-0 left-0 z-0"></div>
</section>

<Modal bind:modalStatus />

