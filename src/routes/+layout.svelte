<script lang="ts">
	import '../app.css'

	import Header from './header.svelte'
	import Footer from './footer.svelte'
	import { onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
