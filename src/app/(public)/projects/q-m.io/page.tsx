import FigureComponent from '@pp/app/(public)/projects/components/figure-component';
import HeaderProject from '@pp/app/(public)/projects/components/header-project';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'q-m | Next.js Portfolio Website',
};

export default function PortfolioPage() {
	return (
		<div className="flex animate-raise flex-col">
			<HeaderProject
				role="Software Engineer"
				hrefProject="https://github.com/qminh011002/q-m.io.vn"
				title="q-m | Next.js Portfolio Website"
				description="Portfolio website built with Next.js inspired by Medium design"
				time="2025 - Now"
			/>
			<FigureComponent
				height={500}
				caption="Overview portfolio website"
				imageSrc="/projects/qm/q-m.png"
				altText="Tablet view of the dashboard home page. The application is
								designed to be responsive to all platforms and devices."
			/>
			<p
				className="mt-5 leading-7 text-primary"
				style={{ '--index': 2 } as React.CSSProperties}
			>
				This is a Next.js portfolio template designed to showcase
				projects and skills in a modern, responsive layout. It serves as
				a fully featured starting point for building a professional and
				visually appealing portfolio.
			</p>
			<FigureComponent
				height={500}
				caption="Web browser view"
				imageSrc="/projects/qm/qm-mac-1.png"
				altText="Tablet view of the dashboard home page. The application is
								designed to be responsive to all platforms and devices."
			/>
			<FigureComponent
				height={500}
				caption="Web browser view"
				imageSrc="/projects/qm/qm-mac-2.png"
				altText="Tablet view of the dashboard home page. The application is
								designed to be responsive to all platforms and devices."
			/>
			<FigureComponent
				height={500}
				caption="Web browser view"
				imageSrc="/projects/qm/qm-mac-3.png"
				altText="Tablet view of the dashboard home page. The application is
								designed to be responsive to all platforms and devices."
			/>
		</div>
	);
}
