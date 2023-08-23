<script>
	import '../app.postcss';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="grid gap-2 main-wrapper p-2 bg-black">
	<Navbar />
	<main class="max-h-screen">
		<slot />
	</main>
</div>

<style>
	.main-wrapper {
		grid-template-columns: auto 1fr;
		grid-template-rows: auto;
	}
</style>
