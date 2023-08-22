<script>
	import ProjectCard from '../lib/components/project-card.svelte';

	export let data;
</script>

<svelte:head>
	<title>My Portfolio projects</title>
</svelte:head>

<div
	class="grid grid-cols-1 grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-1 w-full gap-10 h-full"
>
	<div class="p-10 bg-black bg-opacity-90 shadow self-start lg:col-span-2 card">
		<!-- <h1 class="font-bold text-center mb-20 text-5xl">Welcome to my Portfolio</h1> -->
		<!-- Authors -->
		{#each data?.authors as { name, intro, picture: { url } }}
			<div class="flex mb-40 items-end flex-col lg:flex-row">
				<div class="mr-6">
					<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
					<p class="text-xl mb-4">{intro}</p>
				</div>

				<img src={url} alt={name} class="mask mask-squircle h-48" />
			</div>
		{/each}
	</div>

	<!-- Projects -->
	{#if data?.projects && data?.projects?.length}
		<div
			class="grid gap-10 grid-cols-1 overflow-y-scroll snap-y self-start max-h-screen projects shadow-inner"
		>
			{#each data.projects as { name, slug, description, image }}
				<ProjectCard {name} {description} {slug} url={image[0].url} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.projects::-webkit-scrollbar {
		display: none;
	}
</style>
