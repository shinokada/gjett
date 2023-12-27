<script>
  import No from './No.svelte'
</script>

<footer class="bg-white dark:bg-gray-900 m-4 border-t">
  <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://gjett-norsk.vercel.app/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse z-10">
          <No size={30} class="display: inline"/> 
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gjett Norsk</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 z-10">
          <li>
            <a href="/" class="text-md hover:underline me-4 md:me-6">Nivå A1/A2</a>
        </li>
        <li>
          <a href="/a1" class="text-md hover:underline me-4 md:me-6">Nivå A1</a>
        </li>
        <li>
            <a href="/a2" class="text-md hover:underline me-4 md:me-6">Nivå A2</a>
        </li>
        <li>
          <a href="/b" class="text-md hover:underline me-4 md:me-6">Nivå B2/B2</a>
        </li>
        <li>
          <a href="/how-to-play" class="text-md hover:underline me-4 md:me-6">How to play</a>
        </li>
        <li>
          <a href="/credits" class="text-md hover:underline me-4 md:me-6">Credits</a>
        </li>
        <li>
            <a href="https://gjett-norsk.vercel.app" target="_blank" class="text-md hover:underline">Gjett Norsk</a>
        </li>
        </ul>
    </div>
  </div>
</footer>