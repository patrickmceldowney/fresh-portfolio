<script>
	import ProjectCard from '../lib/components/project-card.svelte';

	export let data;
</script>

<svelte:head>
	<title>My Portfolio projects</title>
</svelte:head>

<div class="flex flex-col lg:flex-row w-full gap-3 h-full">
	<div class="self-start col-span-3 main-wrapper">
		{#each data?.authors as { name, intro, picture: { url } }}
			<div class="flex flex-col lg:flex-row gap-6">
				<img src={url} alt={name} class="mask mask-squircle h-48" />

				<div class="mr-6">
					<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
					<p class="text-xl mb-4">{intro}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Projects -->
	{#if data?.projects && data?.projects?.length}
		<div
			class="flex gap-5 flex-col items-start max-h-screen overflow-y-scroll justify-start snap-y projects main-wrapper shrink max-w-[400px]"
		>
			{#each data.projects as { name, slug, description, image }}
				<div>
					<ProjectCard {name} {description} {slug} url={image[0].url} />
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.projects::-webkit-scrollbar {
		display: none;
	}
</style>
