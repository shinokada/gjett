<script>
	import {bwords} from '$lib/bwords.json';
	import { randomword, openTab } from '$lib/utils';

	const wordList = bwords
	let randomElement = $state()
	let startButton = $derived(randomElement ? 'Next' : 'Start')

	function handleClick() {
		randomElement = randomword(wordList);
	}
</script>

		<h1 class="mb-4 text-3xl text-left font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl sm:text-center lg:text-5xl dark:text-white">Nivå B1/B2</h1>
		<p class="mb-8 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Learn Norwegian together with friends and make learning enjoyable and collaborative.</p>

		<div class="flex flex-col m-4 lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

			<button onclick={handleClick} class="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
				{startButton}
			</button>
		</div>
		{#if randomElement}
		<p class="w-full md:w-2/3 h-80 flex justify-center items-center text-4xl mx-auto text-white bg-custom-red dark:bg-custom-red border border-gray-200 rounded-lg shadow dark:border-gray-700">
			{randomElement}
		</p>

		<h2 class="text-2xl text-center sm:text-left m-4 font-bold dark:text-white">Need help?</h2>
		<div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
			<div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
			<p class="m-4 text-xl text-purple-500 hover:underline cursor-pointer"><button  onclick={() => openTab(randomElement, 'ordbokene')}>Open Ordbøkene: {randomElement}</button>
			</p>
			</div>
			<div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
			<p class="m-4 text-xl text-purple-500 hover:underline cursor-pointer"><button  onclick={() => openTab(randomElement, 'google')}>Open Google translation: {randomElement}</button>
			</p>
			</div>
		</div>
		{:else}
<p class="w-full md:w-2/3 h-80 flex justify-center items-center text-4xl mx-auto text-white bg-custom-blue dark:bg-custom-blue border border-gray-200 rounded-lg shadow dark:border-gray-700 px-16">
	Forklar ordet på norsk uten å bruke selve ordet.
</p>
		{/if}