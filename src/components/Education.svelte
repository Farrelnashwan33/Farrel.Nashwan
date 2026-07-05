<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { GraduationCap, Award, Calendar } from '@lucide/svelte';

	const educations = [
		{
			degree: 'Rekayasa Perangkat Lunak',
			school: 'SMK/Pendidikan Terkait',
			year: '2020 - 2023',
			desc: 'Fokus pada pemrograman, struktur data, pengembangan perangkat lunak berbasis web dan mobile.',
			icon: GraduationCap
		}
	];
</script>

<section id="education" class="section-padding relative">
	<div class="mx-auto max-w-4xl px-6 lg:px-8">
		<div class="mb-16 text-center" use:reveal={{ type: 'up' }}>
			<h2 class="text-4xl font-extrabold tracking-tight text-text-main mb-4">
				Education & <span class="text-secondary">Learning</span>
			</h2>
			<div class="h-1 w-20 bg-secondary rounded-full mx-auto mb-8"></div>
		</div>

		<div class="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0 before:absolute before:inset-0 before:ml-[-1px] md:before:ml-[50%] before:-translate-x-1/2 before:w-[2px] before:bg-gradient-to-b before:from-secondary before:to-transparent before:z-0">
			{#each educations as edu, i}
				{@const Icon = edu.icon}
				<div 
					use:reveal={{ type: i % 2 === 0 ? 'right' : 'left' }}
					class="mb-12 relative pl-8 md:pl-0 md:flex items-center justify-between w-full {i % 2 === 0 ? 'md:flex-row-reverse' : ''}"
				>
					<!-- Timeline Dot -->
					<div class="absolute left-[-16px] md:left-1/2 md:-ml-[16px] top-1 w-8 h-8 rounded-full bg-surface border-2 border-secondary z-10 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(6,182,212,0.5)]">
						<Icon size={14} />
					</div>
					
					<!-- Content -->
					<div class="md:w-[45%] {i % 2 === 0 ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'} mt-1 md:mt-0">
						<div class="card-premium p-6 group">
							<div class="flex items-center gap-2 text-secondary text-sm font-semibold mb-3 {i % 2 === 0 ? '' : 'md:justify-end'}">
								<Calendar size={16} />
								{edu.year}
							</div>
							<h3 class="text-xl font-bold text-text-main mb-2">{edu.degree}</h3>
							<div class="flex items-center gap-2 text-gray-300 font-medium mb-4 {i % 2 === 0 ? '' : 'md:justify-end'}">
								<Award size={16} class="text-gray-500" />
								{edu.school}
							</div>
							<p class="text-text-desc text-sm leading-relaxed">
								{edu.desc}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
