<script lang="ts">
	import { page } from '$app/stores';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faShoppingCart, faHamburger } from '@fortawesome/free-solid-svg-icons/index.es';

	const nav = [
		{ title: 'Home', path: '/' },
		{ title: 'Menu', path: '/menu' },
		{ title: 'About', path: '/about' },
		{ title: 'Contact', path: '/contact' },
		{ title: 'Keranjang', path: '/keranjang' }
	];

	let toggleBurger: boolean = true;
	let toggleProfile: boolean = true;
</script>

<div class="w-full h-full bg-yellow-300 box-border p-5 md:p-3">
	<nav class="w-full h-full flex items-center justify-between md:justify-start md:gap-3">
		<div><a class="font-pacifico text-2xl" href="/">Concad Restaurant</a></div>
		<ul class="flex flex-col absolute top-0 bg-yellow-400 mt-[70px] left-0 h-max w-full gap-1 p-1 transition duration-150 ease-in-out -z-10 md:flex-row md:relative md:z-30 md:translate-y-0 md:mt-0 md:bg-transparent md:w-max" class:-translate-y-80={toggleBurger}>
			{ #each nav as item }
				<li class="w-full h-max hover:bg-gray-800 rounded-md hover:text-white {item.title === 'Keranjang' ? 'text-red-700': 'text-gray-900'}"
					class:nav-link-active={$page.url.pathname === item.path}>
					<a href={item.path} class="w-full md:text-center">
						<div class="w-full h-full p-3 md:py-1">
							{#if item.title === 'Keranjang'}
							<Fa icon={faShoppingCart} size="lg" />
							{:else}
							{item.title}
							{/if}
						</div>
					</a>
				</li>
			{/each}
		</ul>
		<button on:click={() => toggleBurger = !toggleBurger} class="text-red-800 md:hidden">
			<Fa icon={faHamburger} size="lg"/>
		</button>
	</nav>
</div>

<!-- <div class="min-h-full">
	<nav class="bg-yellow-300 transition">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<div class="font-pacifico text-3xl">
						<a class="" href="/">Concad Restaurant</a>
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-center space-x-4 ">
							{#each nav as item}
								<a
									href={item.path}
									class:nav-link-active={$page.url.pathname === item.path}
									class="font-semibold {item.title === "Keranjang" ? "text-red-700" :"text-gray-900"} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>{#if item.title === 'Keranjang'}
										<Fa icon={faShoppingCart} size="lg"/>
									{:else}
										{item.title}
									{/if}
								</a>
							{/each}
						</div>
					</div>
				</div>
				<div class="hidden md:block">
					<div class="ml-4 flex items-center md:ml-6">
						<button
							type="button"
							class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							<span class="sr-only">View notifications</span>
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>

						<div class="ml-3 relative">
							<div>
								<button
									on:click={() => (toggleProfile = !toggleProfile)}
									type="button"
									class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
								>
									<span class="sr-only">Open user menu</span>
									<img
										class="h-8 w-8 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</button>
							</div>

							<div
								class="transitionl duration-150 ease-in-out origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
								class:scale-0={toggleProfile}
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<a
									href="/profile"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 rounded-md m-1 hover:text-white"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Your Profile</a
								>
								<a
									href="/profile/settings"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 rounded-md m-1 hover:text-white"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Settings</a
								>
								<a
									href="/profile/logout"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 rounded-md m-1 hover:text-white"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Sign Out</a
								>
							</div>
						</div>
					</div>
				</div>
				<div class="-mr-2 flex md:hidden">
					<button
						on:click={() => (toggleBurger = !toggleBurger)}
						type="button"
						class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						<svg
							class="hidden h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div class="md:hidden" class:hidden={toggleBurger} id="mobile-menu">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">

				{#each nav as item}
					<a
						href={item.path}
						class:nav-link-active={$page.url.pathname === item.path}
						class="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>{#if item.title === 'Keranjang'}
							<Fa icon={faShoppingCart} />
						{:else}
							{item.title}
						{/if}
					</a>
				{/each}
			</div>
			<div class="pt-4 pb-3 border-t border-gray-700">
				<div class="flex items-center px-5">
					<div class="flex-shrink-0">
						<img
							class="h-10 w-10 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</div>
					<div class="ml-3">
						<div class="text-base font-medium leading-none text-white">Tom Cook</div>
						<div class="text-sm font-medium leading-none text-gray-900">tom@example.com</div>
					</div>
					<button
						type="button"
						class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					>
						<span class="sr-only">View notifications</span>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
					</button>
				</div>
				<div class="mt-3 px-2 space-y-1">
					<a
						href="#"
						class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-gray-700"
						>Your Profile</a
					>
					<a
						href="#"
						class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-gray-700"
						>Settings</a
					>
					<a
						href="#"
						class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-gray-700"
						>Sign out</a
					>
				</div>
			</div>
		</div>
	</nav>
</div> -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
	.nav-link-active {
		@apply bg-gray-900 text-white;
	}
</style>
