import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import RelatedProjects from '../../components/projects/RelatedProjects';

function ProjectSingle(props) {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title={props.project.title} />

			{/* Header */}
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{props.project.ProjectHeader.title}
				</p>
				<div className="flex">
					<div className="flex items-center mr-10">
						<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.project.ProjectHeader.publishDate}
						</span>
					</div>
					{/* <div className="flex items-center">
						<FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.project.ProjectHeader.tags}
						</span>
					</div> */}
				</div>
			</div>

			{/* Gallery */}			
			<div
				className={`mt-12 ${
					props.project.ProjectImages.length <= 2
						? 'flex justify-center gap-6 flex-wrap'
						: 'grid grid-cols-1 sm:grid-cols-3 sm:gap-10'
				}`}
			>
				{props.project.ProjectImages.map((project) => (
					<div className="mb-10 sm:mb-0 w-full max-w-sm" key={project.id}>
						<Image
							src={project.img}
							alt={project.title}
							width={600}
							height={400}
							className="rounded-xl shadow-lg object-cover w-full h-auto"
						/>
					</div>
				))}
			</div>


			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project client details */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{props.project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{props.project.ProjectInfo.CompanyInfo.map(
								(info) => {
									return (
										<li
											className="font-general-regular text-ternary-dark dark:text-ternary-light"
											key={info.id}
										>
											<span>{info.title}: </span>
											<a
												href={info.details}
												target="_blank"
												rel="noopener noreferrer"
												className="underline text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 cursor-pointer transition-colors duration-200"
												>
												{info.details}
											</a>

										</li>
									);
								}
							)}
						</ul>
					</div>

					{/* Single project objectives */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.project.ProjectInfo.Technologies[0].title}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{props.project.ProjectInfo.Technologies[0].techs.join(
								', '
							)}
						</p>
					</div>

					
				</div>

				{/*  Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{props.project.ProjectInfo.ProjectDetailsHeading}
					</p>
					{props.project.ProjectInfo.ProjectDetails.map((details) => {
						return (
							<p
								key={details.id}
								className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
							>
								{details.details}
							</p>
						);
					})}
				</div>
			</div>

	
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const { id } = query;
	return {
		props: {
			project: projectsData.filter(
				(project) => project.id === parseInt(id)
			)[0],
		},
	};
}

export default ProjectSingle;
