import { client } from '$lib/utils/graphql-client';
import { projectQuery } from '$lib/utils/graphql-queries.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const { slug } = params;
		const variables = { slug };
		const { project } = await client.request(projectQuery, variables);

		if (!project) throw error(404);

		return {
			project
		};
	} catch (e) {
		return {};
	}
}
