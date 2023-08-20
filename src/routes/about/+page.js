import { client } from '$lib/utils/graphql-client';
import { authorQuery } from '$lib/utils/graphql-queries';
export async function load() {
	try {
		const { authors } = await client.request(authorQuery);

		return {
			authors
		};
	} catch (e) {
		return {};
	}
}
