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
			{/* Container chính */}
			<div
				style={{ padding: `${padding * 4}px` }}
				className="relative left-1/2 mt-10 h-fit max-w-[700px] -translate-x-1/2 transform rounded-md border border-stone-200 bg-[#f9f9f9] dark:border-zinc-800 dark:bg-[#191919] md:min-w-[800px] md:rounded-lg"
			>
				{/* Wrapper của hình ảnh để kiểm soát overflow */}
				<div className="relative overflow-hidden rounded-md">
					<Image
						height={height}
						style={{ height: height, objectFit: objectFit }}
						width={500}
						src={imageSrc}
						alt={altText}
						quality={100}
						className="w-full shadow-none"
					/>
				</div>
			</div>

			{/* Caption nếu có */}
			{caption && (
				<figcaption className="mx-auto mt-4 max-w-96 text-center text-sm text-zinc-400 dark:text-zinc-500">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
