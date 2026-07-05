<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { ArrowUpRight, ExternalLink } from '@lucide/svelte';
	import Icon from '@iconify/svelte';
	import { featuredProjects, type Project } from '../data/projects';
	import ProjectModal from './ProjectModal.svelte';

	let selectedProject = $state<Project | null>(null);
</script>

<section id="projects" class="section-padding relative">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6" use:reveal={{ type: 'left' }}>
			<div>
				<h2 class="text-4xl font-extrabold tracking-tight text-text-main mb-4">
					Featured <span class="text-primary">Projects</span>
				</h2>
				<div class="h-1 w-20 bg-primary rounded-full mb-4"></div>
				<p class="text-text-desc max-w-2xl text-lg">
					Beberapa karya terbaik yang menunjukkan dedikasi saya dalam menciptakan solusi digital berkualitas tinggi.
				</p>
			</div>
			<a 
				href="https://github.com/Farrelnashwan33" 
				target="_blank" 
				rel="noreferrer"
				class="group flex items-center gap-2 text-sm font-semibold text-text-desc hover:text-white transition-colors"
			>
				View Full Portfolio
				<ArrowUpRight size={16} class="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each featuredProjects as project, i}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div 
					use:reveal={{ type: 'up' }}
					class="card-premium group cursor-pointer flex flex-col h-full overflow-hidden"
					style="animation-delay: {(i % 3) * 100}ms;"
					onclick={() => selectedProject = project}
				>
					<div class="h-56 w-full bg-surface relative overflow-hidden">
						<img 
							src={project.image} 
							alt={project.title} 
							class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
						
						<div class="absolute bottom-4 left-4 right-4 flex justify-between items-end">
							<span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">
								{project.role}
							</span>
							<div class="flex gap-2">
								{#if project.github}
									<a 
										href={project.github} 
										target="_blank" 
										rel="noreferrer" 
										class="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-desc hover:text-white hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]"
									>
										<Icon icon="simple-icons:github" class="w-5 h-5" />
									</a>
								{/if}
								{#if project.link}
									<a href={project.link} target="_blank" rel="noreferrer" class="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary hover:bg-primary/40 transition-colors border border-primary/30" onclick={(e) => e.stopPropagation()}>
										<ExternalLink size={14} />
									</a>
								{/if}
							</div>
						</div>
					</div>
					
					<div class="p-6 lg:p-8 flex flex-col flex-grow">
						<h3 class="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
							{project.title}
						</h3>
						
						<p class="text-text-desc text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
							{project.description}
						</p>
						
						<div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
							{#each project.tags.slice(0, 3) as tag}
								<span class="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
									{tag}
								</span>
							{/each}
							{#if project.tags.length > 3}
								<span class="text-xs font-medium text-gray-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
									+{project.tags.length - 3}
								</span>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if selectedProject}
	<ProjectModal project={selectedProject} onClose={() => selectedProject = null} />
{/if}
