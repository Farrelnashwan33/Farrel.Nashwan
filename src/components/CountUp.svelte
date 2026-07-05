<script lang="ts">
	import { onMount } from 'svelte';
	
	let { end = 0, duration = 2000, suffix = '' } = $props<{
		end: number;
		duration?: number;
		suffix?: string;
	}>();
	
	let current = $state(0);
	let node: HTMLElement;
	
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				let startTimestamp: number | null = null;
				const step = (timestamp: number) => {
					if (!startTimestamp) startTimestamp = timestamp;
					const progress = Math.min((timestamp - startTimestamp) / duration, 1);
					// easeOutQuart
					const ease = 1 - Math.pow(1 - progress, 4);
					current = Math.floor(ease * end);
					if (progress < 1) {
						window.requestAnimationFrame(step);
					} else {
						current = end;
					}
				};
				window.requestAnimationFrame(step);
				observer.unobserve(node);
			}
		}, { threshold: 0.5 });
		
		if (node) observer.observe(node);
		return () => observer.disconnect();
	});
</script>

<span bind:this={node}>
	{current}{suffix}
</span>
