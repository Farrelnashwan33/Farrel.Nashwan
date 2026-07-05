<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="relative bg-background pt-16 pb-8 border-t border-white/5">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-center justify-between gap-6">
			
			<div class="flex flex-col items-center md:items-start">
				<a href="#home" class="text-xl font-extrabold tracking-tighter text-text-main mb-2 hover:text-primary transition-colors">
					AFN<span class="text-primary">.</span>
				</a>
				<p class="text-sm font-medium text-text-desc">
					Building digital products, brands, and experience.
				</p>
			</div>

			<div class="flex flex-col items-center md:items-end gap-6">
				<!-- Social Icons -->
				<div class="flex items-center gap-5">
					<a href="https://github.com/Farrelnashwan33" target="_blank" rel="noreferrer" class="text-text-desc hover:text-white transition-all hover:scale-110" aria-label="GitHub">
						<Icon icon="simple-icons:github" class="w-5 h-5" />
					</a>
					<a href="https://linkedin.com/in/farrelnashwan" target="_blank" rel="noreferrer" class="text-text-desc hover:text-white transition-all hover:scale-110" aria-label="LinkedIn">
						<Icon icon="simple-icons:linkedin" class="w-5 h-5" />
					</a>
					<a href="https://instagram.com/farrel.nashwan" target="_blank" rel="noreferrer" class="text-text-desc hover:text-white transition-all hover:scale-110" aria-label="Instagram">
						<Icon icon="simple-icons:instagram" class="w-5 h-5" />
					</a>
				</div>
				
				<p class="text-xs font-semibold text-text-desc/70">
					&copy; {new Date().getFullYear()} Akhmad Farrel Nashwan. All rights reserved.
				</p>
			</div>
			
		</div>
	</div>
</footer>
