import { Metadata } from 'next';
import ProjectList from './components/project-list';

export const metadata: Metadata = {
	title: 'Projects | qminh',
};

export default function ProjectPage() {
	return (
		<section>
			<div className="flex flex-col gap-y-16 md:gap-y-24">
				<div>
					<h1 className="animate-raise text-3xl font-bold tracking-tight text-primary">
						Project
					</h1>

					<p
						style={{ '--index': 1 } as React.CSSProperties}
						className="text-zin-600 max-w-lg animate-raise break-words text-secondary"
					>
						6 projects so far. Stay tuned for more!
					</p>
				</div>
				<div
					className="animate-raise"
					style={{ '--index': 2 } as React.CSSProperties}
				>
					<ProjectList />
				</div>
			</div>
		</section>
	);
}
