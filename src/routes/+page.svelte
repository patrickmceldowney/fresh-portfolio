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

	function formatDateTime(date) {
		let newDate = new Date(date);
		console.log(newDate);
		return `${newDate.getFullYear()}/${newDate.getMonth()}/${newDate.getDate()}`;
	}
</script>

<svelte:head>
	<title>My Portfolio projects</title>
</svelte:head>

<div class="flex flex-col lg:flex-row gap-3">
	<div class="flex flex-col flex-1 gap-3">
		<div class="self-start main-wrapper p-0 relative w-full">
			<div class="h-72 lg:h-96 relative overflow-hidden">
				<div class="h-full absolute top-0 left-0 right-0 rounded-lg overflow-hidden z-[1]">
					<canvas
						id="gradient-canvas"
						class="w-full h-full relative block -z-[1]"
						bind:this={canvas}
						data-transition-in
						data-js-darken-top
					/>
				</div>
				{#each data?.authors as { name, intro, picture: { url } }}
					<div class="z-20 relative flex flex-col p-4 h-full justify-end">
						<h1 class="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-wider">{name}</h1>
					</div>
				{/each}
			</div>
		</div>

		<div
			id="projects"
			class=" px-4 py-8 main-wrapper max-h-[300px] lg:max-h-full overflow-y-scroll custom-scroll bg-gradient-to-b from-10% from-[#3a3aff] to-dark"
		>
			<h2 class="text-2xl font-medium tracking-wider">Projects</h2>
			<ul class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 py-8">
				{#each (data.projects || []).sort(comparePriority) as { name, slug, description, image }}
					<ProjectCard {name} {description} {slug} url={image[0].url} />
				{/each}
			</ul>
		</div>
	</div>

	{#if data?.experiences && data?.experiences?.length}
		<div
			id="experience"
			class="flex lg:sticky top-2 gap-5 flex-col items-start w-full h-fit justify-start main-wrapper md:max-w-[250px] xl:max-w-[400px] resize-y"
		>
			<h2 class="text-2xl font-medium tracking-wider">Experience</h2>
			<!-- {#each data.experiences as experience}
				<div class="w-full">
					<ExperienceCard {experience} />
				</div>
			{/each} -->
			<div class="flow-root">
				<ul class="-mb-8">
					{#each data.experiences as experience, i}
						<li>
							<div class="relative pb-8">
								{#if i != data.experiences.length - 1}
									<span
										class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
										aria-hidden="true"
									/>
								{/if}

								<div class="relative flex space-x-3">
									<div>
										<span
											class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-dark"
										>
											<i
												class={`${
													experience.activeJob ? 'fa-solid ' : 'fa-regular'
												} text-xl fa-circle-check`}
											/>
										</span>
									</div>
									<div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
										<div>
											<p class="text-sm">
												{experience?.jobTitle} at
												<span class="font-medium text-[#3a3aff]">{experience.companyName}</span>
											</p>
										</div>
										<div class="whitespace-nowrap text-right text-sm">
											<time datetime={formatDateTime(experience.startDate)}>
												{formatDateTime(experience.startDate)}
											</time>
											<!-- end date -->
											<!-- {#if experience.jobActive}
												<time datetime="2020-09-20">{new Date(experience.endDate).getDate()}</time>
											{/if} -->
										</div>
									</div>
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</div>

<style>
	.projects::-webkit-scrollbar {
		display: none;
	}

	#gradient-canvas {
		--gradient-color-1: #6ec3f4;
		--gradient-color-2: #3a3aff;
		--gradient-color-3: #ff61ab;
		--gradient-color-4: #e63946;
	}
</style>
