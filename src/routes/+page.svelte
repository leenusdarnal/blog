<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="mx-5 mt-10">
	<ul class="grid gap-8">
		{#each data.posts as post}
			<li class="border-b last:border-b-0">
				<a class="text-4xl capitalize" href={post.slug}>{post.title}</a>
				<p class=" text-muted-foreground">{formatDate(post.date)}</p>
				<p class="mt-3">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
