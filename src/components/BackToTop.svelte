<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUp } from '@lucide/svelte';
	
	let isVisible = $state(false);
	
	onMount(() => {
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					isVisible = window.scrollY > 500;
					ticking = false;
				});
				ticking = true;
			}
		};
		
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
	
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
</script>

<button
	onclick={scrollToTop}
	class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-110 active:scale-95 {isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}"
	aria-label="Back to top"
>
	<ArrowUp size={20} />
</button>
