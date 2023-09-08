<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { theme, toggleTheme } from '$lib/theme'
</script>

<button type="button" on:click={toggleTheme} class="overflow-hidden w-20" aria-label="Toggle Theme">
	{#if $theme === 'dark'}
		<span class="flex gap-1" in:fly={{ y: 10 }}>
			<Sun />
			Light
		</span>
	{:else}
		<span class="flex gap-1" in:fly={{ y: -10 }}>
			<Moon />
			Dark
		</span>
	{/if}
</button>
