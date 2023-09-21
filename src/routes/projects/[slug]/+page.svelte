<script>
	import { marked } from 'marked';
	export let data;
	const project = data?.project;
</script>

<svelte:head>
	<title>My Portfolio | {project?.name}</title>
</svelte:head>

<div class="flex flex-col gap-5 w-full custom-scroll overflow-y-scroll h-screen main-wrapper">
	<div class="w-full max-w-md lg:max-w-3xl rounded-lg self-center">
		<img src={project?.image[0].url} alt={project?.title} class="w-full h-auto rounded-lg" />
	</div>

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

	<article class="prose prose-xl">
		{@html marked(project?.description)}
	</article>
</div>
