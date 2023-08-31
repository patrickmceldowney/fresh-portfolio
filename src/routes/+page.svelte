<script>
	import { onMount } from 'svelte';
	import ProjectCard from '$lib/components/project-card.svelte';
	import { Gradient } from '$lib/utils/gradient.js';

	export let data;

	onMount(() => {
		const gradient = new Gradient();
		gradient.initGradient('#gradient-canvas');
	});

	let canvas;
</script>

<svelte:head>
	<title>My Portfolio projects</title>
</svelte:head>

<div class="flex flex-col lg:flex-row w-full gap-3 h-full">
	<div class="self-start col-span-3 main-wrapper min-h-[100%] relative">
		<div class="w-full h-full absolute top-0 left-0 right-0 rounded-lg overflow-hidden z-[1]">
			<canvas
				id="gradient-canvas"
				class="w-full h-full relative block -z-[1]"
				bind:this={canvas}
				data-transition-in
				data-js-darken-top
			/>
		</div>
		{#each data?.authors as { name, intro, picture: { url } }}
			<div class="z-10 relative">
				<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
				<p class="text-xl mb-4">{intro}</p>
			</div>
		{/each}
	</div>

	<!-- Projects -->
	{#if data?.projects && data?.projects?.length}
		<div
			class="flex gap-5 flex-col items-start lg:max-h-screen overflow-y-scroll justify-start snap-y projects main-wrapper shrink max-w-[400px]"
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

	#gradient-canvas {
		width: 100%;
		height: 100%;
		--gradient-color-1: #29142e;
		--gradient-color-2: #091f3c;
		--gradient-color-3: #053127;
		--gradient-color-4: #0d1420;
	}
</style>
