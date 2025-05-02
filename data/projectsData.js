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
		img: '/images/NFL-ML-FastAPI.png',
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
						"One of the most eye-opening lessons has been how to identify and eliminate data leakage. In sports analytics, this is particularly tricky. Many seemingly harmless features can actually carry information that would not be available prior to game day. I had to rigorously audit and redesign parts of my pipeline to ensure no future-dependent data or post-game statistics were influencing my predictions. As a result, I've developed a keen eye for spotting subtle sources of leakage and an appreciation for how small leaks can dramatically inflate performance metrics."
				},
				{
					id: uuidv4(),
					details:
						"In parallel, I built a custom comparator program that evaluates five powerful machine learning models side-by-side: Random Forest, Logistic Regression, XGBoost, Gradient Boosting, and AdaBoost. This tool tracks and compares each model's performance across key metrics like accuracy, profitability, and a custom betting confidence score on a weekly and seasonal basis. It has been instrumental in helping me identify which models are most stable and generalizable over time, rather than just overfitting to recent trends."
				},
				{
					id: uuidv4(),
					details:
						"Despite the progress, I'm still exploring the best long-term direction for the project. There's a lot of potential for expanding it into real-time predictions, integrating with APIs for automation, or even turning it into a public-facing app. But for now, my primary focus is on refining the model to be consistently accurate, profitable, and robust. It's a work in progress, and one that continues to teach me with every iteration.",
				},
			],

			// SocialSharingHeading: 'Share This',
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
						"This project began out of genuine frustration. I was eagerly anticipating a New York Jets vs. Denver Broncos game that had been hyped as one of the most exciting matchups of the day, only to sit through a rain-soaked mess that ended with zero touchdowns and what felt like one of the most boring games ever televised. That experience made me realize just how much weather can affect not only the outcome of a game, but also the viewing experience. So, I built a weather bot. ",
				},
				{
					id: uuidv4(),
					details:
						"The bot automatically pulls weather forecasts for every upcoming NFL game each week, focusing on metrics like temperature, wind, and precipitation. I designed a Python-based pipeline that scrapes matchup schedules, maps them to game times and locations, and queries a weather API to get forecast data, which is then posted via a Twitter bot using AWS Lambda. I had to learn how to handle deployment in the cloud using cron expressions and Dockerized dependencies for the Python 3.12 ARM runtime, accounting for compatibility issues with packages like pandas and numpy. While it started as a fun way to avoid another disappointing Sunday, the project became a valuable lesson in automation, cloud architecture, and integrating multiple APIs in a clean, hands-off system.",
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

			// SocialSharingHeading: 'Share This',
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
		id: 3,
		title: 'Stepscape',
		url: 'stepscape',
		category: 'Full stack',
		img: '/images/Stepscape-Home.png',
		ProjectHeader: {
			title: 'Stepscape',
			publishDate: 'Apr 2025',
			
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Stepscape',
				img: '/images/Stepscape-Home.png',
			},
			{
				id: uuidv4(),
				title: 'Stepscape',
				img: '/images/Stepscape-Map-Example.png',
			},
			{
				id: uuidv4(),
				title: 'Stepscape',
				img: '/images/Stepscape-Demo-Gif.gif',
			},
		],
		ProjectInfo: {
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Link',
					details: 'https://stepscape.app',
				},
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
						'Fetch.ai',
						'UAgents',
						'Fly.io',
						'Streamlit',
						'OpenAI API',
						'Google API'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						"This project was part of the Headstarter program where we were tasked with created a full-stack, public facing project with a one week deadline. I live in NYC and as incredible of a walking city it is, it can sometimes be repetetive and hard to have an intenioned walk."
				},
				{
					id: uuidv4(),
					details:
						"And thus: Stepscape was born. You simply enter your starting point which can be an address, neighborhood, or any location, you select whether or not you want to have your final stop be near your starting point, and you enter what you would like to do on your walk.  The interests can be in any format you want and an LLM goes over the input and determines your stops in the order you entered."
				},
				{
					id: uuidv4(),
					details:
						"Using an agentic workflow via UAgents and Fetch.ai, the system determines a location based on your interests, accumulates a list of the stops you will make, and returns a Google Maps URL to the user. It works on mobile and on the web."
				},
				{
					id: uuidv4(),
					details:
						"This was a super great experience. It was both challenging, fun and rewarding. I had never built such a complex system involving a deployed backend and multiple microservices so I gained a ton of experience in all key aspects of software development, delivering a final product I'm incredibly proud of. Check it out and go for a walk!"
				},
				
			],

			// SocialSharingHeading: 'Share This',
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
];
