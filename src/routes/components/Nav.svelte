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
</script>

<header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-slate-950">

<Navbar {toggleNav} {closeNav} {navStatus} fluid breakPoint="lg">
	{#snippet brand()}
		<NavBrand siteName="Gjett Norsk" {closeNav}>
			<No size={30} class="display: inline"/> 
		</NavBrand>
		<div class="flex items-center ms-auto">
			<Darkmode />
		</div>
	{/snippet}

	<NavUl>
		<NavLi href="/" {closeNav}>Nivå A1/A2</NavLi>
		<NavLi href="/a1" {closeNav}>Nivå A1</NavLi>
		<NavLi href="/a2" {closeNav}>Nivå A2</NavLi>
		<NavLi href="/b" {closeNav}>Nivå B1/B2</NavLi>
		<NavLi href="/how-to-play" {closeNav}>How to play</NavLi>
		<NavLi href="/credits" {closeNav}>Credits</NavLi>
	</NavUl>
</Navbar>
</header>
