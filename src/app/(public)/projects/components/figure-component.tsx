'use client';

import Image from 'next/image';

type FigureProps = {
	imageSrc: string;
	altText?: string;
	caption?: string;
	height: number;
	padding?: number;
	objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
};

export default function FigureComponent({
	imageSrc,
	altText = '',
	caption,
	height,
	padding = 2,
	objectFit = 'cover',
}: FigureProps) {
	const onZoom = () => {
		console.log('123');
	};
	return (
		<figure onClick={onZoom} className="animate-raise cursor-zoom-in">
			{/* Main container with original background and responsive sizing */}
			<div
				style={{ padding: `${padding * 4}px` }}
				className="relative mx-auto mt-6 w-full max-w-[90%] rounded-md border border-stone-200 bg-[#f9f9f9] dark:border-zinc-800 dark:bg-[#191919] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]"
			>
				{/* Image wrapper to control overflow */}
				<div className="relative overflow-hidden rounded-md">
					<Image
						height={height}
						style={{ height: 'auto', objectFit: objectFit }}
						width={500}
						src={imageSrc}
						alt={altText}
						quality={100}
						className="h-auto w-full object-contain shadow-none"
					/>
				</div>
			</div>

			{/* Caption if available */}
			{caption && (
				<figcaption className="mx-auto mt-3 px-4 text-center text-sm text-zinc-400 dark:text-zinc-500">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
