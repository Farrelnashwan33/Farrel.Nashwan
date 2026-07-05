<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import QuickStats from '../components/QuickStats.svelte';
	import About from '../components/About.svelte';
	import Skills from '../components/Skills.svelte';
	import Experience from '../components/Experience.svelte';
	import Projects from '../components/Projects.svelte';
	import GithubActivity from '../components/GithubActivity.svelte';
	import AllRepositories from '../components/AllRepositories.svelte';
	import Education from '../components/Education.svelte';
	import Services from '../components/Services.svelte';
	import Certificates from '../components/Certificates.svelte';
	import Contact from '../components/Contact.svelte';
	import Footer from '../components/Footer.svelte';
	import Seo from '../components/Seo.svelte';

	let { data } = $props();
</script>

<Seo />

<div class="bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-white">
	<Navbar />
	
	<main>
		<Hero />
		<QuickStats />
		<About />
		<Services />
		<Skills />
		<Experience />
		<Projects />
		<GithubActivity githubUser={data.githubUser} />
		<AllRepositories repos={data.repos} />
		<Education />
		<Certificates />
		<Contact />
	</main>
	
	<Footer />
</div>
