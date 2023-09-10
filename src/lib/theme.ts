import { browser } from '$app/environment'
import { writable } from 'svelte/store'

type Theme = 'light' | 'dark'

const userTheme = browser && localStorage.getItem('theme')

export const theme = writable(userTheme ?? 'light')

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark'
		if (newTheme === 'dark') {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
		return newTheme
	})
}

// export function setTheme(newTheme: Theme) {
// 	theme.set(newTheme)
// }
