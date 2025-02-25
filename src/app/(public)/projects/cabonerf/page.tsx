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
				<ul className="mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
					<li>
						<div className="flex size-20 flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg sm:size-24 md:size-28 lg:size-32">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 80 80"
							>
								<path
									fill="#8bb7f0"
									d="M46.5,40c0,3.593-2.907,6.5-6.5,6.5s-6.5-2.907-6.5-6.5s2.907-6.5,6.5-6.5S46.5,36.407,46.5,40z"
								></path>
							</svg>
							<span className="text-xs font-semibold text-white">
								React JS
							</span>
						</div>
					</li>

					<li>
						<div className="flex size-20 flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg sm:size-24 md:size-28 lg:size-32">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 48 48"
							>
								<path
									fill="#0d61a9"
									d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8C42,6.895,41.105,6,40,6z"
								></path>
							</svg>
							<span className="text-xs font-semibold text-white">
								TypeScript
							</span>
						</div>
					</li>

					<li>
						<div className="flex size-20 flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg sm:size-24 md:size-28 lg:size-32">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 48 48"
							>
								<path
									fill="#8bc34a"
									d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20C44,23.877,43.984,23.758,43.982,23.635z"
								></path>
							</svg>
							<span className="text-xs font-semibold text-white">
								Spring Boot
							</span>
						</div>
					</li>

					<li>
						<div className="flex size-20 flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg sm:size-24 md:size-28 lg:size-32">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 48 48"
							>
								<path
									fill="#fff"
									d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
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
