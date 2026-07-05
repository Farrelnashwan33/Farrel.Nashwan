<script lang="ts">
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Background from '../components/Background.svelte';
	import CustomCursor from '../components/CustomCursor.svelte';
	import ScrollProgress from '../components/ScrollProgress.svelte';
	import BackToTop from '../components/BackToTop.svelte';
	import LoadingScreen from '../components/LoadingScreen.svelte';

	let { children } = $props();
	let isLoading = $state(true);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{#if isLoading}
	<LoadingScreen onComplete={() => (isLoading = false)} />
{:else}
	<div class="animate-content-reveal">
		<Background />
		<CustomCursor />
		<ScrollProgress />

		<div class="relative z-10 flex min-h-screen flex-col">
			{@render children()}
		</div>

		<BackToTop />
	</div>
{/if}

<style>
	@keyframes contentReveal {
		from { opacity: 0; filter: blur(10px); transform: scale(1.05); }
		to { opacity: 1; filter: blur(0); transform: scale(1); }
	}
	
	.animate-content-reveal {
		animation: contentReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
</style>
