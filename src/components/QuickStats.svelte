<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import CountUp from './CountUp.svelte';
	import { BookOpen, FolderGit2, Code2, Coffee } from '@lucide/svelte';

	const stats = [
		{ 
			label: 'GitHub Repos', 
			value: 45, 
			icon: BookOpen,
			color: 'text-primary'
		},
		{ 
			label: 'Projects Done', 
			value: 20, 
			icon: FolderGit2,
			color: 'text-secondary'
		},
		{ 
			label: 'Technologies', 
			value: 15, 
			icon: Code2,
			color: 'text-success'
		},
		{ 
			label: 'Years Learning', 
			value: 3, 
			icon: Coffee,
			color: 'text-warning'
		}
	];
</script>

<section class="relative z-20 -mt-16 pb-20">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
			{#each stats as stat, i}
				{@const Icon = stat.icon}
				<div 
					use:reveal={{ type: 'up' }}
					class="card-premium p-6 group flex flex-col h-full"
					style="animation-delay: {i * 100}ms;"
				>
					<div class="w-12 h-12 rounded-2xl glass-effect flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
						<Icon class="w-6 h-6 {stat.color}" />
					</div>
					<div class="text-3xl font-bold text-text-main mb-1 flex items-center gap-1">
						<CountUp end={stat.value} duration={2000} />
						<span class={stat.color}>+</span>
					</div>
					<div class="text-sm font-medium text-text-desc">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
