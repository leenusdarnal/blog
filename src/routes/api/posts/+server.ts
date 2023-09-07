import { json, type RequestHandler } from '@sveltejs/kit'
import type { Meta, Post } from '$lib/types'

const getPosts = async () => {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*md', { eager: true })
	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		// console.log(slug)
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Meta
			const post = { ...metadata, slug } satisfies Post
			// console.log(post)
			post.published && posts.push(post)
		}
	}
	posts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	return posts
}

export const GET: RequestHandler = async () => {
	const posts = await getPosts()
	return json(posts)
}
