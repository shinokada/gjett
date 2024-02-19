<script>
  import { removeHyphensAndCapitalize } from '$lib/utils';
  const name = __NAME__;
  const version = __VERSION__;
  const githuburl = __GITHUBURL__;
  const svelte5uilibVersion = __SVELTE5UILIBVERSION__;
  const svelteVersion = __SVELTEVERSION__;
  const svelteKitVersion = __SVELTEKITVERSION__;
  const viteVersion = __VITEVERSION__;
  </script>
  
  <div class="mx-auto max-w-4xl px-8 text-left">
    <h1>About</h1>
  <p>
    Gjett Norsk is for Norwegian learners who want to learn Norwegian vocabulary in a group.
  </p>

  <h2 class="text-left text-2xl m-4 font-bold dark:text-white">How to play</h2>

<ul class="text-left space-y-1 m-4 text-gray-500 list-inside dark:text-gray-400">
  <li class="flex items-center">
    <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
   </svg> Select your difficulty from the main menu.</li>
  <li class="flex items-center">
    <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
   </svg> Player 1 clicks "Start" or continues clicking to find a Norwegian word to explain. Explain the word in Norwegian.</li>
  <li class="flex items-center">
    <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
   </svg> Player 2 guesses the word or asks questions until guessing correctly.</li>
  <li class="flex items-center">
    <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
   </svg> Take turns.</li>
</ul>
  
  <h2>LexiLearn Hub Apps</h2>
  
    <ul class="m-4 list-disc p-4 text-left text-lg dark:text-gray-400">
      <li class="hover:text-red-700 hover:underline">
        <a href="https://gjett-norsk.vercel.app/" class="me-4 hover:underline md:me-6">Gjett Norsk</a>
      </li>
      <li class="hover:text-red-700 hover:underline">
        <a href="https://multilanguage-flashcard.vercel.app/" class="me-4 hover:underline md:me-6"
          >Multilanguage flashcard</a
        >
      </li>
      <li class="hover:text-red-700 hover:underline">
        <a href="https://norske-flashcard.vercel.app/" class="me-4 hover:underline md:me-6"
          >Norske flashcard</a
        >
      </li>
      <li class="hover:text-red-700 hover:underline">
        <a href="https://nihongo-flashcard.vercel.app/" class="me-4 hover:underline md:me-6"
          >Japanese flashcard</a
        >
      </li>
      <li class="hover:text-red-700 hover:underline">
        <a href="https://flexilexi-dictionary.vercel.app/" class="me-4 hover:underline md:me-6"
          >Fexilexi dictionary (English/Norwegian/Japanese)</a
        >
      </li>
    </ul>
  
    <h2>Technical info</h2>
    <ul class="m-4 list-disc p-4 text-left text-lg dark:text-gray-400">
      <li class="hover:text-red-700 hover:underline">
        <a
          href="https://nihongo-flashcard.vercel.app/"
          class="me-4 hover:underline md:me-6">{removeHyphensAndCapitalize(name)} : {version}</a
        >
      </li>
      <li class="hover:text-red-700 hover:underline">
        <a
          href="https://svelte-5-preview.vercel.app/docs/introduction"
          class="me-4 hover:underline md:me-6">Svelte 5: {svelteVersion}</a
        >
      </li>
      <li>
        <a href="https://svelte-5-ui-lib.vercel.app/" class="me-4 hover:underline md:me-6"
          >Svelte 5 UI Lib: {svelte5uilibVersion}</a
        >
      </li>
      <li>
        <a href="https://kit.svelte.dev/docs/introduction" class="me-4 hover:underline md:me-6"
          >SvelteKit: {svelteKitVersion}</a
        >
      </li>
      <li class="hover:text-red-700 hover:underline">
        <a href="https://vitejs.dev/" class="hover:underline">Vite: {viteVersion}</a>
      </li>
    </ul>
  
    <h2 class="m-4 text-left text-2xl font-bold dark:text-white">Repo</h2>
    <ul class="m-4 list-disc p-4 text-left text-lg dark:text-gray-400">
      <li class="hover:text-red-700 hover:underline">
        <a
          href="{githuburl}"
          class="me-4 hover:underline md:me-6">Github repo</a
        >
      </li>
      <li class="hover:text-red-700 hover:underline">
        <a href="https://github.com/shinokada" class="me-4 hover:underline md:me-6">Author: Shin</a>
      </li>
    </ul>
  </div>