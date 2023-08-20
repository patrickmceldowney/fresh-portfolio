import { client } from '$lib/utils/graphql-client';
import { projectsQuery } from '$lib/utils/graphql-queries';

export async function load() {
	try {
		const { projects } = await client.request(projectsQuery);

		return { projects };
	} catch (e) {
		return {};
	}
}
