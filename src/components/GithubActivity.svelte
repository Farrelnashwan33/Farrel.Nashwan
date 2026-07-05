<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { BookOpen, Users, UserPlus, GitCommit } from '@lucide/svelte';
	import Icon from '@iconify/svelte';

	let { githubUser } = $props();
</script>

<section class="section-padding relative">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 text-center" use:reveal={{ type: 'up' }}>
			<h2 class="text-4xl font-extrabold tracking-tight text-text-main mb-4 flex items-center justify-center gap-4">
				<Icon icon="simple-icons:github" class="w-9 h-9 text-primary" />
				GitHub <span class="text-primary">Dashboard</span>
			</h2>
			<div class="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
			<p class="text-text-desc max-w-2xl mx-auto text-lg">
				Statistik kontribusi open source dan aktivitas pengembangan di GitHub.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
			<!-- Stats Cards -->
			{#if githubUser}
				<div class="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6 mb-2">
					<div use:reveal={{ type: 'up' }} class="card-premium p-6 text-center group" style="animation-delay: 0ms;">
						<div class="flex justify-center text-primary mb-4 transition-transform group-hover:scale-110"><BookOpen size={28} /></div>
						<div class="text-3xl font-bold text-text-main mb-1">{githubUser.public_repos}</div>
						<div class="text-sm font-medium text-text-desc">Repositories</div>
					</div>
					
					<div use:reveal={{ type: 'up' }} class="card-premium p-6 text-center group" style="animation-delay: 100ms;">
						<div class="flex justify-center text-secondary mb-4 transition-transform group-hover:scale-110"><Users size={28} /></div>
						<div class="text-3xl font-bold text-text-main mb-1">{githubUser.followers}</div>
						<div class="text-sm font-medium text-text-desc">Followers</div>
					</div>
					
					<div use:reveal={{ type: 'up' }} class="card-premium p-6 text-center group" style="animation-delay: 200ms;">
						<div class="flex justify-center text-success mb-4 transition-transform group-hover:scale-110"><UserPlus size={28} /></div>
						<div class="text-3xl font-bold text-text-main mb-1">{githubUser.following}</div>
						<div class="text-sm font-medium text-text-desc">Following</div>
					</div>
					
					<div use:reveal={{ type: 'up' }} class="card-premium p-6 text-center group" style="animation-delay: 300ms;">
						<div class="flex justify-center text-warning mb-4 transition-transform group-hover:scale-110"><GitCommit size={28} /></div>
						<div class="text-3xl font-bold text-text-main mb-1">2K+</div>
						<div class="text-sm font-medium text-text-desc">Contributions</div>
					</div>
				</div>
			{/if}

			<!-- Top Languages & Stats -->
			<div class="lg:col-span-4 flex flex-col gap-6">
				<div use:reveal={{ type: 'left' }} class="card-premium p-6 flex-1 flex flex-col items-center justify-center">
					<h3 class="text-lg font-semibold text-text-main mb-6 w-full border-b border-white/5 pb-4">Top Languages</h3>
					<img 
						src="https://github-readme-stats.vercel.app/api/top-langs/?username=Farrelnashwan33&layout=compact&theme=vision-friendly-dark&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=9ca3af" 
						alt="Top Languages" 
						class="w-full max-w-[300px]"
					/>
				</div>
			</div>

			<!-- Contribution Graph & Activity -->
			<div class="lg:col-span-8 flex flex-col gap-6">
				<div use:reveal={{ type: 'right' }} class="card-premium p-6 flex-1 flex flex-col items-center justify-center">
					<h3 class="text-lg font-semibold text-text-main mb-6 w-full border-b border-white/5 pb-4">Contribution Graph</h3>
					<div class="w-full overflow-x-auto custom-scrollbar flex justify-center py-4">
						<img 
							src="https://ghchart.rshah.org/3B82F6/Farrelnashwan33" 
							alt="GitHub Contribution Graph" 
							class="max-w-none opacity-90 hover:opacity-100 transition-opacity"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
