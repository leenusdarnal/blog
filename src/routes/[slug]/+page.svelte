<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="p-10">
	<hgroup>
		<h1 class="text-4xl mb-3 capitalize">{data.meta.title}</h1>
		<p class="text-lg">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="flex w-fit h-fit gap-3 my-3">
		{#each data.meta.categories as category}
			<span class="text-sm bg-slate-200 rounded-md py-0.5 px-0.5">&num;{category}</span>
		{/each}
	</div>
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
