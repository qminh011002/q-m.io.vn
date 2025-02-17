'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	data: {
		id: number;
		imageUrl: string;
		role: string;
		title: string;
		startYear: number;
		endYear: number;
		url: string;
	};
	onHover: (id: number | null) => void;
	idSelected: number | null;
}

export default function Work({ data, onHover, idSelected }: Props) {
	const onMouseEnter = () => {
		onHover(data.id);
	};

	const onMouseLeave = () => {
		onHover(null);
	};

	return (
		<Link
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			target="_blank"
			href={data.url}
			className={clsx(
				`flex items-center justify-between transition-opacity duration-300`,
				{
					'opacity-30': idSelected && data.id !== idSelected,
				},
			)}
		>
			{/* Logo & Title */}
			<div className="flex items-center justify-between gap-6">
				<div
					style={{
						position: 'relative',
						width: 35,
						height: 35,
					}}
				>
					<Image
						alt="Mountains"
						src={data.imageUrl}
						fill
						sizes="30"
						style={{
							objectFit: 'contain',
						}}
					/>
				</div>
				<div className="flex flex-col justify-between">
					<h3 className="text-primary">{data.role}</h3>
					<h4 className="text-secondary">{data.title}</h4>
				</div>
			</div>
			<div className="flex items-center justify-between text-secondary">
				{data.startYear} - {data.endYear}
			</div>
		</Link>
	);
}
