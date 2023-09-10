<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'
</script>

<nav class="min-h-10 flex justify-between">
	<a href="/" class="text-2xl">
		<b>{config.title}</b>
	</a>
	<ul class="mt-6 flex gap-10">
		<li class=""><a href="/about">About</a></li>
		<li><a href="/contact">Contact</a></li>
		<li><a href="/rss.xml" target="_blank">RSS</a></li>
	</ul>
	<Toggle />
</nav>
