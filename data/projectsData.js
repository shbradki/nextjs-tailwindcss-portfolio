import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'EdgeFinder',
		url: 'edgefinder',
		category: 'ML',
		img: '/images/NFL-ML-Sample-Results.png',
		ProjectHeader: {
			title: 'EdgeFinder',
			publishDate: 'In Development',
			
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'EdgeFinder',
				img: '/images/NFL-ML-FastAPI.png',
			},
			{
				id: uuidv4(),
				title: 'EdgeFinder',
				img: '/images/NFL-ML-Sample-Results.png',
			},
		],
		ProjectInfo: {
			CompanyInfo: [
				// {
				// 	id: uuidv4(),
				// 	title: 'Link',
				// 	details: 'https://x.com/NFL_Weather_Bot',
				// },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'The goal of this project is to create custom team and player metrics as well as environmental data in order to identify betting market inefficiencies using machine learning.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'FastAPI',
						'Meteostat',
						'nfl_data_py',
						'scikit-learn',
						'Tableau'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"This project has been one of the most complex and rewarding undertakings of my journey so far. From the beginning, it has pushed me to grow across several dimensions technically, analytically, and strategically. I had to go far beyond simply training a model. The process required me to deeply understand and implement everything from raw data wrangling to robust feature engineering and model evaluation, all while accounting for the unique challenges that come with predictive sports analytics."
				},
				{
					id: uuidv4(),
					details:
						"One of the most eye-opening lessons has been how to identify and eliminate data leakage. In sports analytics, this is particularly tricky. Many seemingly harmless features can actually carry information that would not be available prior to game day. I had to rigorously audit and redesign parts of my pipeline to ensure no future-dependent data or post-game statistics were influencing my predictions. As a result, I’ve developed a keen eye for spotting subtle sources of leakage and an appreciation for how small leaks can dramatically inflate performance metrics."
				},
				{
					id: uuidv4(),
					details:
						"In parallel, I built a custom comparator program that evaluates five powerful machine learning models side-by-side: Random Forest, Logistic Regression, XGBoost, Gradient Boosting, and AdaBoost. This tool tracks and compares each model’s performance across key metrics like accuracy, profitability, and a custom betting confidence score on a weekly and seasonal basis. It has been instrumental in helping me identify which models are most stable and generalizable over time, rather than just overfitting to recent trends."
				},
				{
					id: uuidv4(),
					details:
						"Despite the progress, I’m still exploring the best long-term direction for the project. There’s a lot of potential for expanding it into real-time predictions, integrating with APIs for automation, or even turning it into a public-facing app. But for now, my primary focus is on refining the model to be consistently accurate, profitable, and robust. It's a work in progress, and one that continues to teach me with every iteration.",
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	
	{
		id: 2,
		title: 'NFL Weather Bot',
		url: 'nfl-weather-bot',
		category: 'Twitter Bot',
		img: '/images/NFL-Weather-Bot-Profile.png',
		ProjectHeader: {
			title: 'NFL Weather Bot',
			publishDate: 'October 2024',
			
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'NFL Weather Bot',
				img: '/images/NFL-Weather-Bot-Profile.png',
			},
			{
				id: uuidv4(),
				title: 'NFL Weather Bot',
				img: '/images/Weather-Bot-Feed.png',
			},
		],
		ProjectInfo: {
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Link',
					details: 'https://x.com/NFL_Weather_Bot',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'AWS',
						'Twitter API',
						'Meteostat',
						'nfl_data_py'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'',
				},
				{
					id: uuidv4(),
					details:
						'',
				},
				{
					id: uuidv4(),
					details:
						'',
				},
				{
					id: uuidv4(),
					details:
						'',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	// {
	// 	id: 3,
	// 	title: 'Project Management UI',
	// 	url: 'project-management-ui',
	// 	category: 'UI/UX Design',
	// 	img: '/images/ui-project-1.jpg',
	// 	ProjectHeader: {
	// 		title: 'Project Management UI',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Project Management UI',
	// 			img: '/images/ui-project-1.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Project Management UI',
	// 			img: '/images/web-project-2.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Project Management UI',
	// 			img: '/images/mobile-project-2.jpg',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 		// SocialSharing: [
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Twitter',
	// 		// 		icon: <FiTwitter />,
	// 		// 		url: 'https://twitter.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Instagram',
	// 		// 		icon: <FiInstagram />,
	// 		// 		url: 'https://instagram.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Facebook',
	// 		// 		icon: <FiFacebook />,
	// 		// 		url: 'https://facebook.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'LinkedIn',
	// 		// 		icon: <FiLinkedin />,
	// 		// 		url: 'https://linkedin.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Youtube',
	// 		// 		icon: <FiYoutube />,
	// 		// 		url: 'https://www.youtube.com/c/StomanStudio',
	// 		// 	},
	// 		// ],
	// 	},
	// },
	
];
