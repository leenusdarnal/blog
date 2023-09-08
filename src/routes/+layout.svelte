<script lang="ts">
	import '../app.css'

	import Header from './header.svelte'
	import Footer from './footer.svelte'
	import PageTransition from './transition.svelte'

	export let data
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>
