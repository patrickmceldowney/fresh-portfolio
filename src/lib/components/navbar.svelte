<script>
	const links = [
		{
			url: '/',
			icon: 'fa-solid fa-house',
			target: ''
		},
		{
			url: '#projects',
			icon: 'fa-solid fa-folder-open',
			target: ''
		},
		{
			url: 'https://www.linkedin.com/in/patrick-mceldowney-291750a8/',
			icon: 'fa-brands fa-linkedin',
			target: '_blank'
		},
		{
			url: 'https://github.com/patrickmceldowney',
			icon: 'fa-brands fa-github-alt',
			target: '_blank'
		}
	];
</script>

<div class="text-white right-0 hidden lg:flex lg:flex-col gap-2 items-center min-w-[64px]">
	<div class="main-wrapper flex lg:flex-col items-center gap-5 w-full">
		<a href={links[0].url} class="text-xl hover:text-gray-400 transition duration-300">
			<i class={links[0].icon} />
		</a>
	</div>

	<div class="flex lg:flex-col items-center gap-5 w-full main-wrapper">
		{#each links.slice(1) as link}
			<a
				href={link.url}
				class="text-xl hover:text-gray-400 transition duration-300"
				target={link.target}
			>
				<i class={link.icon} />
			</a>
		{/each}
	</div>
</div>

<div
	class="p-4 bg-black fixed bottom-0 right-0 left-0 flex items-center gap-5 w-full lg:hidden z-20 justify-evenly shadow-white shadow-lg"
>
	{#each links as link}
		<a
			href={link.url}
			class="text-xl hover:text-gray-400 transition duration-300"
			target={link.target}
		>
			<i class={link.icon} />
		</a>
	{/each}
</div>
