<script lang="ts">
	// No props needed
</script>

<div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
	<!-- Animated Gradient Blob 1 -->
	<div class="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-20 animate-blob" style="background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);"></div>
	
	<!-- Animated Gradient Blob 2 -->
	<div class="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-20 animate-blob animation-delay-2000" style="background: radial-gradient(circle, var(--color-accent-dark) 0%, transparent 70%);"></div>
	
	<!-- Animated Gradient Blob 3 -->
	<div class="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] rounded-full opacity-10 animate-blob animation-delay-4000" style="background: radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%);"></div>
	
	<!-- Noise Texture Overlay -->
	<div class="absolute inset-0 opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
</div>

<style>
	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}
	
	.animate-blob {
		animation: blob 15s infinite alternate ease-in-out;
		will-change: transform;
		transform: translateZ(0);
	}
	
	.animation-delay-2000 {
		animation-delay: 2s;
	}
	
	.animation-delay-4000 {
		animation-delay: 4s;
	}
</style>
