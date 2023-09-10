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
		<h1 class="mb-3 text-4xl capitalize">{data.meta.title}</h1>
		<p class="text-lg">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="text-muted my-3 flex h-fit w-fit gap-3">
		{#each data.meta.categories as category}
			<span class="text-muted bg-muted-foreground rounded-full px-0.5 py-0.5 text-sm"
				>&num;{category}</span
			>
		{/each}
	</div>
	<div class="prose prose-slate dark:prose-invert">
		<svelte:component this={data.content} />
	</div>
</article>
