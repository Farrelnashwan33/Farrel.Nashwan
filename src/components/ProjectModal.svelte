<script lang="ts">
	import { ExternalLink, X, CheckCircle2 } from '@lucide/svelte';
	import Icon from '@iconify/svelte';
	import type { Project } from '../data/projects';
	import { fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { project, onClose }: { project: Project, onClose: () => void } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
	class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 lg:p-8"
	onclick={onClose}
	transition:fade={{ duration: 300, easing: cubicOut }}
>
	<div 
		class="card-premium relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-white/10"
		onclick={(e) => e.stopPropagation()}
		transition:scale={{ duration: 400, start: 0.95, opacity: 0, easing: cubicOut }}
	>
		<button 
			class="absolute right-4 top-4 z-20 rounded-full bg-black/50 backdrop-blur-md p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
			onclick={onClose}
		>
			<X size={20} />
		</button>
		
		<!-- Thumbnail -->
		<div class="h-64 lg:h-80 w-full bg-surface relative">
			<img src={project.image} alt={project.title} class="w-full h-full object-cover" />
			<div class="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
		</div>

		<div class="p-6 lg:p-10 -mt-20 relative z-10">
			<div class="flex items-center gap-3 mb-4">
				<span class="rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary border border-primary/30">
					{project.role}
				</span>
			</div>
			
			<h2 class="text-4xl font-extrabold text-text-main mb-6">{project.title}</h2>
			
			<div class="prose prose-invert prose-lg max-w-none mb-10 text-text-desc">
				<p class="leading-relaxed">{project.description}</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
				<div>
					<h3 class="text-xl font-bold text-text-main mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
						Key Features
					</h3>
					<ul class="space-y-3">
						{#each project.features as feature}
							<li class="flex items-start gap-3 text-text-desc">
								<CheckCircle2 size={20} class="text-success shrink-0 mt-0.5" />
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="text-xl font-bold text-text-main mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
						Tech Stack
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="flex flex-wrap gap-4 pt-8 border-t border-white/10">
				{#if project.link}
					<a 
						href={project.link} 
						target="_blank" 
						rel="noreferrer"
						class="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
					>
						<ExternalLink size={18} /> Visit Website
					</a>
				{/if}
				{#if project.github}
					<a 
						href={project.github} 
						target="_blank" 
						rel="noreferrer"
						class="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105 active:scale-95"
					>
						<Icon icon="simple-icons:github" class="w-[18px] h-[18px]" /> Source Code
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
