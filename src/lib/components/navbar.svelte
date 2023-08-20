<script>
	import ThemeSelect from './theme-select.svelte';
</script>

<div class="navbar mb-16 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10">
	<div class="flex-1 px-2 mx-2">
		<a href="/" class="text-lg font-bold">Portfolio</a>
	</div>

	<div class="dropdown dropdown-left lg:hidden">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div tabindex="0" class="m-1 btn">Links</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul
			tabindex="0"
			class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 dropdown-content"
		>
			<a href="/projects" class="btn btn-ghost btn-sm rounded-btn">Projects</a>
			<a href="/about" class="btn btn-ghost btn-sm rounded-btn">About</a>
		</ul>
	</div>

	<div class="flex-none hidden px-2 lg:flex">
		<div class="flex items-stretch">
			<a href="/projects" class="btn btn-ghost btn-sm rounded-btn"> Portfolio </a>
			<a href="/about" class="btn btn-ghost btn-sm rounded-btn">About</a>
			<div class="px-4">
				<ThemeSelect />
			</div>
		</div>
	</div>
</div>
