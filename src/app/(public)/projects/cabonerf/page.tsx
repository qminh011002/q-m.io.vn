import FigureComponent from '@pp/app/(public)/projects/components/figure-component';
import HeaderProject from '@pp/app/(public)/projects/components/header-project';
import Linksource from '@pp/components/link-source';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cabonerf - A Comprehensive Life Cycle Assessment System',
};
export default function CabonerfPage() {
	return (
		<div className="flex animate-raise flex-col">
			<HeaderProject
				hrefProject="https://github.com/FA24SE161-Cabonerf"
				role="Front-end Developer"
				title="Cabonerf - A Comprehensive Life Cycle Assessment System"
				description="A Life Cycle Assessment (LCA) app that enables
						businesses to track, analyze, and quantify their CO₂
						emissions throughout their entire production process. By
						providing detailed insights into environmental impact,
						the app helps organizations make data-driven decisions
						toward sustainability and carbon footprint reduction."
				time="2024 - 2025"
			/>
			<h3
				className="mt-16 text-2xl font-bold text-primary"
				style={{ '--index': 3 } as React.CSSProperties}
			>
				Why start this project?
			</h3>
			<p
				className="mt-2 leading-7 text-secondary"
				style={{ '--index': 2 } as React.CSSProperties}
			>
				In an era of increasing environmental regulations and carbon
				emission restrictions, businesses face growing pressure to
				measure and reduce their CO₂ footprint. Industries such as
				manufacturing, logistics, energy, and food production must
				comply with environmental standards like ISO 14040, GHG
				Protocol, and ESG (Environmental, Social, Governance) policies.
			</p>
			<FigureComponent
				height={500}
				caption="Industrial emissions releasing smoke into the atmosphere, highlighting the environmental impact of carbon pollution."
				imageSrc="/projects/cabonerf/co2.webp"
				altText="Tablet view of the dashboard home page. The application is
					designed to be responsive to all platforms and devices."
			/>

			<h3
				className="mt-16 text-2xl font-bold text-primary"
				style={{ '--index': 4 } as React.CSSProperties}
			>
				Standards & Methodologies Behind the App
			</h3>
			<p className="mt-2 leading-7 text-secondary">
				Our app is built on internationally recognized{' '}
				<Linksource
					content="Life Cycle Assessment (LCA)"
					href="https://www.sciencedirect.com/science/article/abs/pii/B9780123864543006278"
				/>{' '}
				standards, ensuring accurate and reliable environmental impact
				analysis. It follows guidelines from
				<Linksource
					content="ISO 14040"
					href={'https://www.iso.org/standard/37456.html'}
				/>{' '}
				&{' '}
				<Linksource
					content="ISO 14044"
					href={'https://www.iso.org/standard/38498.html'}
				/>
				, which defines principles and frameworks for assessing the
				environmental footprint of products and processes. Additionally,
				the app aligns with the{' '}
				<Linksource
					content="GHG Protocol"
					href="https://ghgprotocol.org/"
				/>{' '}
				, enabling businesses to track and manage their carbon emissions
				effectively. By integrating these standards, the platform
				provides businesses with a credible and data-driven approach to
				sustainability and emissions reduction.
			</p>
			<h3 className="mt-16 text-2xl font-semibold text-primary">
				How to Measure Life Cycle Assessment (LCA)?
			</h3>
			<p className="mt-2 leading-7 text-secondary">
				Life Cycle Assessment (LCA) follows a structured 4-step process
				to evaluate the environmental impact of a product or process.
				Below is a simple breakdown of each step:
			</p>
			<h4 className="mt-4 text-lg font-semibold text-primary">
				1. Goal & Scope Definition
			</h4>
			<ul className="mt-1 flex flex-col gap-2">
				<li className="text-secondary">
					- Define the purpose of the LCA (e.g., measuring CO₂
					emissions for a product).
				</li>
				<li className="text-secondary">
					- Set system boundaries (e.g., raw materials, manufacturing,
					distribution).
				</li>
				<li className="text-secondary">
					- Decide on the functional unit (e.g., 1 kg of product, 1
					unit of electricity).
				</li>
			</ul>
			<h4 className="mt-4 text-lg font-semibold text-primary">
				2. Life Cycle Inventory (LCI) Analysis
			</h4>
			<ul className="mt-1 flex flex-col gap-2">
				<li className="text-secondary">
					- Collect data on all inputs (materials, energy,
					transportation) and outputs (emissions, waste).
				</li>
				<li className="text-secondary">
					- Track data from cradle to grave (raw materials →
					production → usage → disposal).
				</li>
				<li className="text-secondary">
					- Use databases, industry reports, and direct measurements
					to gather data.
				</li>
			</ul>
			<h4 className="mt-4 text-lg font-semibold text-primary">
				3. Life Cycle Impact Assessment (LCIA)
			</h4>
			<ul className="mt-1 flex flex-col gap-2">
				<li className="text-secondary">
					- Convert raw data into environmental impacts (e.g., CO₂
					emissions, water usage, toxicity).
				</li>
				<li className="text-secondary">
					- Use impact categories like global warming potential,
					resource depletion, and pollution.
				</li>
				<li className="text-secondary">
					- Apply weighting methods to compare different environmental
					impacts.
				</li>
			</ul>
			<h4 className="mt-4 text-lg font-semibold text-primary">
				4. Interpretation & Improvement
			</h4>
			<ul className="mt-1 flex flex-col gap-2">
				<li className="text-secondary">
					- Identify the most polluting stages in the life cycle.
				</li>
				<li className="text-secondary">
					- Suggest alternatives (e.g., using renewable energy,
					optimizing transportation).
				</li>
				<li className="text-secondary">
					- Make data-driven decisions for sustainability & emissions
					reduction.
				</li>
			</ul>
			<FigureComponent
				padding={2}
				height={550}
				caption="Product lifecycle stages for environmental impact assessment"
				imageSrc="/projects/cabonerf/lca-guide.webp"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<h3 className="mt-16 text-2xl font-bold text-primary">
				Technology stack
			</h3>
			<p className="mt-2 leading-7 text-secondary">
				Our application is built using a modern and efficient tech stack
				designed for scalability and performance. The frontend is
				developed with{' '}
				<strong className="font-bold text-primary">ReactJS</strong> and{' '}
				<strong className="font-bold text-primary">TypeScript</strong>,
				providing a robust foundation for a seamless user experience. To
				optimize data fetching and state management, we integrate{' '}
				<strong className="font-bold text-primary">
					Tanstack Query
				</strong>
				, ensuring real-time updates and smooth interactions. For
				lifecycle visualization,{' '}
				<strong className="font-bold text-primary">React Flow</strong>{' '}
				allows for an intuitive and dynamic representation of complex
				data. On the backend, the application is powered by{' '}
				<strong className="font-bold text-primary">Java</strong>,
				delivering stability and efficiency, while{' '}
				<strong className="font-bold text-primary">PostgreSQL</strong>{' '}
				handles data storage, enabling complex queries and maintaining
				data integrity.
			</p>
			<div className="my-16">
				<ul className="mx-auto flex justify-center gap-4">
					<li>
						<div className="flex size-[100px] flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg md:h-[120px] md:w-[120px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="40"
								height="40"
								viewBox="0 0 80 80"
							>
								<path
									fill="#8bb7f0"
									d="M46.5,40c0,3.593-2.907,6.5-6.5,6.5s-6.5-2.907-6.5-6.5s2.907-6.5,6.5-6.5S46.5,36.407,46.5,40z"
								></path>
								<path
									fill="#4e7ab5"
									d="M40,47c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S43.859,47,40,47z M40,34c-3.309,0-6,2.691-6,6 s2.691,6,6,6s6-2.691,6-6S43.309,34,40,34z"
								></path>
								<g>
									<path
										fill="#8bb7f0"
										d="M24.474,75.503c-1.711,0-3.269-0.392-4.632-1.164c-2.28-1.293-3.856-3.521-4.686-6.62 c-0.965-3.607-0.85-8.398,0.332-13.878C5.956,50.562,0.5,45.531,0.5,40c0-5.532,5.455-10.562,14.987-13.84 c-1.182-5.481-1.298-10.272-0.333-13.879c0.83-3.1,2.406-5.328,4.685-6.62c1.362-0.772,2.921-1.164,4.632-1.164 c4.388,0,9.891,2.73,15.531,7.698c5.64-4.963,11.141-7.691,15.524-7.691c1.711,0,3.269,0.392,4.632,1.164 c2.277,1.291,3.854,3.515,4.684,6.611c0.966,3.606,0.85,8.398-0.333,13.88C74.043,29.437,79.5,34.468,79.5,40 s-5.457,10.563-14.991,13.842c1.182,5.481,1.298,10.272,0.332,13.878c-0.83,3.097-2.405,5.321-4.68,6.612 c-1.364,0.772-2.923,1.164-4.633,1.164c-4.386,0-9.889-2.728-15.527-7.689C34.361,72.774,28.859,75.503,24.474,75.503z M19.337,55.006c-0.991,4.717-1.102,8.747-0.316,11.679c0.542,2.026,1.481,3.431,2.794,4.175c0.753,0.427,1.648,0.644,2.659,0.644 c3.394,0,7.862-2.282,12.621-6.437c-2.385-2.402-4.713-5.121-6.928-8.091C26.336,56.56,22.696,55.898,19.337,55.006z M42.906,65.065c4.758,4.151,9.227,6.431,12.621,6.432c1.011,0,1.906-0.217,2.661-0.644c1.309-0.742,2.246-2.144,2.787-4.167 c0.786-2.934,0.676-6.963-0.315-11.679c-3.362,0.892-7.003,1.554-10.833,1.97C47.613,59.947,45.288,62.665,42.906,65.065z M35.566,57.393c1.452,1.776,2.938,3.433,4.434,4.94c1.492-1.506,2.979-3.163,4.43-4.94C42.939,57.464,41.454,57.5,40,57.5 C38.545,57.5,37.059,57.464,35.566,57.393z M32.349,53.179C34.844,53.392,37.417,53.5,40,53.5c2.585,0,5.155-0.108,7.646-0.32 c1.486-2.084,2.903-4.268,4.214-6.495c1.268-2.155,2.461-4.404,3.547-6.686c-1.083-2.276-2.275-4.524-3.546-6.684 c-1.308-2.222-2.725-4.406-4.215-6.495C45.157,26.608,42.587,26.5,40,26.5c-2.588,0-5.159,0.108-7.647,0.321 c-1.49,2.086-2.909,4.27-4.219,6.495c-1.27,2.159-2.462,4.407-3.546,6.686c1.082,2.274,2.274,4.522,3.545,6.684 C29.437,48.901,30.854,51.084,32.349,53.179z M57.491,44.779c-0.706,1.346-1.438,2.666-2.185,3.934 c-0.753,1.282-1.554,2.568-2.386,3.836c2.374-0.366,4.645-0.835,6.771-1.4C59.101,49.1,58.362,46.963,57.491,44.779z M20.304,51.148c2.127,0.564,4.397,1.034,6.768,1.4c-0.837-1.276-1.638-2.563-2.386-3.835c-0.745-1.267-1.478-2.585-2.183-3.931 C21.636,46.956,20.898,49.091,20.304,51.148z M59.816,40c1.528,3.391,2.773,6.743,3.708,9.977C70.926,47.373,75.5,43.574,75.5,40 s-4.574-7.373-11.976-9.977C62.591,33.257,61.345,36.609,59.816,40z M16.472,30.025C9.073,32.628,4.5,36.427,4.5,40 c0,3.574,4.573,7.373,11.974,9.976c0.934-3.235,2.179-6.587,3.705-9.974C18.652,36.614,17.407,33.262,16.472,30.025z M20.303,28.852c0.594,2.054,1.332,4.19,2.2,6.368c0.704-1.342,1.436-2.661,2.184-3.932c0.752-1.279,1.553-2.565,2.388-3.836 C24.701,27.817,22.431,28.287,20.303,28.852z M52.922,27.451c0.837,1.277,1.638,2.563,2.386,3.837 c0.746,1.267,1.479,2.586,2.185,3.932c0.869-2.177,1.607-4.313,2.201-6.369C57.564,28.286,55.294,27.816,52.922,27.451z M24.471,8.497c-1.011,0-1.905,0.216-2.657,0.644c-1.312,0.744-2.252,2.149-2.795,4.175c-0.785,2.935-0.675,6.964,0.317,11.679 c3.36-0.892,7.002-1.555,10.834-1.971c2.217-2.971,4.545-5.688,6.927-8.088C32.337,10.779,27.866,8.497,24.471,8.497z M49.828,23.023c3.83,0.416,7.471,1.078,10.833,1.97c0.992-4.716,1.103-8.746,0.316-11.68c-0.542-2.022-1.48-3.424-2.79-4.166 c-0.754-0.427-1.649-0.644-2.661-0.644c-3.393,0-7.86,2.281-12.619,6.433C45.287,17.335,47.613,20.053,49.828,23.023z M40,22.5 c1.454,0,2.939,0.036,4.431,0.107c-1.45-1.774-2.936-3.43-4.429-4.938c-1.497,1.51-2.982,3.166-4.432,4.938 C37.061,22.536,38.546,22.5,40,22.5z"
									></path>
									<path
										fill="#4e7ab5"
										d="M24.471,4.997c4.494,0,9.996,2.91,15.532,7.867c5.535-4.953,11.034-7.86,15.524-7.86 c1.623,0,3.099,0.37,4.386,1.099c2.156,1.222,3.652,3.343,4.446,6.306c1.077,3.917,0.851,8.74-0.434,14.08 C73.147,29.57,79,34.431,79,40s-5.853,10.43-15.076,13.512c1.341,5.773,1.566,10.726,0.434,14.079 c-0.794,2.962-2.289,5.084-4.443,6.306C58.626,74.627,57.455,75,55.833,75c-0.001,0-0.416,0-0.417,0 c-4.492,0-9.882-2.91-15.416-7.861c-5.535,4.956-11.035,7.864-15.527,7.864c-1.623,0-3.099-0.37-4.386-1.099 c-2.158-1.225-3.655-3.349-4.448-6.314c-1.19-3.717-0.95-8.603,0.434-14.079C6.852,50.429,1,45.569,1,40 c0-5.568,5.852-10.429,15.072-13.511C15.385,23.43,14.946,20.59,14.931,18c-0.012-2.046,0.267-3.949,0.707-5.59 c0.794-2.966,2.29-5.09,4.448-6.314C21.372,5.366,22.848,4.997,24.471,4.997 M18.958,25.614c3.477-0.955,7.338-1.677,11.483-2.117 c2.382-3.21,4.875-6.096,7.386-8.584c-4.872-4.346-9.616-6.917-13.356-6.917c-1.099,0-2.075,0.238-2.904,0.709 c-1.433,0.813-2.452,2.32-3.031,4.481C17.678,16.388,17.873,20.716,18.958,25.614 M61.039,25.613 c1.085-4.898,1.28-9.227,0.422-12.429c-0.578-2.157-1.597-3.661-3.027-4.472c-0.83-0.471-1.809-0.709-2.907-0.709 c-3.737,0-8.478,2.568-13.349,6.91c2.51,2.488,5,5.374,7.38,8.583C53.701,23.936,57.562,24.658,61.039,25.613 M34.477,23.166 c1.802-0.107,3.609-0.2,5.488-0.2c1.879,0,3.755,0.094,5.557,0.2c-1.808-2.279-3.664-4.361-5.521-6.204 C38.144,18.805,36.287,20.887,34.477,23.166 M40,54c2.761,0,5.404-0.121,7.918-0.342c1.519-2.117,2.988-4.365,4.372-6.719 c1.353-2.299,2.577-4.626,3.67-6.939c-1.093-2.313-2.317-4.639-3.669-6.937c-1.385-2.355-2.853-4.602-4.373-6.719 C45.405,26.121,42.762,26,40,26s-5.406,0.121-7.92,0.343c-1.521,2.117-2.991,4.365-4.376,6.719 c-1.352,2.299-2.576,4.626-3.669,6.939c1.093,2.313,2.316,4.639,3.668,6.937c1.385,2.354,2.854,4.602,4.374,6.719 C34.592,53.879,37.237,54,40,54 M57.546,36.413c1.125-2.709,2.056-5.369,2.766-7.913c-2.553-0.702-5.373-1.282-8.428-1.707 c1.028,1.527,2.029,3.11,2.992,4.748C55.83,33.16,56.717,34.788,57.546,36.413 M22.449,36.414c0.828-1.625,1.716-3.253,2.668-4.873 c0.964-1.638,1.966-3.22,2.995-4.747c-3.055,0.424-5.875,1.005-8.428,1.707C20.394,31.045,21.325,33.704,22.449,36.414 M63.188,50.622C71.264,47.886,76,43.866,76,40s-4.736-7.886-12.812-10.622c-0.953,3.405-2.269,6.983-3.92,10.621 C60.919,43.638,62.235,47.216,63.188,50.622 M16.81,50.621c0.952-3.404,2.267-6.982,3.918-10.619 c-1.651-3.638-2.967-7.217-3.919-10.622C8.734,32.116,4,36.135,4,40C4,43.866,8.735,47.885,16.81,50.621 M51.884,53.207 c3.055-0.424,5.875-1.004,8.428-1.707c-0.711-2.544-1.642-5.204-2.766-7.914c-0.829,1.625-1.717,3.253-2.67,4.873 C53.913,50.097,52.912,51.68,51.884,53.207 M28.109,53.206c-1.028-1.527-2.029-3.109-2.993-4.746 c-0.952-1.619-1.839-3.246-2.667-4.87c-1.124,2.708-2.054,5.367-2.764,7.91C22.237,52.201,25.056,52.781,28.109,53.206 M24.474,72.003c3.739,0,8.481-2.57,13.352-6.914c-2.513-2.489-5.005-5.376-7.388-8.587c-4.143-0.439-8.002-1.161-11.478-2.116 c-1.084,4.898-1.279,9.226-0.422,12.428c0.578,2.16,1.598,3.667,3.03,4.48C22.396,71.765,23.375,72.003,24.474,72.003 M55.527,71.997L55.527,71.997c1.099,0,2.076-0.238,2.907-0.709c1.43-0.811,2.447-2.315,3.024-4.473 c0.858-3.203,0.663-7.531-0.421-12.428c-3.477,0.955-7.337,1.677-11.481,2.116c-2.38,3.21-4.871,6.096-7.381,8.585 C47.046,69.428,51.788,71.996,55.527,71.997 M40,63.04c1.857-1.844,3.713-3.927,5.522-6.206c-1.801,0.107-3.559,0.333-5.439,0.333 c-1.881,0-3.807-0.226-5.609-0.333C36.284,59.114,38.142,61.197,40,63.04 M24.116,4.072c-1.799,0-3.085,0.338-4.523,1.153 c-2.399,1.361-4.055,3.691-4.921,6.926c-0.96,3.587-0.877,8.302,0.236,13.681C5.419,29.189,0,34.325,0,40 c0,5.676,5.42,10.811,14.909,14.168c-1.113,5.379-1.196,10.094-0.235,13.681c0.865,3.233,2.52,5.563,4.921,6.926 c1.44,0.816,3.17,1.163,4.968,1.163c4.487,0,9.753-2.535,15.438-7.466c5.684,4.926,11.039,7.524,15.525,7.525 c1.799,0,3.441-0.413,4.881-1.229c2.397-1.359,4.051-3.686,4.916-6.917c0.961-3.588,0.878-8.303-0.235-13.681 C74.579,50.812,80,45.676,80,40s-5.42-10.812-14.911-14.169c1.114-5.38,1.196-10.095,0.235-13.682 c-0.866-3.231-2.521-5.558-4.919-6.917c-1.439-0.815-3.081-1.229-4.879-1.229c-4.485,0-9.839,2.599-15.524,7.527 c-5.686-4.932-11.066-7.461-15.554-7.461L24.116,4.072z M19.72,24.377c-0.462-2.324-0.772-4.502-0.789-6.412 c-0.015-1.72,0.221-3.217,0.57-4.521c0.507-1.892,1.368-3.194,2.559-3.87c0.676-0.384,1.5-0.644,2.423-0.644 c3.181,0,7.367,2.178,11.883,6.034c-2.221,2.273-4.392,4.819-6.466,7.585C26.315,22.949,22.897,23.562,19.72,24.377L19.72,24.377z M43.638,14.966c4.515-3.853,8.711-5.963,11.888-5.963c0.924,0,1.737,0.195,2.414,0.579c1.189,0.674,2.049,1.973,2.555,3.861 c0.874,2.818,0.761,6.564-0.218,10.933c-3.177-0.814-6.594-1.428-10.178-1.826C48.026,19.785,45.857,17.239,43.638,14.966 L43.638,14.966z M36.673,22.06c1.096-1.3,2.209-2.53,3.328-3.678c1.119,1.148,2.231,2.378,3.326,3.678 C42.208,22.02,41.095,22,40,22S37.793,22.02,36.673,22.06L36.673,22.06z M32.625,27.3c2.405-0.199,4.883-0.341,7.375-0.341 c2.491,0,4.969,0.142,7.373,0.341c1.432,2.019,2.796,4.126,4.056,6.269c1.222,2.078,2.373,4.239,3.423,6.43 c-1.051,2.192-2.202,4.354-3.424,6.432c-1.261,2.144-2.624,4.25-4.056,6.269c-2.403,0.199-4.881,0.466-7.372,0.466 c-2.493,0-4.972-0.268-7.378-0.467c-1.433-2.018-2.797-4.125-4.058-6.269c-1.222-2.077-2.372-4.238-3.422-6.43 c1.05-2.192,2.201-4.354,3.423-6.432C29.827,31.425,31.192,29.318,32.625,27.3L32.625,27.3z M57.422,34.024 c-0.549-1.018-1.112-2.018-1.683-2.99c-0.57-0.969-1.167-1.942-1.785-2.909c1.774,0.302,3.485,0.663,5.114,1.08 C58.601,30.771,58.05,32.383,57.422,34.024L57.422,34.024z M20.928,29.205c1.629-0.417,3.34-0.778,5.114-1.08 c-0.619,0.967-1.216,1.94-1.786,2.908c-0.571,0.972-1.134,1.972-1.683,2.99C21.945,32.384,21.395,30.772,20.928,29.205 L20.928,29.205z M60.365,39.999c1.415-3.162,2.587-6.292,3.49-9.326C70.758,33.192,75,36.721,75,40s-4.242,6.808-11.145,9.327 C62.951,46.292,61.78,43.161,60.365,39.999L60.365,39.999z M16.142,49.326C9.241,46.807,5,43.278,5,40s4.241-6.807,11.141-9.326 c0.903,3.035,2.074,6.165,3.489,9.327C18.216,43.162,17.045,46.292,16.142,49.326L16.142,49.326z M53.953,51.876 c0.618-0.968,1.216-1.941,1.785-2.909c0.572-0.972,1.135-1.973,1.684-2.991c0.628,1.641,1.178,3.254,1.646,4.821 C57.438,51.212,55.727,51.574,53.953,51.876L53.953,51.876z M20.929,50.795c0.467-1.566,1.017-3.177,1.644-4.816 c0.548,1.017,1.111,2.017,1.682,2.988c0.569,0.968,1.166,1.94,1.785,2.908C24.267,51.572,22.557,51.211,20.929,50.795 L20.929,50.795z M24.474,71.003c-0.924,0-1.736-0.195-2.413-0.579c-1.19-0.676-2.051-1.977-2.557-3.869 c-0.831-2.845-0.737-6.592,0.218-10.933c3.176,0.814,6.592,1.428,10.175,1.826c2.075,2.766,4.246,5.313,6.468,7.588 C31.85,68.893,27.653,71.004,24.474,71.003L24.474,71.003L24.474,71.003z M50.098,57.45c3.584-0.399,7.001-1.012,10.178-1.826 c1.105,4.74,1.192,8.518,0.217,10.932c-0.505,1.889-1.364,3.188-2.552,3.861c-0.678,0.384-1.49,0.579-2.413,0.579v1l-0.001-1 c-3.18,0-7.377-2.11-11.891-5.961C45.856,62.762,48.025,60.216,50.098,57.45L50.098,57.45z M40,61.62 c-1.12-1.148-2.234-2.379-3.33-3.68C37.79,57.98,38.904,58,40,58c1.095,0,2.208-0.02,3.327-0.06 C42.232,59.241,41.119,60.472,40,61.62L40,61.62z"
									></path>
								</g>
							</svg>

							<span className="text-xs font-semibold text-white">
								React JS
							</span>
						</div>
					</li>
					<li>
						<div className="flex size-[100px] flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-xl md:h-[120px] md:w-[120px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="40"
								height="40"
								viewBox="0 0 48 48"
							>
								<linearGradient
									id="atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1"
									x1="6"
									x2="42"
									y1="24"
									y2="24"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0" stopColor="#0d61a9"></stop>
									<stop offset="1" stopColor="#16528c"></stop>
								</linearGradient>
								<path
									fill="url(#atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1)"
									d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"
								></path>
								<path
									d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z"
									opacity=".05"
								></path>
								<path
									d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z"
									opacity=".05"
								></path>
								<path
									d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z"
									opacity=".05"
								></path>
								<path
									fill="#fff"
									d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"
								></path>
								<polygon
									fill="#fff"
									points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"
								></polygon>
							</svg>
							<span className="text-xs font-semibold text-white">
								TypeScript
							</span>
						</div>
					</li>
					<li>
						<div className="flex size-[100px] flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg md:h-[120px] md:w-[120px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="40"
								height="40"
								viewBox="0 0 48 48"
							>
								<path
									fill="#8bc34a"
									d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"
								></path>
								<path
									fill="#fff"
									d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"
								></path>
							</svg>

							<span className="text-xs font-semibold text-white">
								Spring Boot
							</span>
						</div>
					</li>
					<li>
						<div className="flex size-[100px] flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg md:h-[120px] md:w-[120px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="40"
								height="40"
								viewBox="0 0 48 48"
							>
								<path
									fill="#fff"
									d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
								></path>
								<path
									fill="#0277bd"
									d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
								></path>
								<path
									fill="#0277bd"
									d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
								></path>
								<path
									fill="#0277bd"
									d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
								></path>
							</svg>

							<span className="text-xs font-semibold text-white">
								Postgres
							</span>
						</div>
					</li>
				</ul>
			</div>
			<h3 className="mt-16 text-2xl font-bold text-primary">
				Front-end Design
			</h3>
			<p className="mt-2 leading-7 text-secondary">
				Cabonerf is built using{' '}
				<strong className="font-bold text-primary">React Flow</strong> ,
				a powerful library designed for creating interactive,
				diagram-based user interfaces. By leveraging{' '}
				<strong className="font-bold text-primary">React Flow</strong>,
				the application provides an intuitive drag-and-drop experience,
				allowing users to effortlessly create, connect, and manage
				complex workflows or diagrams. This ensures a seamless and
				dynamic user interaction, making the visualization and
				modification of structured data more efficient. The integration
				of{' '}
				<strong className="font-bold text-primary">React Flow</strong>{' '}
				enhances the app’s flexibility, offering smooth zooming,
				panning, and real-time node manipulation, making it an ideal
				solution for users who need an intuitive and visually engaging
				way to handle process mapping and data flow management.
			</p>
			<FigureComponent
				padding={1}
				height={600}
				objectFit="contain"
				caption="Using ReactFlow for visualize"
				imageSrc="/projects/cabonerf/pic-2.png"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<h3 className="mt-16 text-2xl font-bold text-primary">
				How It Works ?
			</h3>
			<p className="mt-2 leading-7 text-secondary">
				User will follow these steps below for use our application:
			</p>
			<h4 className="mt-4 text-lg font-semibold text-primary">
				1. Login into system
			</h4>
			<FigureComponent
				padding={1}
				height={600}
				objectFit="contain"
				caption="Login Page"
				imageSrc="/projects/cabonerf/login.png"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<h4 className="mt-4 text-lg font-semibold text-primary">
				2. Create new project
			</h4>
			<p className="mt-2 leading-7 text-secondary">
				User will input essential information about their product and
				get ready for use our app.
			</p>
			<FigureComponent
				padding={1}
				height={600}
				objectFit="contain"
				caption="Dashboard Page"
				imageSrc="/projects/cabonerf/create-new.png"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<h4 className="mt-4 text-lg font-semibold text-primary">
				3. Define node or unit process
			</h4>
			<p className="mt-2 leading-7 text-secondary">
				In this step, users provide key details about their product,
				laying the foundation for seamless interaction with our app. By
				defining nodes or unit processes, users establish the core
				elements of their workflow, ensuring precise data flow and
				structured process visualization. This setup enables a more
				intuitive and efficient experience, allowing users to maximize
				the potential of our application right from the start.
			</p>
			<FigureComponent
				padding={1}
				height={600}
				objectFit="contain"
				caption=" "
				imageSrc="/projects/cabonerf/definednode.png"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<h4 className="mt-4 text-lg font-semibold text-primary">
				4. Access large data about environment impact substances
			</h4>
			<p className="mt-2 leading-7 text-secondary">
				Our app provides a vast amount of data on various substances and
				emission metrics, enabling users to access comprehensive
				environmental insights and make informed decisions.
			</p>
			<FigureComponent
				padding={1}
				height={600}
				objectFit="contain"
				caption="Data relate to substance about 20.000 unit."
				imageSrc="/projects/cabonerf/data-2.png"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<FigureComponent
				padding={1}
				height={600}
				objectFit="contain"
				caption="Activities's data access from multiple resources"
				imageSrc="/projects/cabonerf/data.png"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<h4 className="mt-4 text-lg font-semibold text-primary">
				5. Obtain Detailed Results by Providing Essential Data
			</h4>
			<p className="mt-2 leading-7 text-secondary">
				By entering the necessary data, users can generate detailed
				results tailored to their specific needs. Our system processes
				the provided information to deliver accurate insights, ensuring
				a comprehensive understanding of emissions, material properties,
				and environmental impact. This step allows users to make
				informed decisions based on precise and reliable data.
			</p>
			<FigureComponent
				padding={1}
				height={600}
				objectFit="contain"
				caption="User also change impact for get various result"
				imageSrc="/projects/cabonerf/pic-3.png"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<FigureComponent
				padding={1}
				height={600}
				objectFit="contain"
				caption="Also get specify unit process result"
				imageSrc="/projects/cabonerf/pic-4.png"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<FigureComponent
				padding={1}
				height={600}
				objectFit="contain"
				caption="Which unit process contribute into whole process"
				imageSrc="/projects/cabonerf/contribute.png"
				altText="Product lifecycle stages for environmental impact assessment"
			/>
			<h3 className="mt-16 text-2xl font-bold text-primary">
				Wrapping It Up
			</h3>
			<p className="mt-2 leading-7 text-secondary">
				Cabonerf is designed to provide an intuitive and efficient
				solution for visualizing, managing, and analyzing emissions and
				material data. By leveraging React Flow, our app offers a
				seamless drag-and-drop interface, allowing users to define and
				connect processes effortlessly. With a vast database of
				substances and emission metrics, users can input their data,
				structure workflows, and obtain precise analytical results.
				Whether for environmental assessments, sustainability planning,
				or industrial process optimization, Cabonerf empowers users with
				the insights they need to make data-driven decisions. This
				project embodies our commitment to efficiency, accuracy, and
				user-centric design, ensuring a powerful yet accessible tool for
				emissions and material data management.
			</p>
			<p className="mt-5 leading-7 text-secondary">
				For more, please access my GitHub
			</p>
		</div>
	);
}
