<script>
	export let url = '';
	export let name = '';
	export let slug = '';
	export let description = '';
</script>

<div
	class="glass card shadow hover:-translate-y-1 hover:shadow-xl col-span-2 h transition-all duration-300 overflow-hidden"
>
	<a href={`/projects/${slug}`}>
		<figure class="!items-start h-48">
			<img class="object-cover" src={url} alt={name} />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{name}</h2>
		</div>
	</a>
</div>
