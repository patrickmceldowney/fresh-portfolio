<script>
	import { marked } from 'marked';
	import ProjectCard from '$lib/components/project-card.svelte';

	export let data;

	$: project = data.project;
</script>

<svelte:head>
	<title>My Portfolio | {project?.name}</title>
</svelte:head>

{#key project}
	<div class="flex-col md:flex-row flex gap-5 w-full custom-scroll overflow-y-scroll main-wrapper">
		<div class="w-full max-w-md lg:max-w-3xl rounded-lg">
			<img
				src={project?.image}
				alt={project?.title}
				class="w-full h-auto rounded-lg max-h-[400px] object-cover"
			/>
		</div>
		<div class="flex flex-col gap-3">
			<h1 class="text-4xl font-semibold mb-5">
				{project?.name}
				<span class="text-lg">
					({project?.completedDate ? `completed on ${project?.completedDate}` : 'in development'})
				</span>
			</h1>

			<div class="flex justify-between">
				<div>
					{#if project?.tags}
						{#each project.tags as tag}
							<span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">
								{tag}
							</span>
						{/each}
					{/if}
				</div>
			</div>

			<div class="prose flex prose-a:text-primary hover:prose-a:text-primary-focus">
				{#if project?.demo}
					<a href={project.demo} class="mr-5">Demo</a>
				{/if}
				{#if project?.sourceCode}
					<a href={project.sourceCode}>Source Code</a>
				{/if}
			</div>

			<article
				class="prose prose-zinc text-xl text-gray-300 prose-a:text-gray-300 prose-ul:text-gray-300 prose-strong:text-gray-300"
			>
				{@html marked(project?.description)}
			</article>
		</div>
	</div>
	<div class="mt-5">
		<h2 class="text-2xl">More Projects</h2>
		<ul class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 py-8">
			{#each data.projects || [] as { name, slug, description, image }}
				<ProjectCard {name} {description} {slug} url={image} />
			{/each}
		</ul>
	</div>
{/key}
