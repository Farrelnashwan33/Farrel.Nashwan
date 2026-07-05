<script lang="ts">
	import { Mail, Download, ArrowRight } from '@lucide/svelte';
	import Icon from '@iconify/svelte';
	import { reveal } from '$lib/actions/reveal';
	import TypingText from './TypingText.svelte';
</script>

<section id="home" class="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
	<!-- Background glow effect -->
	<div class="absolute inset-0 pointer-events-none" style="z-index: 0;">
		<div class="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[100px]" style="background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);"></div>
		<div class="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full opacity-10 blur-[80px]" style="background: radial-gradient(circle, var(--color-secondary) 0%, transparent 70%);"></div>
	</div>

	<div class="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
			<!-- Text Content (Left) -->
			<div class="text-left">
				<div use:reveal={{ type: 'up' }} class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-text-desc mb-8">
					<span class="relative flex h-3 w-3">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
					</span>
					Available for new opportunities
				</div>
				
				<h1 use:reveal={{ type: 'up' }} class="animate-delay-100 text-5xl md:text-7xl font-extrabold tracking-tight text-text-main mb-4">
					Halo, I'm <br/>
					<TypingText text="Akhmad Farrel " speed={70} delay={300} />
					<TypingText text="Nashwan." class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" speed={80} delay={1300} />
				</h1>
				
				<h2 use:reveal={{ type: 'up' }} class="animate-delay-200 text-xl md:text-2xl font-semibold text-text-desc mb-6">
					Software Engineer | Full Stack Developer
				</h2>
				
				<p use:reveal={{ type: 'up' }} class="animate-delay-300 text-text-desc text-lg max-w-xl mb-10 leading-relaxed">
					Saya membantu perusahaan membangun produk digital yang *scalable*, *fast*, dan memiliki pengalaman pengguna kelas dunia. Fokus pada arsitektur modern dan *clean code*.
				</p>
				
				<div use:reveal={{ type: 'up' }} class="animate-delay-400 flex flex-wrap items-center gap-4">
					<a
						href="#projects"
						class="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1"
					>
						View Projects <ArrowRight size={18} />
					</a>
					<a
						href="/cv.pdf"
						target="_blank"
						class="flex items-center gap-2 rounded-full border border-white/10 glass-effect px-6 py-3 text-sm font-semibold text-text-main transition-all hover:bg-white/10 hover:-translate-y-1"
					>
						<Download size={18} /> Download CV
					</a>
				</div>
				
				<div use:reveal={{ type: 'up' }} class="animate-delay-500 mt-10 flex items-center gap-5">
					<a href="https://github.com/Farrelnashwan33" target="_blank" rel="noreferrer" class="p-3 rounded-full glass-effect text-gray-400 hover:text-white hover:border-white/20 hover:-translate-y-1 transition-all" aria-label="GitHub">
						<Icon icon="simple-icons:github" class="w-5 h-5" />
					</a>
					<a href="https://linkedin.com/in/farrelnashwan" target="_blank" rel="noreferrer" class="p-3 rounded-full glass-effect text-gray-400 hover:text-white hover:border-white/20 hover:-translate-y-1 transition-all" aria-label="LinkedIn">
						<Icon icon="simple-icons:linkedin" class="w-5 h-5" />
					</a>
					<a href="#contact" class="p-3 rounded-full glass-effect text-gray-400 hover:text-white hover:border-white/20 hover:-translate-y-1 transition-all" aria-label="Email">
						<Mail size={20} />
					</a>
				</div>
			</div>
			
			<!-- Image & Floating Elements (Right) -->
			<div use:reveal={{ type: 'scale' }} class="animate-delay-300 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
				<div class="relative w-72 h-72 md:w-96 md:h-96">
					<!-- Glow behind image -->
					<div class="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse"></div>
					
					<!-- Main Image Container -->
					<div class="absolute inset-4 rounded-full overflow-hidden border border-white/10 bg-surface z-10 p-1">
						<img 
							src="https://avatars.githubusercontent.com/Farrelnashwan33" 
							alt="Akhmad Farrel Nashwan" 
							class="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-105"
							onerror={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Farrel+Nashwan&background=1F2937&color=fff&size=512' }}
						/>
					</div>
					
					<!-- Floating Tech Icons -->
					<div class="absolute -top-4 -left-4 z-20 p-4 rounded-2xl glass-effect border-white/10 animate-[bounce_3s_infinite_ease-in-out]">
						<Icon icon="simple-icons:svelte" class="w-8 h-8 text-[#FF3E00]" />
					</div>
					<div class="absolute top-1/2 -right-8 z-20 p-4 rounded-2xl glass-effect border-white/10 animate-[bounce_4s_infinite_ease-in-out_0.5s]">
						<Icon icon="simple-icons:typescript" class="w-8 h-8 text-[#3178C6]" />
					</div>
					<div class="absolute -bottom-6 left-12 z-20 p-4 rounded-2xl glass-effect border-white/10 animate-[bounce_3.5s_infinite_ease-in-out_1s]">
						<Icon icon="simple-icons:tailwindcss" class="w-8 h-8 text-[#06B6D4]" />
					</div>
					
					<!-- Floating Stat Card -->
					<div class="absolute -bottom-8 -right-8 z-20 px-6 py-4 rounded-2xl glass-effect border-white/10 animate-[bounce_5s_infinite_ease-in-out_1.5s]">
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
								<Icon icon="lucide:code-2" class="w-5 h-5" />
							</div>
							<div>
								<div class="text-xs font-medium text-text-desc">Experience</div>
								<div class="text-xl font-bold text-white">3+ Years</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
