<script>
	import '../app.postcss';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar />
<main class="container max-w-3xl mx-auto px-4 mb-20 relative">
	<slot />
</main>
