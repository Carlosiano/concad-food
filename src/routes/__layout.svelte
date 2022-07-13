<script lang="ts">
	import Navbar from '$lib/Navbar.svelte'
	import '../app.css'
	import {page} from '$app/stores'
</script>

<svelte:head>
	<title>{$page.url.pathname === '/' ? 'HOME' : $page.routeId?.toUpperCase()}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col justify-between min-h-screen">
	<header class="md:fixed md:w-full md:top-0 absolute w-full top-0 left-0 z-20">
		<Navbar />
	</header>
	<main class="layout mt-16">
		<slot></slot>
	</main>
	<footer class="w-full h-14 bg-yellow-300 shadow flex">
		<p class="m-auto flex font-semibold text-gray-800"> Copyright 2022 - <a class="font-normal" href="/"> carlosiano.com</a> </p>
	</footer>
</div>

<style>
</style>