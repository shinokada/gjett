<script>
	import { Navbar, NavLi, NavBrand, NavUl, navHelper } from 'svelte-5-ui-lib';
	import No from '$lib/No.svelte'
	let nav = navHelper();

	let navStatus = $state();
	let toggleNav = nav.toggleNav;
	let closeNav = nav.closeNav;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.navStatus;
	});
</script>

<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="lg">
	{#snippet brand()}
		<NavBrand siteName="Gjett norsk" {closeNav}>
			<No size={40} class="inline"/> 
		</NavBrand>
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
