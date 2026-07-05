<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	
	let { onComplete } = $props<{ onComplete: () => void }>();
	
	let progress = $state(0);
	let currentText = $state('Loading Portfolio...');
	
	const loadingTexts = [
		'Loading Portfolio...',
		'Initializing Components...',
		'Loading Projects...',
		'Fetching GitHub Repository...',
		'Optimizing Assets...',
		'Almost Ready...',
		'Welcome.'
	];
	
	onMount(() => {
		const totalDuration = 2500; // 2.5 seconds total loading
		const updateInterval = 50;
		let elapsed = 0;
		
		const interval = setInterval(() => {
			elapsed += updateInterval;
			progress = Math.min(100, (elapsed / totalDuration) * 100);
			
			// Update text based on progress
			const textIndex = Math.min(
				loadingTexts.length - 1, 
				Math.floor((progress / 100) * loadingTexts.length)
			);
			currentText = loadingTexts[textIndex];
			
			if (elapsed >= totalDuration) {
				clearInterval(interval);
				setTimeout(onComplete, 500); // 500ms extra delay at 100%
			}
		}, updateInterval);
		
		return () => clearInterval(interval);
	});
</script>

<div 
	class="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505] text-white"
	out:fade={{ duration: 600 }}
>
	<div class="flex flex-col items-center max-w-sm w-full px-6">
		<!-- Animated Logo -->
		<div class="mb-12 relative" in:scale={{ duration: 800, start: 0.8, opacity: 0 }}>
			<div class="absolute inset-0 bg-accent blur-xl opacity-30 rounded-full animate-pulse"></div>
			<h1 class="text-5xl font-bold tracking-tighter relative z-10 text-white flex items-center justify-center w-24 h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
				AFN
			</h1>
		</div>
		
		<!-- Progress Bar -->
		<div class="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4 relative">
			<div 
				class="absolute top-0 left-0 h-full bg-accent transition-all duration-100 ease-out" 
				style="width: {progress}%"
			></div>
		</div>
		
		<!-- Text & Percentage -->
		<div class="flex items-center justify-between w-full text-sm font-medium text-gray-400">
			<span class="animate-pulse">{currentText}</span>
			<span>{Math.floor(progress)}%</span>
		</div>
	</div>
</div>
