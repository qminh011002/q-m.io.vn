import FigureComponent from '@pp/app/(public)/projects/components/figure-component';
import HeaderProject from '@pp/app/(public)/projects/components/header-project';
import Linksource from '@pp/components/link-source';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Asialeap – Landing Page for a Singapore-Based Company',
};

export default function AsiaLeapPage() {
	return (
		<div className="animate-raise">
			<HeaderProject
				hrefProject="https://github.com/qminh011002/asia-leap-co"
				role="Front-end"
				title="Asialeap – Landing Page for a Singapore-Based Company"
				description="Asialeap is a sleek and responsive landing page designed to enhance the digital presence of a Singapore-based company. Built for clarity, performance, and engagement, it effectively showcases the company’s vision, services, and value propositions while ensuring a seamless user experience."
				time="2024 - 2025"
			/>
			<h3
				className="mt-16 text-2xl font-bold text-primary"
				style={{ '--index': 3 } as React.CSSProperties}
			>
				About this project
			</h3>
			<p className="mt-5 leading-7 text-secondary">
				<Linksource
					content="asia-leap.com"
					href="https://www.asia-leap.com"
				/>{' '}
				is a freelance project I developed for a Singapore-based
				company, focusing on creating a modern, responsive, and
				high-performance landing page. This project showcases my
				expertise in web design and development, ensuring an engaging
				user experience while effectively communicating the company’s
				vision and services.
			</p>
			<h3
				className="mt-16 text-2xl font-bold text-primary"
				style={{ '--index': 3 } as React.CSSProperties}
			>
				Technologies in use
			</h3>
			<div className="my-10">
				<ul className="mx-auto flex flex-wrap justify-center gap-4">
					<li>
						<div className="flex size-[100px] flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg md:h-[120px] md:w-[120px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="50"
								height="50"
								viewBox="0 0 48 48"
							>
								<linearGradient
									id="SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1"
									x1="18.208"
									x2="34.159"
									y1="2.413"
									y2="46.236"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0" stopColor="#f09701"></stop>
									<stop offset="1" stopColor="#e36001"></stop>
								</linearGradient>
								<path
									fill="url(#SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1)"
									d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
								></path>
								<path
									fill="#f09601"
									d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
								></path>
								<path
									fill="#fff"
									d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z"
								></path>
								<path
									fill="#d6e0e9"
									d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
								></path>
								<path
									d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z"
									opacity=".05"
								></path>
								<path
									d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z"
									opacity=".07"
								></path>
							</svg>

							<span className="text-xs font-semibold text-white">
								HTML
							</span>
						</div>
					</li>
					<li>
						<div className="flex size-[100px] flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg md:h-[120px] md:w-[120px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="50"
								height="50"
								viewBox="0 0 48 48"
							>
								<path
									fill="#0277BD"
									d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
								></path>
								<path
									fill="#039BE5"
									d="M24 8L24 39.9 35.2 36.7 37.7 8z"
								></path>
								<path
									fill="#FFF"
									d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
								></path>
								<path
									fill="#EEE"
									d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
								></path>
							</svg>

							<span className="text-xs font-semibold text-white">
								CSS
							</span>
						</div>
					</li>
					<li>
						<div className="flex size-[100px] flex-col items-center justify-center gap-2 rounded-xl bg-[#262626] shadow-lg md:h-[120px] md:w-[120px]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="50"
								height="50"
								viewBox="0 0 48 48"
							>
								<path
									fill="#ffd600"
									d="M6,42V6h36v36H6z"
								></path>
								<path
									fill="#000001"
									d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
								></path>
							</svg>

							<span className="text-xs font-semibold text-white">
								JavaScript
							</span>
						</div>
					</li>
				</ul>
			</div>

			<FigureComponent
				height={400}
				caption="Browser view"
				imageSrc="/projects/asialeap/asia-leap1.png"
				altText="Tablet view of the dashboard home page. The application is
                                designed to be responsive to all platforms and devices."
			/>

			<FigureComponent
				height={400}
				caption="Browser view"
				imageSrc="/projects/asialeap/asia-leap2.png"
				altText="Tablet view of the dashboard home page. The application is
                                designed to be responsive to all platforms and devices."
			/>
			<FigureComponent
				height={400}
				caption="Mobile view"
				imageSrc="/projects/asialeap/asia-leap3.png"
				altText="Tablet view of the dashboard home page. The application is
                            designed to be responsive to all platforms and devices."
			/>

			<p className="mt-5 leading-7 text-secondary">
				For more, please access my GitHub
			</p>
		</div>
	);
}
