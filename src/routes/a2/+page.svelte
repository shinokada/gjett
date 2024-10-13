<script>
import { a2words } from '$lib/a2words.json';
import { randomword, openTab, cleanWord } from '$lib/utils';

const wordList = a2words;
let randomElement = $state();
let dictWord = $state();
let startButton = $derived(randomElement ? 'Next' : 'Start');

function handleClick() {
	randomElement = randomword(wordList);
	dictWord = cleanWord(randomElement);
}
</script>

<h1
	class="mb-4 text-left text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-center md:text-4xl lg:text-5xl"
>
	Nivå A2
</h1>
<p
	class="mb-8 text-center text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48"
>
	Learn Norwegian together with friends and make learning enjoyable and collaborative.
</p>

<div
	class="m-4 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-8"
>
	<button
		onclick={handleClick}
		class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-xl font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
	>
		{startButton}
	</button>
</div>
{#if randomElement}
	<p
		class="mx-auto flex h-80 w-full items-center justify-center rounded-lg border border-gray-200 bg-custom-red text-4xl text-white shadow dark:border-gray-700 dark:bg-custom-red md:w-2/3"
	>
		{randomElement}
	</p>

	<h2 class="m-4 text-center text-2xl font-bold dark:text-white sm:text-left">Need help?</h2>
	<div class="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
		<div
			class="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex"
		>
			<p class="m-4 cursor-pointer text-xl text-purple-500 hover:underline">
				<button onclick={() => openTab(randomElement, 'ordbokene')}
					>Open Ordbøkene: {dictWord}</button
				>
			</p>
		</div>
		<div
			class="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex"
		>
			<p class="m-4 cursor-pointer text-xl text-purple-500 hover:underline">
				<button onclick={() => openTab(randomElement, 'google')}
					>Open Google translation: {dictWord}</button
				>
			</p>
		</div>
	</div>
{:else}
	<p
		class="mx-auto flex h-80 w-full items-center justify-center rounded-lg border border-gray-200 bg-custom-blue px-16 text-4xl text-white shadow dark:border-gray-700 dark:bg-custom-blue md:w-2/3"
	>
		Forklar ordet på norsk uten å bruke selve ordet.
	</p>
{/if}
