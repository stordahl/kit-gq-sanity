import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { gQueryCodegen } from '@leveluptuts/g-query'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	vite: {
		plugins: [
			gQueryCodegen({
            // Required
            // schema: 'http://localhost:3001/graphql' // this can also be a url to a graphql api
            schema: import.meta.env.VITE_GRAPHQL_ENDPOINT.toString(), // path to schema, schema is required
            output: './src/lib/graphql', // Where you want the general schema types to output
            gPath: '$lib/config/g', // Path to g, created in step 1.
            // Optional
            debug: false  // boolean, this adds logging for gq files deleted and on codegen
        })
		]
	}
};

export default config;
