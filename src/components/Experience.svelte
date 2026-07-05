<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Briefcase, Calendar, Code, Rocket, Terminal, Smartphone } from '@lucide/svelte';

	const experiences = [
		{
			role: 'Full Stack & Mobile Developer',
			company: 'Independent Developer',
			period: '2023 - Present',
			description: 'Mengembangkan sistem HR (Nova HR) dan aplikasi Al-Qur\'an digital (Creative Quran) dengan arsitektur modern yang scalable.',
			icon: Rocket
		},
		{
			role: 'Open Source Contributor',
			company: 'GitHub',
			period: '2022 - Present',
			description: 'Aktif berkontribusi dalam berbagai proyek open source dan membangun portfolio publik dengan clean code.',
			icon: Code
		},
		{
			role: 'Freelance Developer',
			company: 'Berbagai Klien',
			period: '2022 - 2023',
			description: 'Mengerjakan berbagai proyek pembuatan website dan aplikasi mobile sesuai dengan kebutuhan spesifik klien.',
			icon: Briefcase
		},
		{
			role: 'Backend & Web Development',
			company: 'Self-Taught',
			period: '2021 - 2022',
			description: 'Mempelajari pengembangan backend menggunakan Laravel, Node.js, dan framework frontend modern Svelte/React.',
			icon: Terminal
		},
		{
			role: 'Mobile App Development',
			company: 'Self-Taught',
			period: '2020 - 2021',
			description: 'Memulai perjalanan sebagai developer dengan mempelajari pengembangan aplikasi mobile menggunakan Flutter & Dart.',
			icon: Smartphone
		}
	];
</script>

<section id="experience" class="section-padding relative">
	<div class="mx-auto max-w-4xl px-6 lg:px-8">
		<div class="mb-16 text-center" use:reveal={{ type: 'up' }}>
			<h2 class="text-4xl font-extrabold tracking-tight text-text-main mb-4">
				Experience & <span class="text-primary">Journey</span>
			</h2>
			<div class="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
		</div>

		<div class="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0 before:absolute before:inset-0 before:ml-[-1px] md:before:ml-[50%] before:-translate-x-1/2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-transparent before:z-0">
			{#each experiences as exp, i}
				{@const Icon = exp.icon}
				<div 
					use:reveal={{ type: i % 2 === 0 ? 'right' : 'left' }}
					class="mb-12 relative pl-8 md:pl-0 md:flex items-center justify-between w-full {i % 2 === 0 ? 'md:flex-row-reverse' : ''}"
				>
					<!-- Timeline Dot -->
					<div class="absolute left-[-16px] md:left-1/2 md:-ml-[16px] top-1 w-8 h-8 rounded-full bg-surface border-2 border-primary z-10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]">
						<Icon size={14} />
					</div>
					
					<!-- Content -->
					<div class="md:w-[45%] {i % 2 === 0 ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'} mt-1 md:mt-0">
						<div class="card-premium p-6 group">
							<div class="flex items-center gap-2 text-primary text-sm font-semibold mb-3 {i % 2 === 0 ? '' : 'md:justify-end'}">
								<Calendar size={16} />
								{exp.period}
							</div>
							<h3 class="text-xl font-bold text-text-main mb-2">{exp.role}</h3>
							<div class="flex items-center gap-2 text-gray-300 font-medium mb-4 {i % 2 === 0 ? '' : 'md:justify-end'}">
								<Briefcase size={16} class="text-gray-500" />
								{exp.company}
							</div>
							<p class="text-text-desc text-sm leading-relaxed">
								{exp.description}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
