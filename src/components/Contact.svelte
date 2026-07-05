<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Mail, Phone, MapPin, Send } from '@lucide/svelte';
	import Icon from '@iconify/svelte';

	let isSubmitting = $state(false);
	let submitSuccess = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		setTimeout(() => {
			isSubmitting = false;
			submitSuccess = true;
			(e.target as HTMLFormElement).reset();
			
			setTimeout(() => {
				submitSuccess = false;
			}, 3000);
		}, 1500);
	}
</script>

<section id="contact" class="section-padding relative">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 text-center" use:reveal={{ type: 'up' }}>
			<h2 class="text-4xl font-extrabold tracking-tight text-text-main mb-4">
				Get In <span class="text-primary">Touch</span>
			</h2>
			<div class="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
			<p class="text-text-desc max-w-2xl mx-auto text-lg">
				Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya melalui form di bawah atau via kontak langsung.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
			<!-- Contact Info & Map -->
			<div use:reveal={{ type: 'left' }} class="space-y-8">
				<div class="card-premium p-8 lg:p-10">
					<h3 class="text-2xl font-bold text-text-main mb-8">Contact Information</h3>
					
					<div class="space-y-8">
						<div class="flex items-start gap-5">
							<div class="w-12 h-12 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
								<Mail size={22} />
							</div>
							<div>
								<div class="text-sm font-semibold text-text-desc mb-1 uppercase tracking-wider">Email</div>
								<a href="mailto:email@example.com" class="text-lg text-text-main hover:text-primary transition-colors font-medium">email@example.com</a>
							</div>
						</div>
						
						<div class="flex items-start gap-5">
							<div class="w-12 h-12 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
								<Icon icon="simple-icons:instagram" class="w-6 h-6" />
							</div>
							<div>
								<div class="text-sm font-semibold text-text-desc mb-1 uppercase tracking-wider">Instagram</div>
								<a href="https://instagram.com/farrel.nashwan" target="_blank" rel="noreferrer" class="text-lg text-text-main hover:text-primary transition-colors font-medium">@farrel.nashwan</a>
							</div>
						</div>
						
						<div class="flex items-start gap-5">
							<div class="w-12 h-12 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
								<MapPin size={22} />
							</div>
							<div>
								<div class="text-sm font-semibold text-text-desc mb-1 uppercase tracking-wider">Location</div>
								<div class="text-text-main leading-relaxed font-medium">
									Soreang, Bandung<br/>
									Jawa Barat, Indonesia
								</div>
							</div>
						</div>
					</div>
					
					<div class="flex gap-4 mt-10 pt-8 border-t border-white/10">
						<a href="https://github.com/Farrelnashwan33" target="_blank" rel="noreferrer" class="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-text-desc hover:text-white hover:bg-white/10 transition-all border border-white/10 hover:border-white/30">
						<Icon icon="simple-icons:github" class="w-5 h-5" />
						</a>
						<a href="https://linkedin.com/in/farrelnashwan" target="_blank" rel="noreferrer" class="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-text-desc hover:text-white hover:bg-white/10 transition-all border border-white/10 hover:border-white/30">
						<Icon icon="simple-icons:linkedin" class="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div use:reveal={{ type: 'right' }}>
				<div class="card-premium p-8 lg:p-10">
					<h3 class="text-2xl font-bold text-text-main mb-8">Send a Message</h3>
					
					<form onsubmit={handleSubmit} class="space-y-6">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div class="space-y-2">
								<label for="name" class="text-sm font-medium text-text-desc">Name</label>
								<input type="text" id="name" required class="w-full bg-surface border border-white/10 rounded-xl px-4 py-3.5 text-text-main placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner" placeholder="John Doe" />
							</div>
							<div class="space-y-2">
								<label for="email" class="text-sm font-medium text-text-desc">Email</label>
								<input type="email" id="email" required class="w-full bg-surface border border-white/10 rounded-xl px-4 py-3.5 text-text-main placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner" placeholder="john@example.com" />
							</div>
						</div>
						
						<div class="space-y-2">
							<label for="subject" class="text-sm font-medium text-text-desc">Subject</label>
							<input type="text" id="subject" required class="w-full bg-surface border border-white/10 rounded-xl px-4 py-3.5 text-text-main placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner" placeholder="Project Collaboration" />
						</div>
						
						<div class="space-y-2">
							<label for="message" class="text-sm font-medium text-text-desc">Message</label>
							<textarea id="message" required rows="5" class="w-full bg-surface border border-white/10 rounded-xl px-4 py-3.5 text-text-main placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none shadow-inner" placeholder="Hello, I would like to discuss..."></textarea>
						</div>
						
						<button 
							type="submit" 
							disabled={isSubmitting}
							class="group relative w-full flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-xl px-4 py-4 hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95"
						>
							<div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
							
							<span class="relative z-10 flex items-center gap-2 text-base">
								{#if isSubmitting}
									<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
									Sending...
								{:else if submitSuccess}
									<span class="flex items-center gap-2">Message Sent! ✓</span>
								{:else}
									<Send size={20} class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message
								{/if}
							</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
