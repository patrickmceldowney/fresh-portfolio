export const projects = [
	{
		name: 'Maze Solver',
		slug: 'maze-solver',
		description:
			'An investigative project to highlight different graph traversal and pathfinding algorithms.',
		tags: ['Python'],
		sourceCode: 'https://github.com/patrickmceldowney/maze-solver',
		priority: 'High',
		image: '/projects/combo400_solved.png',
		tools: ['Daedalus']
	},
	{
		name: 'CDLLife Mobile App',
		slug: 'cdllife-mobile-app',
		description:
			'A mobile application for android and ios. The app is targeting towards the trucking industry and its main features include a post feed, navigation with trucking routes, messaging, job applications, and more.',
		tags: ['TypeScript', 'HTML', 'CSS'],
		url: 'https://cdllife.com/trucking/drivers/app',
		priority: 'High',
		image: '/projects/cdllife_mobile_app.png',
		tools: [
			'Angular',
			'Ionic',
			'Cordova',
			'Mapbox',
			'Amazon Rekognition',
			'Android Studio',
			'XCode'
		]
	},
	{
		name: '8-Bit Adventure',
		slug: '8-bit-adventure',
		description: 'An 8-bit zelda style game made with PyGame and Tilemap.',
		tags: ['Python'],
		sourceCode: 'https://github.com/patrickmceldowney/8bit-cub',
		priority: 'High',
		image: '/projects/8bit_cub.png',
		tools: ['PyGame']
	},
	{
		name: 'CDLLife Graph API',
		slug: 'cdllife-graph-api',
		description: "A graph API built for CDLLife that is roughly based on Facebook's Graph API.",
		tags: ['JavaScript'],
		priority: 'High',
		image: '/projects/cdllife_graph_api.png',
		tools: ['MongoDB']
	},
	{
		name: 'CDLConnect',
		slug: 'cdlconnect',
		description: 'A landing page for the CDLConnect product suite.',
		tags: ['TypeScript', 'CSS'],
		url: 'https://cdlconnect.io/',
		priority: 'High',
		image: '/projects/cdlconnect.png',
		tools: ['SvelteKit']
	},
	{
		name: 'Clarity',
		slug: 'clarity',
		description:
			'An attribution tool for recruiters to see how and where they can increase their revenue.',
		tags: ['CSS', 'Python', 'TypeScript'],
		url: 'https://cdlclarity.io/login',
		priority: 'High',
		image: '/projects/clarity.png',
		tools: ['Tailwind', 'BigQuery', 'MongoDB', 'SvelteKit']
	},
	{
		name: 'CDLLife Jobs',
		slug: 'cdllife-jobs',
		description: 'A job finder site for trucking jobs.',
		tags: ['JavaScript', 'HTML', 'CSS'],
		url: 'https://jobs.cdllife.com',
		priority: 'Medium',
		image: '/projects/jobs_cdllife.png',
		tools: ['MongoDb', 'Svelte', 'Web Components']
	},
	{
		name: 'Varco Pruden',
		slug: 'varco-pruden',
		description: 'A marketing website for Varco Pruden construction.',
		tags: ['JavaScript', 'PHP', 'CSS', 'HTML'],
		url: 'https://varcopruden.com',
		priority: 'Low',
		image: '/projects/vp.png',
		tools: ['Wordpress', 'Laravel', 'WPEngine']
	},
	{
		name: 'The Roasterie',
		slug: 'the-roasterie',
		description: 'An ecommerce site for a local coffee company, The Roasterie.',
		tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
		url: 'https://theroasterie.com',
		priority: 'Low',
		image: '/projects/roasterie.png',
		tools: ['Wordpress', 'Linode', 'Laravel']
	},
	{
		name: 'iResQ',
		slug: 'iresq',
		description: 'An ecommerce site for electronic device repairs.',
		tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'YAML'],
		url: 'https://iresq.com',
		priority: 'Low',
		image: '/projects/iresq.png',
		tools: ['Larevel', 'Wordpress', 'Kinsta']
	},
	{
		name: 'BlueScope Construction',
		slug: 'bluescope-construction',
		description: 'A marketing website for BlueScope Construction.',
		tags: ['PHP', 'JavaScript', 'CSS', 'HTML'],
		url: 'https://bluescopeconstruction.com',
		priority: 'Low',
		image: '/projects/bsc.png',
		tools: ['Wordpress', 'WPEngine']
	}
];

export const author = {
	name: 'Patrick McEldowney',
	intro:
		"Hello 👋  I'm a full stack software engineer based in Kansas City, Missouri. From shaping user-friendly interfaces to architecting powerful back-end systems, I'm here to showcase how I blend creativity with code to craft meaningful solutions. ",
	slug: 'patrick-mceldowney'
};

export const experience = [
	{
		jobTitle: 'Senior Software Engineer Technical Manager',
		companyName: 'CDLLife',
		description:
			'🌟 Spearheaded the end-to-end development and continuous enhancement of novel features within our proprietary lead generation services.🤝 urlnstrated effective leadership by overseeing task allocation, conducting code reviews, and performing comprehensive performance evaluations for a high-performing engineering team.🧠 Focused on fostering a collaborative, innovative, and continuous learning environment to drive team success.🔄 Played a pivotal role in the creation, upkeep, and optimization of our internal graph API, contributing to improved data handling and analytics.',
		activeJob: true,
		startDate: '2021-02-01',
		endDate: null
	},
	{
		jobTitle: 'Senior Web Developer',
		companyName: 'MAKE Digital Group',
		description:
			'👨‍💼 Managed a development team throughout the entire lifecycle of new website and web app projects, ensuring timely delivery and high-quality results.📚 Stayed at the forefront of industry trends by immersing myself in the latest developments, best practices, and emerging technologies.🔒 Maintained a vigilant watch over server performance and security, skillfully configuring NGINX and Apache web servers, and conducting regular audits and security assessments to safeguard data integrity and privacy.',
		activeJob: false,
		startDate: '2019-08-05',
		endDate: '2021-02-01'
	},
	{
		jobTitle: 'App Developer',
		companyName: 'Ad Astra Information Systems',
		description:
			'🌟 Spearheaded the end-to-end development and continuous enhancement of novel features within our proprietary lead generation services.🤝 urlnstrated effective leadership by overseeing task allocation, conducting code reviews, and performing comprehensive performance evaluations for a high-performing engineering team.🧠 Focused on fostering a collaborative, innovative, and continuous learning environment to drive team success.🔄 Played a pivotal role in the creation, upkeep, and optimization of our internal graph API, contributing to improved data handling and analytics.',
		activeJob: false,
		startDate: '2018-12-01',
		endDate: '2019-08-01'
	}
];
