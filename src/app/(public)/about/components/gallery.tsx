'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';
import localFont from 'next/font/local';

const ticketingFont = localFont({
	src: '../../../Ticketing.otf',
	display: 'swap',
});

type PhotoProps = {
	src: string;
	meta?: ReactNode;
	alt: string;
	title: string;
	width: number;
	height: number;
	fileName: string;
	rotate: number;
	left: number;
	index: number;
	flipDirection?: 'left' | 'right';
	children?: ReactNode;
};

function Photo({
	src,
	alt,
	width,
	title,
	height,
	rotate,
	fileName,
	left,
	index,
	flipDirection,
	meta,
	children,
}: PhotoProps) {
	// const fileName =
	// 	filename ||
	// 	(typeof src !== 'string' &&
	// 		`${src.src.split('/').at(-1)?.split('.')[0]}.jpg`);
	const shared = 'absolute h-full w-full rounded-xl overflow-hidden';
	return (
		<motion.div
			className={`absolute mx-auto cursor-grab hover:before:absolute hover:before:-left-7 hover:before:-top-8 hover:before:block hover:before:h-[300px] hover:before:w-[calc(100%+55px)]`}
			style={{
				rotate: `${rotate}deg`,
				left,
				width,
				height,
				perspective: 1000,
			}}
			initial={{
				width,
				height,
				rotate: (rotate || 0) - 20,
				y: 200 + index * 20,
				x:
					index === 1
						? -60
						: index === 2
							? -30
							: index === 3
								? 30
								: 60,
				opacity: 0,
			}}
			transition={{
				default: {
					type: 'spring',
					bounce: 0.2,
					duration:
						index === 1
							? 0.8
							: index === 2
								? 0.85
								: index === 3
									? 0.9
									: 1,
					delay: index * 0.15,
				},
				opacity: {
					duration: 0.7,
					ease: [0.23, 0.64, 0.13, 0.99],
					delay: index * 0.15,
				},
				scale: { duration: 0.12 },
			}}
			animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
			drag
			whileTap={{ scale: 1.1, cursor: 'grabbing' }}
			whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
			whileHover="flipped"
		>
			<motion.div
				className="relative h-full w-full rounded-xl shadow-md will-change-transform"
				style={{ transformStyle: 'preserve-3d' }}
				transition={{ type: 'spring', duration: 0.4 }}
				variants={{
					flipped: {
						scale: 1.1,
						rotateY: flipDirection === 'right' ? -180 : 180,
						rotateX: 5,
					},
				}}
			>
				<div
					className={shared}
					style={{ backfaceVisibility: 'hidden' }}
				>
					<Image
						src={src}
						alt={alt}
						width={width}
						height={height}
						className="pointer-events-none absolute inset-0 h-full w-full rounded-xl bg-neutral-400 object-cover object-bottom"
						priority
					/>
					{children}
				</div>
				<div
					className={clsx(
						shared,
						'flex items-center overflow-hidden rounded-xl bg-[#FFFAF2]',
					)}
					style={{
						backfaceVisibility: 'hidden',
						transform: 'rotateY(180deg)',
					}}
				>
					<span className="absolute h-[500px] w-[500px] rotate-[-20deg] bg-[url('/photopaper.png')] bg-[length:280px] bg-repeat" />
					<div className="z-[1] px-6">
						<div
							className={clsx(
								'flex flex-col gap-1 uppercase',
								ticketingFont.className,
							)}
						>
							<p className="text-secondary">{title}</p>
							{meta && (
								<p className="mt-4 text-sm text-secondary">
									{meta}
								</p>
							)}
							<p className="text-secondary">{fileName}</p>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default function Gallery() {
	return (
		<>
			<section className="relative flex h-[268px] gap-4">
				<div>
					<Photo
						title="Hanoi, my beloved city."
						src="/abouts/hanoi1.jpg"
						meta="2023-07-18"
						alt="Hanoisunset"
						width={324}
						height={239}
						rotate={-6}
						left={-56}
						fileName="hanoi-sunset.jpg"
						index={1}
					/>
				</div>
				<div>
					<Photo
						title="A sudden moment, Hanoi caught my eye."
						src="/abouts/hanoi2.jpg"
						meta="2024-10-20"
						alt="Hanoimoment"
						width={230}
						height={250}
						rotate={6.3}
						fileName="hanoi-moment.jpg"
						left={160}
						index={2}
						flipDirection="left"
					/>
				</div>
				<div>
					<Photo
						title="Night flight."
						src="/abouts/airplane.jpg"
						meta="2023-05-20"
						alt="landingatnight"
						width={280}
						fileName="landing-at-night.jpg"
						height={270}
						rotate={-5.4}
						left={350}
						index={3}
					/>
				</div>
				<div>
					<Photo
						title="My favorite pic."
						src="/abouts/me&mom.jpg"
						meta="2020-09-12"
						alt="meandmom"
						width={220}
						height={260}
						fileName="me-and-mom.jpg"
						rotate={7.6}
						left={550}
						index={4}
						flipDirection="left"
					/>
				</div>
			</section>
		</>
	);
}
