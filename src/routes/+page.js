import { projects, author, experience } from '../lib/utils/data';

export async function load() {
	return {
		projects,
		author,
		experience
	};
}
