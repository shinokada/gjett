<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode } from 'svelte-5-ui-lib';
    import No from '$lib/No.svelte'

	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.isOpen;
	});

	let divClass = "ml-auto w-full"
	let ulclass =
	'flex flex-col py-3 lg:flex-row lg:my-0 order-1 font-medium xl:gap-2 dark:lg:bg-transparent lg:bg-white border-0';
	let navClass = 'w-full divide-gray-200 border-gray-200 bg-white px-2 py-2.5 text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:bg-slate-950 dark:text-gray-400 sm:px-4'

</script>

<header
    class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-sky-950"
  >
  <Navbar {navClass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2Class={divClass}>
	{#snippet brand()}
		<NavBrand siteName="Gjett Norsk" {closeNav}>
			<No size="30" class="display: inline"/> 
		</NavBrand>
		<div class="flex items-center ml-auto lg:order-1">
            <Darkmode class="inline-block dark:hover:text-white hover:text-gray-900" />
        </div>
	{/snippet}

	<NavUl class={ulclass}>
		<NavLi href="/" {closeNav}>Nivå A1/A2</NavLi>
		<NavLi href="/a1" {closeNav}>Nivå A1</NavLi>
		<NavLi href="/a2" {closeNav}>Nivå A2</NavLi>
		<NavLi href="/b" {closeNav}>Nivå B1/B2</NavLi>
		<NavLi href="/picture" {closeNav}>Picture</NavLi>
		<NavLi href="/about" {closeNav}>About</NavLi>
	</NavUl>
</Navbar>
</header>
