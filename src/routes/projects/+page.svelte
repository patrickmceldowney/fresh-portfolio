<script>
	import ProjectCard from '$lib/components/project-card.svelte';

	export let data;
</script>

<svelte:head>
	<title>My Projects</title>
</svelte:head>

<h1 class="font-bold mb-20 text-center text-5xl">Recent Projects</h1>

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
	{#each data?.projects as { name, slug, description, image }, index}
		<ProjectCard {name} {description} {slug} url={image[0].url} />
	{/each}
</div>
