<script>
import emojis from 'emojibase-data/nb/data.json';
import { getRandomEmoji, cleanWord, openTab } from '$lib/utils';

let randomElement = $state();
let dictWord = $state();
let startButton = $derived(randomElement ? 'Next' : 'Start');

const subgroupValues = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 23, 25, 34, 35, 36, 37, 38, 39, 42, 43, 44, 47, 50, 52, 55, 60,
	63, 65, 66, 73, 82, 85, 91
];

const selectedEmojis = emojis.filter((emoji) => {
	return (
		emoji.subgroup && subgroupValues.includes(emoji.subgroup) && emoji.label.split(' ').length === 1
	);
});

function handleClick() {
	randomElement = getRandomEmoji(selectedEmojis);
	dictWord = cleanWord(randomElement.label);
}
</script>

<h1
	class="mb-4 text-left text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-center md:text-4xl lg:text-5xl"
>
	Picture
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
	<div
		class="mx-auto flex h-80 w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-custom-red text-4xl text-white shadow dark:border-gray-700 dark:bg-custom-red md:w-2/3"
	>
		<p class="text-9xl">{randomElement.emoji}</p>
		<p class="m-4">{randomElement.label}</p>
	</div>
	<h2 class="m-4 text-center text-2xl font-bold dark:text-white sm:text-left">Need help?</h2>
	<div class="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
		<div
			class="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex"
		>
			<p class="m-4 cursor-pointer text-xl text-purple-500 hover:underline">
				<button onclick={() => openTab(randomElement.label, 'ordbokene')}
					>Open Ordbøkene: {dictWord}</button
				>
			</p>
		</div>
		<div
			class="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex"
		>
			<p class="m-4 cursor-pointer text-xl text-purple-500 hover:underline">
				<button onclick={() => openTab(randomElement.label, 'google')}
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
