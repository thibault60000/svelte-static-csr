import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build', // directory for build files
			assets: 'build', // default : same as 'pages'
			fallback: 'index.html', // for SPA mode : index.html|200.html|404.html
			precompress: false, // .br or .gz compression
			strict: true // Check if some parts of app are not accessible
		})
		// testing build : 'npx http-server ./build'
	}
};
export default config;
