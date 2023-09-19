<script>
	export let url = '';
	export let name = '';
	export let slug = '';
	export let description = '';
</script>

<div
	class="snap-center rounded w-48 p-4 glass shadow hover:shadow-xl transition-all duration-300 overflow-hidden hover:animate-pulse"
>
	<a href={`/projects/${slug}`} class="flex flex-col items-center gap-4">
		<img class="object-cover w-40 h-40 rounded" src={url} alt={name} />
		<h2 class="card-title">{name}</h2>
	</a>
</div>
