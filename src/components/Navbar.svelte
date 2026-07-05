<script lang="ts">
	import { Menu, X } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);
	let activeSection = $state('home');

	const navLinks = [
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Projects', href: '#projects' }
	];

	onMount(() => {
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					isScrolled = window.scrollY > 20;
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		
		// Intersection Observer for Active Section
		const sections = document.querySelectorAll('section[id]');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					activeSection = entry.target.id;
				}
			});
		}, { rootMargin: '-30% 0px -70% 0px' });
		
		sections.forEach(section => observer.observe(section));
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect();
		};
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<nav
	class="fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2 {isScrolled
		? 'top-4 w-[90%] max-w-5xl rounded-full glass-effect py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
		: 'top-0 w-full py-6 bg-transparent border-b border-transparent'}"
>
	<div class="mx-auto flex h-full items-center justify-between px-6 lg:px-8">
		<!-- Left: Logo -->
		<a href="#home" class="text-xl font-bold tracking-tighter text-white">
			Farrel<span class="text-primary">.</span>
		</a>

		<!-- Middle: Menu (Desktop) -->
		<div class="hidden items-center justify-center absolute left-1/2 -translate-x-1/2 md:flex">
			<ul class="flex gap-1 p-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
				{#each navLinks as link}
					<li>
						<a 
							href={link.href} 
							class="relative block px-4 py-2 text-sm font-medium transition-colors {activeSection === link.href.substring(1) ? 'text-white' : 'text-gray-400 hover:text-gray-200'}"
						>
							{#if activeSection === link.href.substring(1)}
								<div class="absolute inset-0 bg-white/10 rounded-full" style="z-index: -1;"></div>
							{/if}
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Right: Contact Button (Desktop) -->
		<div class="hidden md:flex">
			<a 
				href="#contact" 
				class="px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
			>
				Contact Me
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button class="md:hidden text-gray-300 hover:text-white" onclick={toggleMobileMenu}>
			{#if isMobileMenuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isMobileMenuOpen}
		<div class="glass-effect absolute left-0 top-full mt-4 w-full rounded-2xl border border-white/10 p-4 md:hidden">
			<ul class="flex flex-col gap-2">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="block rounded-lg px-4 py-3 text-sm font-medium transition-colors {activeSection === link.href.substring(1) ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}"
							onclick={() => (isMobileMenuOpen = false)}
						>
							{link.name}
						</a>
					</li>
				{/each}
				<li class="pt-2 mt-2 border-t border-white/10">
					<a
						href="#contact"
						class="block w-full text-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
						onclick={() => (isMobileMenuOpen = false)}
					>
						Contact Me
					</a>
				</li>
			</ul>
		</div>
	{/if}
</nav>
