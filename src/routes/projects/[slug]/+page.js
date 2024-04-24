import { error } from '@sveltejs/kit';
import { projects } from '../../../lib/utils/data.js';

export async function load({ params }) {
	const { slug } = params;
	const projectsCopy = [...projects];
	const idx = projectsCopy.findIndex((p) => p.slug === slug);
	const project = projectsCopy.splice(idx, 1)[0];

	console.log(project.slug);
	if (!project) throw error(404);

	const randProjects = getRandomProjects(projectsCopy, 4);

	return {
		project,
		projects: randProjects
	};
}

function getRandomProjects(projects, size) {
	const randProjects = [];

	for (let i = 0; i < size; i++) {
		const randIndex = Math.floor(Math.random() * projects.length);
		const randItem = projects.splice(randIndex, 1)[0];
		randProjects.push(randItem);
	}
	return randProjects;
}
