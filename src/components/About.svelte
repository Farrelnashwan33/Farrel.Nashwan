<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Terminal, Smartphone, Globe, Database, PenTool, Users, Code, Briefcase, User, MapPin, Mail, Download } from '@lucide/svelte';
	import CountUp from './CountUp.svelte';

	const highlights = [
		{ icon: Globe, title: 'Web Development', desc: 'Membangun aplikasi web modern yang cepat dan responsif.' },
		{ icon: Smartphone, title: 'Mobile Development', desc: 'Pengembangan aplikasi cross-platform dengan Flutter.' },
		{ icon: Database, title: 'Backend Systems', desc: 'Arsitektur database dan REST API yang scalable.' },
		{ icon: PenTool, title: 'UI/UX Focus', desc: 'Desain antarmuka yang elegan dan ramah pengguna.' },
		{ icon: Terminal, title: 'Problem Solving', desc: 'Pendekatan logis dalam menyelesaikan masalah kompleks.' },
		{ icon: Users, title: 'Team Collaboration', desc: 'Komunikasi yang efektif dalam lingkungan kerja tim.' }
	];
</script>

<section id="about" class="section-padding relative">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 text-center lg:text-left" use:reveal={{ type: 'up' }}>
			<h2 class="text-4xl font-extrabold tracking-tight text-text-main mb-4">
				About <span class="text-primary">Me</span>
			</h2>
			<div class="h-1 w-20 bg-primary rounded-full lg:mx-0 mx-auto"></div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
			<!-- Photo (Left) -->
			<div class="lg:col-span-5 relative" use:reveal={{ type: 'left' }}>
				<div class="relative w-full max-w-md mx-auto aspect-square">
					<div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
					<div class="absolute inset-0 rounded-3xl border border-white/10 glass-effect p-2 transform rotate-3 transition-transform hover:rotate-0 duration-500">
						<img 
							src="https://avatars.githubusercontent.com/Farrelnashwan33" 
							alt="Akhmad Farrel Nashwan" 
							class="w-full h-full object-cover rounded-2xl"
							onerror={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Farrel+Nashwan&background=1F2937&color=fff&size=512' }}
						/>
					</div>
					<!-- Decorative element -->
					<div class="absolute -bottom-6 -right-6 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMzMzIi8+Cjwvc3ZnPg==')] opacity-50 -z-10"></div>
				</div>
			</div>

			<!-- Content (Right) -->
			<div class="lg:col-span-7" use:reveal={{ type: 'right' }}>
				<div class="prose prose-invert prose-lg text-text-desc max-w-none mb-8">
					<p>
						Sebagai seorang Software Engineer, saya memiliki passion mendalam terhadap pengembangan perangkat lunak yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman pengguna yang luar biasa. Saya berfokus pada penulisan <strong class="text-white">Clean Code</strong> yang mudah dipelihara dan diukur.
					</p>
					<p>
						Dengan keahlian di bidang <strong class="text-white">Software Development</strong> mencakup Web, Mobile, hingga ranah Backend, saya selalu berusaha mengikuti perkembangan teknologi terbaru. Hal ini memungkinkan saya untuk memberikan solusi teknis yang tepat guna dan efisien bagi setiap permasalahan yang ada.
					</p>
				</div>

				<div class="grid grid-cols-2 gap-4 mb-10">
					{#each ['Problem Solving', 'Clean Code', 'REST API', 'Responsive UI', 'Team Collaboration', 'Fast Learner'] as item}
						<div class="flex items-center gap-3 text-text-main font-medium">
							<div class="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
							</div>
							{item}
						</div>
					{/each}
				</div>

				<a
					href="/cv.pdf"
					target="_blank"
					class="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold transition-all hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1"
				>
					<Download size={18} /> Download CV
				</a>
			</div>
		</div>
	</div>
</section>
