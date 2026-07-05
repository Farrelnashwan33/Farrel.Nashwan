<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Trophy, Star, ShieldCheck, Play } from '@lucide/svelte';

	const achievements = [
		{
			title: 'Google Play Publisher',
			desc: 'Mem-publish aplikasi ke Google Play Store yang siap digunakan oleh publik.',
			icon: Play,
			color: 'text-green-500'
		},
		{
			title: 'Open Source Contributor',
			desc: 'Berkontribusi aktif pada komunitas open source di GitHub.',
			icon: ShieldCheck,
			color: 'text-purple-500'
		},
		{
			title: 'Certificate of Excellence',
			desc: 'Menyelesaikan berbagai sertifikasi terkait pengembangan software.',
			icon: Trophy,
			color: 'text-yellow-500'
		},
		{
			title: 'Project Milestone',
			desc: 'Mencapai target pengembangan dengan ratusan commit pada repositori utama.',
			icon: Star,
			color: 'text-blue-500'
		}
	];
</script>

<section id="achievements" class="py-24 relative">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 text-center" use:reveal>
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
				Achievements
			</h2>
			<div class="h-1 w-20 bg-accent rounded-full mx-auto mb-8"></div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each achievements as item, i}
				<div 
					use:reveal 
					class="card-premium p-6 text-center group"
					style="animation-delay: {i * 100}ms;"
				>
					<div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:bg-white/10">
						<item.icon size={32} class={item.color} />
					</div>
					<h3 class="text-lg font-bold text-white mb-3">{item.title}</h3>
					<p class="text-gray-400 text-sm leading-relaxed">
						{item.desc}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
