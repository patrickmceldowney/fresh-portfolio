import { gql } from 'graphql-request';
import { client } from '$lib/utils/graphql-client';

export async function load() {
	try {
		const query = gql`
			query GetProjects {
				projects {
					name
					slug
					description
					demo
					sourceCode
					image {
						url
					}
				}
			}
		`;

		const { projects } = await client.request(query);

		return {
			projects
		};
	} catch (e) {
		console.error('Error', error);
	}
}
