<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'
</script>

<nav class="flex justify-between min-h-10">
	<a href="/" class="text-2xl">
		<b>{config.title}</b>
	</a>
	<ul class="flex gap-10 mt-6">
		<li class=""><a href="/about">About</a></li>
		<li><a href="/contact">Contact</a></li>
		<li><a href="/rss.xml" target="_blank">RSS</a></li>
	</ul>
	<!-- <button class="bg-slate-700 text-fuchsia-50 px-4 mt-3 rounded-lg mx-1">Toggle</button> -->
	<Toggle />
</nav>
