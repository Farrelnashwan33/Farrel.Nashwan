<script lang="ts">
	import { onMount } from 'svelte';
	
	let scrollProgress = $state(0);
	
	onMount(() => {
		let ticking = false;
		
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const totalScroll = document.documentElement.scrollTop;
					const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
					scrollProgress = (totalScroll / windowHeight) * 100;
					ticking = false;
				});
				ticking = true;
			}
		};
		
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="fixed top-0 left-0 w-full h-1 z-[9999] pointer-events-none">
	<div 
		class="h-full bg-gradient-to-r from-accent to-accent-light" 
		style="width: {scrollProgress}%;"
	></div>
</div>
