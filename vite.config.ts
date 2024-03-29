import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pkg from './package.json' assert { type: 'json' };
import svelte5uilib from './node_modules/svelte-5-ui-lib/package.json' assert { type: 'json' }
import sveltePackage from './node_modules/svelte/package.json' assert { type: 'json' }
import svelteKitPackage from './node_modules/@sveltejs/kit/package.json' assert { type: 'json' }
import vitePackage from './node_modules/vite/package.json' assert { type: 'json' }

export default defineConfig({
	plugins: [sveltekit()],
	define: {
    __NAME__: `"${pkg.name}"`,
    __VERSION__: `"${pkg.version}"`,
    __GITHUBURL__: `"${pkg.repository.url}"`,
    __SVELTE5UILIBVERSION__: `"${svelte5uilib.version}"`,
    __SVELTEVERSION__: `"${sveltePackage.version}"`,
    __SVELTEKITVERSION__: `"${svelteKitPackage.version}"`,
    __VITEVERSION__: `"${vitePackage.version}"`
	},
});
