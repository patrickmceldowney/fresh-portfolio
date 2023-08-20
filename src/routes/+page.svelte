<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';

	export let data;
	console.log('data', data);
</script>

<div>
	<h1>Recent Projects by Me</h1>
	{#if data?.projects && data?.projects?.length}
		<div>
			{#each data.projects as { name, slug, description, image }}
				<ProjectCard {name} {slug} {description} url={image[0].url} />
			{/each}
		</div>
	{/if}
</div>
