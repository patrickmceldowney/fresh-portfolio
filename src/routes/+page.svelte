<script>
	import { onMount } from 'svelte';
	import ProjectCard from '$lib/components/project-card.svelte';
	import { Gradient } from '$lib/utils/gradient.js';
	import ExperienceCard from '../lib/components/experience-card.svelte';

	export let data;

	onMount(() => {
		const gradient = new Gradient();
		gradient.initGradient('#gradient-canvas');
	});

	let canvas;

	function comparePriority(a, b) {
		if (!a.priority || !b.priority) return -1;
		const priorityOrder = { High: 1, Medium: 2, Low: 3 };
		return priorityOrder[a.priority] - priorityOrder[b.priority];
	}
</script>

<svelte:head>
	<title>My Portfolio projects</title>
</svelte:head>

<div class="flex flex-col lg:flex-row w-full gap-3">
	<div
		class="self-start flex-1 col-span-3 main-wrapper p-0 relative h-screen overflow-y-scroll custom-scroll bg-gradient-to-b from-10% from-[#091f3c] via-[#0d1420] to-[#053127]"
	>
		<div class="h-96 relative overflow-hidden">
			<div
				class="w-full absolute top-0 left-0 right-0 rounded-tr-lg overflow-hidden rounded-tl-lg z-[1]"
			>
				<canvas
					id="gradient-canvas"
					class="w-full h-full relative block -z-[1] overflow-hidden"
					bind:this={canvas}
					data-transition-in
					data-js-darken-top
				/>
			</div>
			{#each data?.authors as { name, intro, picture: { url } }}
				<div class="z-20 relative flex flex-col p-4 h-full justify-end">
					<h1 class="text-7xl font-bold tracking-wider">{name}</h1>
				</div>
			{/each}
		</div>

		<div class="w-full px-4 py-8 h-full">
			<h2 class="text-2xl font-bold">Projects</h2>
			<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8">
				{#each (data.projects || []).sort(comparePriority) as { name, slug, description, image }}
					<ProjectCard {name} {description} {slug} url={image[0].url} />
				{/each}
			</ul>
		</div>
	</div>

	{#if data?.experiences && data?.experiences?.length}
		<div
			class="flex gap-5 flex-col items-start h-fit max-h-screen justify-start snap-y projects main-wrapper shrink max-w-full lg:max-w-[400px] resize-y overflow-y-scroll custom-scroll"
		>
			{#each data.experiences as experience}
				<div class="w-full">
					<ExperienceCard {experience} />
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
		--gradient-color-1: #29142e;
		--gradient-color-2: #091f3c;
		--gradient-color-3: #053127;
		--gradient-color-4: #0d1420;
	}
</style>
