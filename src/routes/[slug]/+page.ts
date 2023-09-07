import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type { Meta } from '$lib/types'

export const load: PageLoad = async ({ params }) => {
	/* @vite-ignore */
	try {
		const post = await import(`../../posts/${params.slug}.md`)
		return {
			content: post.default,
			meta: post.metadata as Meta
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}
