<script>
	import ProjectCard from '../lib/components/project-card.svelte';

	export let data;
	console.log('data', data);
</script>

<div>
	{#if data?.projects && data?.projects?.length}
		{#each data.projects as { name, slug, description, image }}
			<ProjectCard {name} {description} {slug} url={image[0].url} />
		{/each}
	{/if}
</div>
