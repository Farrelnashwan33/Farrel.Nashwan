<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Award, ExternalLink, ShieldCheck } from '@lucide/svelte';

	const certificates = [
		{
			title: 'Dicoding: Belajar Dasar Pemrograman Web',
			issuer: 'Dicoding Indonesia',
			date: '2023',
			credentialId: 'XYZ-123-456',
			link: '#',
			image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
		},
		{
			title: 'Dicoding: Menjadi Front-End Web Developer Expert',
			issuer: 'Dicoding Indonesia',
			date: '2023',
			credentialId: 'ABC-987-654',
			link: '#',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
		},
		{
			title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
			issuer: 'Dicoding Indonesia',
			date: '2022',
			credentialId: 'FLT-456-789',
			link: '#',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
		}
	];
</script>

<section id="certificates" class="section-padding relative">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6" use:reveal={{ type: 'left' }}>
			<div>
				<h2 class="text-4xl font-extrabold tracking-tight text-text-main mb-4">
					Licenses & <span class="text-warning">Certifications</span>
				</h2>
				<div class="h-1 w-20 bg-warning rounded-full mb-4"></div>
				<p class="text-text-desc max-w-2xl text-lg">
					Validasi keahlian teknis melalui sertifikasi profesional.
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each certificates as cert, i}
				<div 
					use:reveal={{ type: 'up' }}
					class="card-premium group flex flex-col h-full overflow-hidden"
					style="animation-delay: {i * 100}ms;"
				>
					<div class="h-48 w-full bg-surface relative overflow-hidden">
						<img 
							src={cert.image} 
							alt={cert.title} 
							class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
						<div class="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-warning/20 backdrop-blur-md flex items-center justify-center text-warning border border-warning/30">
							<ShieldCheck size={20} />
						</div>
					</div>
					
					<div class="p-6 lg:p-8 flex flex-col flex-grow -mt-12 relative z-10">
						<h3 class="text-xl font-bold text-text-main mb-2 group-hover:text-warning transition-colors line-clamp-2">
							{cert.title}
						</h3>
						
						<p class="text-text-desc font-medium mb-4">
							{cert.issuer}
						</p>

						<div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
							<Award size={16} />
							<span>Issued {cert.date}</span>
							<span class="mx-2">•</span>
							<span>ID: {cert.credentialId}</span>
						</div>
						
						<div class="mt-auto pt-4 border-t border-white/5">
							<a 
								href={cert.link} 
								target="_blank" 
								rel="noreferrer"
								class="inline-flex items-center gap-2 text-sm font-semibold text-warning hover:text-white transition-colors group/link"
							>
								Show Credential 
								<ExternalLink size={16} class="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
