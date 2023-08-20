import { client } from '$lib/utils/graphql-client';
import { authorQuery, projectsQuery } from '$lib/utils/graphql-queries';

export async function load() {
	try {
		const [authorRes, projectsRes] = await Promise.all([
			client.request(authorQuery),
			client.request(projectsQuery)
		]);
		const { authors } = authorRes;
		const { projects } = projectsRes;

		return {
			projects,
			authors
		};
	} catch (e) {
		console.error('Error', error);
	}
}
