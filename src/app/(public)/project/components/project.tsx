'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	project: {
		id: number;
		title: string;
		date: string;
		href: string;
		imageUrl: string;
	};
	onHover: (value: number | null) => void;
	itemSelected: number | null;
}

export default function Project({ project, onHover, itemSelected }: Props) {
	const onMouseEnter = () => {
		onHover(project.id);
	};

	const onMouseLeave = () => {
		onHover(null);
	};

	return (
		<Link
			href=""
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={clsx('block py-3 transition-opacity duration-300', {
				'opacity-20': itemSelected && itemSelected !== project.id,
			})}
		>
			<div className="flex items-center justify-between">
				<div className="flex flex-col md:flex-row">
					<p className="shrink-0 text-secondary md:w-32">
						{project.date}
					</p>
					<h3 className="font-medium text-primary">
						{project.title}
					</h3>
				</div>
				{/* Image */}
				<div className="relative h-[90px] w-[90px] overflow-hidden rounded-md md:hidden">
					<Image
						className="absolute object-cover"
						src={project.imageUrl}
						alt={project.title}
						fill
						sizes="(max-width: 768px) 90px"
					/>
				</div>
			</div>
		</Link>
	);
}
