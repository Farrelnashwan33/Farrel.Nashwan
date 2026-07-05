<script lang="ts">
	import { onMount } from 'svelte';

	let { text = '', delay = 0, speed = 80, class: className = '' } = $props<{
		text: string;
		delay?: number;
		speed?: number;
		class?: string;
	}>();

	let displayedText = $state('');
	let isComplete = $state(false);

	onMount(() => {
		let timeout: ReturnType<typeof setTimeout>;
		let interval: ReturnType<typeof setInterval>;

		timeout = setTimeout(() => {
			let i = 0;
			interval = setInterval(() => {
				if (i < text.length) {
					displayedText += text.charAt(i);
					i++;
				} else {
					isComplete = true;
					clearInterval(interval);
				}
			}, speed);
		}, delay);

		return () => {
			clearTimeout(timeout);
			clearInterval(interval);
		};
	});
</script>

<span class="{className} relative">
	{displayedText}
	<span class="absolute right-[-10px] top-0 bottom-0 w-[3px] bg-accent animate-blink {isComplete ? 'opacity-0 hidden' : ''}"></span>
</span>

<style>
	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}
	.animate-blink {
		animation: blink 0.8s infinite;
	}
</style>
