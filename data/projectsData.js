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
				'The goal of this project is to allow users to get their 10,000 steps in with things they would be interested in doing, anywhere in the world to avoid repetitive or boring walks.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'FastAPI (API backend)',
						'Railway (backend hosting)',
						'Fly.io (frontend hosting)',
						'Streamlit (Frontend UI)',
						'OpenAI API (interest parsing)',
						'Google API (geocoding and POIs)',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						`Stepscape was built as part of the Headstarter program, where we were challenged to come up with 
						and create a full-stack, public-facing project in just one week.`
				},
				{
					id: uuidv4(),
					details:
						`Living in NYC, I've always appreciated how walkable the city is. But even in a place like this, walks can 
						start to feel repetitive and it's not always easy to plan a walk with purpose. That's what inspired Stepscape.`
				},
				{
					id: uuidv4(),
					details:
						`Stepscape lets you enter a starting location: an address, a neighborhood, or just a point of interest. 
						Then you tell it whether you'd like to end up near where you started, and what you'd like to experience along the way. 
						Your interests can be typed in freely, there's no fixed format. 
						An LLM processes your input and the system figures out a route with stops tailored to your prompts, in the order you specify.`
				},
				{
					id: uuidv4(),
					details:
						`Behind the scenes, the app uses a FastAPI backend with a structured, multi-step workflow to interpret your interests, 
						match them to real-world locations, and generate a walking route. 
						It returns a Google Maps URL with personalized stops, all triggered via simple POST requests. 
						The experience works seamlessly on both web and mobile.`
				},
				{
					id: uuidv4(),
					details:
						`This was a deeply rewarding experience. I'd never built something this complex before, 
						involving a deployed backend and microservices. 
						I learned a ton about end-to-end software development and I'm incredibly proud of the final result. 
						Check it out, go for a walk, and tell me what you think!
`
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
		id: 4,
		title: 'AI Voice Assistant (Customer Service)',
		url: 'ai-voice-assistant',
		category: 'Full stack',
		img: '/images/AI-Voice-Assistant-Home.png',
		ProjectHeader: {
			title: 'AI Voice Assistant',
			publishDate: 'May 2025',
			
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'AI Voice Assistant',
				img: '/images/AI-Voice-Assistant-Home.png',
			},
			{
				id: uuidv4(),
				title: 'AI Voice Assistant',
				img: '/images/AI-Voice-Assistant-Demo-1.png',
			},
			{
				id: uuidv4(),
				title: 'AI Voice Assistant',
				img: '/images/AI-Voice-Assistant-Demo-2.png',
			},
		],
		ProjectInfo: {
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Link',
					details: 'https://ai-customer-service-agent-six.vercel.app/',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						"React (frontend UI)",
						"Vercel (frontend hosting)",
						"Firebase Functions (backend logic)",
						"Firestore (data storage and referencing)",
						"OpenAI API (natural language response generation)",
						"Deepgram (real-time audio transcription)",
						"Open Source VAD (voice activity detection and capture)",
						"Browser-native TTS (text-to-speech output)"
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						`
						The core challenge of building this AI voice assistant was bringing together several complex technologies, 
						each with their own quirks, into a seamless, human-like conversation experience inside a browser.
						`
				},
				{
					id: uuidv4(),
					details:
						`
						From the start, the idea was ambitious: allow users to "call" a virtual customer support agent, 
						speak naturally, and receive intelligent, voiced replies in real time as if it were a human being 
						they were speaking to. But achieving that required solving problems at every level of the stack.
						`
				},
				{
					id: uuidv4(),
					details:
						`
						First came audio capture. I'd never worked with voice activity detection (VAD) before, so identifying when a 
						user had finished speaking, without manual button presses, involved stitching together open-source 
						VAD components and testing how browsers handle microphone streams across devices. On top of that,
						it was a challenge to ensure the microphone didn't pick up the AI's responses, resulting in an endless 
						loop of the agent speaking to itself.
						`
				},
				{
					id: uuidv4(),
					details:
						`
						Then came speech-to-text (STT). I used Deepgram's API for its low-latency, streaming transcription. 
						But raw transcripts aren't enough for an intelligent system. An LLM has to be able to process the entire 
						conversation up to that point, generate a list of pending tasks, and execute them with accurate responses.
						Designing that transcript pipeline to support follow-ups, multiple requests, 
						and natural back-and-forth interactions was a key part of the system's intelligence.
						`
				},
				{
					id: uuidv4(),
					details:
						`
						Generating responses via ChatGPT-3.5 Turbo was familiar territory, but delivering those responses 
						as spoken audio was brand new. I used the browser's native text-to-speech (TTS) for speed and 
						simplicity, but coordinating TTS playback with the rest of the conversation state 
						required careful control, flow, and state management in React.
						`
				},
				{
					id: uuidv4(),
					details:
						`
						I decided to do all of this without a traditional backend, so I leaned on Firebase Functions for 
						on-demand logic, and Firestore for lightweight session memory, logging, and user-specific document 
						storage. This laid the groundwork for real workflows like document emailing or referencing 
						user files mid-conversation.
						`
				},
				{
					id: uuidv4(),
					details:
						`
						Throughout the project, the biggest challenge wasn't just integrating APIs, 
						it was designing a UX that felt conversational, responsive, and human despite the 
						technical complexity happening behind the scenes. Stitching audio, transcripts, logic, 
						and playback together into something fluid and helpful was the true engineering test 
						and incredibly rewarding to pull off.
						`	
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
