<script lang="ts">
	import '../app.css'

	import Header from './header.svelte'
	import Footer from './footer.svelte'
</script>

<div class="flex flex-col h-screen justify-between">
	<Header />
	<main class=" mb-auto h-10">
		<slot />
	</main>
	<Footer />
</div>
