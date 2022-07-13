import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
	// preprocess: sveltePreprocess({
	//   postcss: {
	//   },
	//   sass: {
	//     sync: true,
	//     // implementation: require('sass'),
	//   },
	// }),
};

export default config;
