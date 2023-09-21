<script>
	import { slide } from 'svelte/transition';

	export let experience;

	let expanded = false;
</script>

<div class="rounded p-4 bg-black shadow shadow-[#091f3c]">
	<div class="flex items-center justify-between w-full">
		<div>
			<h2 class="text-xl font-bold">{experience?.jobTitle}</h2>
			<p class="font-bold text-base">{experience?.companyName}</p>
		</div>
		{#if experience.jobHighlights.html}
			<button
				on:click={() => (expanded = !expanded)}
				class="p-0 outline-none border-none"
				type="button"
			>
				<i class="fa-solid" class:fa-chevron-down={!expanded} class:fa-chevron-up={expanded} />
			</button>
		{/if}
	</div>
	{#if expanded}
		<div class="mt-2" transition:slide>
			<p>{@html experience.jobHighlights.html}</p>
		</div>
	{/if}
</div>
