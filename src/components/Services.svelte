<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Code2, Smartphone, Globe, Layers, ArrowRight } from '@lucide/svelte';

	const services = [
		{
			title: 'Web Development',
			description: 'Membangun website responsif, cepat, dan SEO friendly dengan teknologi modern seperti SvelteKit, React, dan TailwindCSS.',
			icon: Globe,
			features: ['Landing Page', 'E-Commerce', 'Company Profile', 'Web App']
		},
		{
			title: 'Mobile App Development',
			description: 'Pengembangan aplikasi mobile lintas platform (iOS & Android) dengan performa native menggunakan Flutter.',
			icon: Smartphone,
			features: ['Cross-platform', 'UI/UX Design', 'API Integration', 'App Store Publishing']
		},
		{
			title: 'Backend Systems',
			description: 'Merancang arsitektur backend yang kuat, aman, dan scalable menggunakan Node.js, Laravel, dan database modern.',
			icon: Layers,
			features: ['RESTful API', 'Database Design', 'Authentication', 'Cloud Deployment']
		}
	];
</script>

<section id="services" class="section-padding relative">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 text-center" use:reveal={{ type: 'up' }}>
			<h2 class="text-4xl font-extrabold tracking-tight text-text-main mb-4">
				My <span class="text-primary">Services</span>
			</h2>
			<div class="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
			<p class="text-text-desc max-w-2xl mx-auto text-lg">
				Solusi digital komprehensif untuk membantu mewujudkan ide dan kebutuhan bisnis Anda menjadi produk nyata.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each services as service, i}
				{@const Icon = service.icon}
				<div 
					use:reveal={{ type: 'up' }}
					class="card-premium p-8 group flex flex-col h-full"
					style="animation-delay: {i * 100}ms;"
				>
					<div class="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
						<Icon size={28} />
					</div>
					
					<h3 class="text-2xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">
						{service.title}
					</h3>
					
					<p class="text-text-desc text-sm leading-relaxed mb-8 flex-grow">
						{service.description}
					</p>
					
					<div class="mt-auto">
						<h4 class="text-sm font-semibold text-text-main mb-3 border-b border-white/5 pb-2">What's included:</h4>
						<ul class="space-y-2 mb-6">
							{#each service.features as feature}
								<li class="flex items-center gap-2 text-sm text-gray-400">
									<div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
									{feature}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
