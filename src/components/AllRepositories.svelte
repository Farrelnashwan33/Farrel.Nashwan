<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Search, Star, GitFork, ExternalLink } from '@lucide/svelte';
	import Icon from '@iconify/svelte';
	import { generateDescription, generateThumbnail } from '../utils/github';

	let { repos = [] } = $props();
	
	let searchQuery = $state('');
	let sortBy = $state('stars'); // 'stars' | 'updated'
	let visibleCount = $state(6);
	
	let validRepos = $derived((repos || []).filter((r: any) => !r.fork));
	
	let filteredRepos = $derived(validRepos.filter((repo: any) => 
		repo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
		(repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
	));
	
	let sortedRepos = $derived([...filteredRepos].sort((a: any, b: any) => {
		if (sortBy === 'stars') {
			return b.stargazers_count - a.stargazers_count;
		} else {
			return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
		}
	}));
	
	let visibleRepos = $derived(sortedRepos.slice(0, visibleCount));
	
	function loadMore() {
		visibleCount += 6;
	}
</script>

<section class="section-padding relative">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6" use:reveal={{ type: 'up' }}>
			<div>
				<h2 class="text-3xl font-bold tracking-tight text-text-main mb-4">
					All <span class="text-primary">Repositories</span>
				</h2>
				<div class="h-1 w-16 bg-primary rounded-full mb-4"></div>
				<p class="text-text-desc max-w-2xl text-lg">
					Eksplorasi seluruh open source repository GitHub saya.
				</p>
			</div>
			
			<div class="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
				<div class="relative w-full sm:w-64">
					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
						<Search size={18} />
					</div>
					<input 
						type="text" 
						bind:value={searchQuery}
						placeholder="Search repositories..." 
						class="w-full bg-surface border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-text-main placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
					/>
				</div>
				<select 
					bind:value={sortBy}
					class="w-full sm:w-auto bg-surface border border-white/10 rounded-lg py-2.5 px-4 text-sm text-text-main focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
				>
					<option value="stars">Sort by Stars</option>
					<option value="updated">Sort by Recently Updated</option>
				</select>
			</div>
		</div>

		{#if sortedRepos.length === 0}
			<div class="card-premium p-12 text-center flex flex-col items-center justify-center">
				<Icon icon="simple-icons:github" class="w-12 h-12 text-gray-600 mb-4" />
				<h3 class="text-xl font-bold text-text-main mb-2">No repositories found</h3>
				<p class="text-text-desc">Pencarian "{searchQuery}" tidak menemukan hasil.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each visibleRepos as repo, i}
					<div 
						use:reveal={{ type: 'up' }}
						class="card-premium group flex flex-col h-full overflow-hidden"
						style="animation-delay: {(i % 3) * 100}ms;"
					>
						<div class="p-6 flex flex-col flex-grow">
							<div class="flex items-start justify-between gap-4 mb-4">
								<h3 class="text-lg font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">
									<a href={repo.html_url} target="_blank" rel="noreferrer" class="hover:underline">
										{repo.name.replace(/[-_]/g, ' ')}
									</a>
								</h3>
								<a href={repo.html_url} target="_blank" rel="noreferrer" class="text-gray-500 hover:text-white transition-colors shrink-0">
									<ExternalLink size={18} />
								</a>
							</div>
							
							<p class="text-text-desc text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
								{generateDescription(repo.name, repo.description)}
							</p>
							
							<div class="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
								<div class="flex items-center gap-4 text-xs text-gray-400 font-medium">
									{#if repo.language}
										<div class="flex items-center gap-1.5">
											<div class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
											{repo.language}
										</div>
									{/if}
									<div class="flex items-center gap-1.5 hover:text-white transition-colors"><Star size={14} /> {repo.stargazers_count}</div>
									<div class="flex items-center gap-1.5 hover:text-white transition-colors"><GitFork size={14} /> {repo.forks_count}</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			{#if visibleCount < sortedRepos.length}
				<div class="mt-12 flex justify-center">
					<button 
						onclick={loadMore}
						class="rounded-full bg-surface border border-white/10 px-8 py-3 text-sm font-semibold text-text-main transition-all hover:bg-white/5 hover:border-white/20 active:scale-95"
					>
						Load More Repositories
					</button>
				</div>
			{/if}
		{/if}
	</div>
</section>
