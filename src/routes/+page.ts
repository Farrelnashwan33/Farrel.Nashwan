import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		// Fetch repositories
		const reposRes = await fetch('https://api.github.com/users/Farrelnashwan33/repos?sort=updated&per_page=100');
		const repos = await reposRes.json();
		
		// Fetch user profile for stats
		const userRes = await fetch('https://api.github.com/users/Farrelnashwan33');
		const user = await userRes.json();

		return {
			repos: Array.isArray(repos) ? repos : [],
			githubUser: user
		};
	} catch (error) {
		console.error('Error fetching GitHub data:', error);
		return {
			repos: [],
			githubUser: null
		};
	}
};
