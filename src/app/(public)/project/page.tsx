import ProjectList from './components/project-list';

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
						className="text-zin-600 animate-raise max-w-lg break-words text-secondary"
					>
						5 projects so far. Stay tuned for more!
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
