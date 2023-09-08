<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="flex items-center justify-center pt-[20%]">
	<h1 class="text-5xl text-center">
		<span class="text-red-900">
			{$page.status}:
		</span>
		{$page.error?.message}
	</h1>
</div>
