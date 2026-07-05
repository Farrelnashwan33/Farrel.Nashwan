<script lang="ts">
	let {
		title = 'Akhmad Farrel Nashwan - Software Engineer',
		description = 'Portfolio of Akhmad Farrel Nashwan, a Full Stack Developer specializing in Svelte, Flutter, Laravel, and modern web technologies.',
		url = 'https://farrelnashwan.com',
		image = '/og-image.png'
	} = $props();

	let schemaData = $derived({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Akhmad Farrel Nashwan',
		jobTitle: 'Software Engineer',
		url: url,
		sameAs: ['https://github.com/Farrelnashwan33', 'https://linkedin.com/in/farrelnashwan']
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />

	<!-- JSON-LD -->
	{@html `<script type="application/ld+json">${JSON.stringify(schemaData)}</script>`}
</svelte:head>
