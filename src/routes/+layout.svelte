<script>
	import '../app.postcss';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="flex flex-col lg:flex-row gap-3 main-wrapper p-2 bg-black">
	<Navbar />
	<main class="max-h-screen flex-1">
		<slot />
	</main>
</div>
