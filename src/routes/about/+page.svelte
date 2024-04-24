<script>
	import { marked } from 'marked';
	import { author } from '$lib/utils/data';

	const { name, intro } = author;
</script>

<svelte:head>
	<title>My Portfolio | About Me</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">About Me</h1>

<div class="flex mb-40 items-end">
	<div class="mr-6">
		<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
		<p class="text-xl mb-4">{intro}</p>
	</div>

	<!-- <img src={url} alt={name} class="mask mask-squircle h-48" /> -->
</div>

<article div class="prose prose-lg">
	{@html marked(intro)}
</article>
