<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import Icon from '@iconify/svelte';

	const skillCategories = [
		{
			title: 'Frontend',
			skills: [
				{ name: 'Svelte', icon: 'simple-icons:svelte', color: '#FF3E00' },
				{ name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
				{ name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
				{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4' }
			]
		},
		{
			title: 'Backend',
			skills: [
				{ name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#339933' },
				{ name: 'Laravel', icon: 'simple-icons:laravel', color: '#FF2D20' },
				{ name: 'PHP', icon: 'simple-icons:php', color: '#777BB4' },
				{ name: 'Express', icon: 'simple-icons:express', color: '#FFFFFF' }
			]
		},
		{
			title: 'Database',
			skills: [
				{ name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
				{ name: 'MySQL', icon: 'simple-icons:mysql', color: '#4479A1' },
				{ name: 'Supabase', icon: 'simple-icons:supabase', color: '#3ECF8E' },
				{ name: 'Firebase', icon: 'simple-icons:firebase', color: '#FFCA28' }
			]
		},
		{
			title: 'Cloud',
			skills: [
				{ name: 'Google Cloud', icon: 'simple-icons:googlecloud', color: '#4285F4' },
				{ name: 'Cloudflare', icon: 'simple-icons:cloudflare', color: '#F38020' },
				{ name: 'Vercel', icon: 'simple-icons:vercel', color: '#FFFFFF' },
				{ name: 'Netlify', icon: 'simple-icons:netlify', color: '#00C7B7' }
			]
		},
		{
			title: 'Mobile',
			skills: [
				{ name: 'Flutter', icon: 'simple-icons:flutter', color: '#02569B' },
				{ name: 'Dart', icon: 'simple-icons:dart', color: '#0175C2' },
				{ name: 'Kotlin', icon: 'simple-icons:kotlin', color: '#7F52FF' },
				{ name: 'Android', icon: 'simple-icons:android', color: '#3DDC84' }
			]
		},
		{
			title: 'Tools',
			skills: [
				{ name: 'Git', icon: 'simple-icons:git', color: '#F05032' },
				{ name: 'GitHub', icon: 'simple-icons:github', color: '#FFFFFF' },
				{ name: 'Figma', icon: 'simple-icons:figma', color: '#F24E1E' },
				{ name: 'Postman', icon: 'simple-icons:postman', color: '#FF6C37' }
			]
		}
	];
</script>

<section id="skills" class="section-padding relative">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 text-center" use:reveal={{ type: 'up' }}>
			<h2 class="text-4xl font-extrabold tracking-tight text-text-main mb-4">
				Tech <span class="text-primary">Stack</span>
			</h2>
			<div class="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
			<p class="text-text-desc max-w-2xl mx-auto text-lg">
				Teknologi dan tools yang saya gunakan untuk membangun solusi digital yang handal.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each skillCategories as category, catIndex}
				<div 
					use:reveal={{ type: 'up' }}
					class="card-premium p-6 lg:p-8 flex flex-col"
					style="animation-delay: {catIndex * 100}ms;"
				>
					<h3 class="text-xl font-semibold text-text-main mb-6 border-b border-white/5 pb-4">
						{category.title}
					</h3>
					<div class="grid grid-cols-2 gap-4 flex-1">
						{#each category.skills as skill}
							<div class="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:-translate-y-1">
								<div class="mb-3 transition-transform duration-300 group-hover:scale-125">
									<Icon icon={skill.icon} class="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" style="color: {skill.color};" />
								</div>
								<span class="text-xs font-medium text-text-desc group-hover:text-white transition-colors text-center">{skill.name}</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
