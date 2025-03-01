'use client';

import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
	data: {
		title: string;
		svg: React.ReactNode;
		url: string;
		id: number;
	};
	onHover: (value: number | null) => void;
	itemHovered: number | null;
}

export default function Connect({ data, onHover, itemHovered }: Props) {
	const onMouseEnter = () => {
		onHover(data.id);
	};

	const onMouseLeave = () => {
		onHover(null);
	};

	return (
		<Link
			href={data.url}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			target="_blank"
			className={clsx(
				`flex items-center justify-between rounded-lg bg-zinc-50 p-4 text-primary transition-opacity duration-300 will-change-transform dark:bg-zinc-900`,
				{
					'opacity-20': itemHovered && data.id !== itemHovered,
				},
			)}
		>
			<div className="flex items-center gap-3">
				{data.svg}
				<span className="text-sm text-primary">{data.title}</span>
			</div>
			<ArrowUpRight size={20} strokeWidth={1.5} color="currentColor" />
		</Link>
	);
}
