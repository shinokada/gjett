<script>
  import "../app.pcss";
	let { children } = $props();
  import Nav from "./components/Nav.svelte";
  import Footer from './components/Footer.svelte'
</script>

<Nav />

<section class="bg-white dark:bg-slate-950 pb-10 border-b border-gray-200 dark:border-gray-800">
  <div class="pt-8 px-4 mx-auto max-w-screen-xl text-center">
    {@render children()}
  </div>
</section>

<Footer />