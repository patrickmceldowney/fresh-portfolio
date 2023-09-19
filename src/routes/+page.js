import { client } from '$lib/utils/graphql-client';
import { authorQuery, projectsQuery, experienceQuery } from '$lib/utils/graphql-queries';

export async function load() {
	try {
		const [authorRes, projectsRes, experienceRes] = await Promise.all([
			client.request(authorQuery),
			client.request(projectsQuery),
			client.request(experienceQuery)
		]);
		const { authors } = authorRes;
		const { projects } = projectsRes;
		const { experiences } = experienceRes;

		return {
			projects,
			authors,
			experiences
		};
	} catch (e) {
		console.error('Error', e);
	}
}
