import data from '$lib/data/links.json';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	if (data) {
		return {
			body: {
				links: data
			}
		};
	}
}
