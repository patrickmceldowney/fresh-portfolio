<script>
	import '../app.postcss';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar />
<main class="container mx-auto py-16 px-4 mb-20 relative">
	<slot />
</main>
