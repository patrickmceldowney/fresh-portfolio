<script>
	import '../app.postcss';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="flex flex-col lg:flex-row gap-3 p-2">
	<Navbar />
	<main class="flex-1 pb-16 lg:pb-0">
		<slot />
	</main>
</div>
