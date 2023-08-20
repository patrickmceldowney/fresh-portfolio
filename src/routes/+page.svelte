<script>
	import ProjectCard from '../lib/components/project-card.svelte';

	export let data;
	console.log('data', data);
</script>

<svelte:head>
	<title>My Portfolio projects</title>
</svelte:head>

<div>
	<h1 class="font-bold text-center mb-20 text-5xl">Welcome to my Portfolio</h1>
	<!-- Authors -->
	{#each data?.authors as { name, intro, picture: { url } }}
		<div class="flex mb-40 items-end">
			<div class="mr-6">
				<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
				<p class="text-xl mb-4">{intro}</p>
			</div>

			<img src={url} alt={name} class="mask mask-squircle h-48" />
		</div>
	{/each}

	<!-- Projects -->
	{#if data?.projects && data?.projects?.length}
		<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
			{#each data.projects as { name, slug, description, image }}
				<ProjectCard {name} {description} {slug} url={image[0].url} />
			{/each}
		</div>
	{/if}
</div>
