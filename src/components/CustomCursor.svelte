<script lang="ts">
	import { onMount } from 'svelte';
	
	let mouseX = $state(0);
	let mouseY = $state(0);
	let isVisible = $state(false);
	
	onMount(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			if (!isVisible) isVisible = true;
		};
		
		const handleMouseLeave = () => {
			isVisible = false;
		};
		
		const handleMouseEnter = () => {
			isVisible = true;
		};
		
		window.addEventListener('mousemove', handleMouseMove);
		document.body.addEventListener('mouseleave', handleMouseLeave);
		document.body.addEventListener('mouseenter', handleMouseEnter);
		
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			document.body.removeEventListener('mouseleave', handleMouseLeave);
			document.body.removeEventListener('mouseenter', handleMouseEnter);
		};
	});
</script>

<div 
	class="custom-cursor hidden lg:block" 
	style="transform: translate({mouseX}px, {mouseY}px); opacity: {isVisible ? 1 : 0};"
>
	<div class="cursor-glow"></div>
</div>

<style>
	.custom-cursor {
		position: fixed;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
		pointer-events: none;
		z-index: 9999;
		transition: opacity 0.3s ease;
		mix-blend-mode: screen;
	}
	
	.cursor-glow {
		position: absolute;
		top: -150px;
		left: -150px;
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
		border-radius: 50%;
		/* Follow cursor without delay because CSS translation doesn't have transition, wait, actually translate in inline style handles it */
	}
</style>
