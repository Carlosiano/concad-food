export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/keranjang.svelte"),
	() => import("../../src/routes/menu.svelte"),
	() => import("../../src/routes/profile/index.svelte"),
	() => import("../../src/routes/profile/logout.svelte"),
	() => import("../../src/routes/profile/settings.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"about": [[0, 2], [1]],
	"contact": [[0, 3], [1]],
	"keranjang": [[0, 5], [1]],
	"menu": [[0, 6], [1]],
	"profile": [[0, 7], [1]],
	"profile/logout": [[0, 8], [1]],
	"profile/settings": [[0, 9], [1]]
};