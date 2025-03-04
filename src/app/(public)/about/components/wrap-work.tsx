'use client';

import { useState } from 'react';

import Work from '@pp/app/(public)/about/components/work';

export const dataItJobs: {
	id: number;
	imageUrl: string;
	role: string;
	title: string;
	startYear: number;
	endYear?: number;
	url: string;
	pos: number;
}[] = [
	{
		id: 1,
		imageUrl:
			'https://s3.ap-southeast-1.amazonaws.com/q-m.io/icon-logo/unicourse-logo.webp',
		endYear: 2025,
		role: 'Mobile Developer',
		startYear: 2024,
		title: 'Unicourse LLC',
		url: 'https://unicourse.vn',
		pos: 3,
	},
	{
		id: 2,
		imageUrl:
			'https://s3.ap-southeast-1.amazonaws.com/q-m.io/icon-logo/FPT_Software_Logo.png',
		endYear: 2023,
		role: 'Software Engineer',
		startYear: 2022,
		title: 'FPT Software',
		url: 'https://fptsoftware.com',
		pos: 2,
	},
	{
		id: 3,
		imageUrl:
			'https://s3.ap-southeast-1.amazonaws.com/q-m.io/icon-logo/fpt.png',
		endYear: 2025,
		role: 'Student',
		startYear: 2022,
		title: 'FPT University',
		url: 'https://viewdaihoc.fpt.edu.vn/fpt-ho-chi-minh/',
		pos: 1,
	},
	{
		id: 4,
		imageUrl: '/works/innorix.jpeg',
		role: 'Software Engineer',
		startYear: 2025,
		title: 'INNORIX Enterprise AI & File Transfer Solutions',
		url: 'https://innorix.com',
		pos: 4,
	},
];

export const dataNonItJobs: {
	id: number;
	imageUrl: string;
	role: string;
	title: string;
	startYear: number;
	endYear?: number;
	url: string;
	pos: number;
}[] = [
	{
		id: 200,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/3/3c/H%C3%A4agen-Dazs_Logo.svg',
		pos: 1,
		role: 'Barista',
		startYear: 2021,
		title: 'Häagen-Dazs Ice Cream Viet Nam',
		url: 'https://www.icecream.com/us/en/brands/haagen-dazs',
		endYear: 2022,
	},
];

export default function WrapWork() {
	const [itemHovered, setItemHovered] = useState<number | null>(null);

	const onHover = (value: number | null) => {
		setItemHovered(value);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-12">
			<div className="col-span-1 text-secondary md:col-span-3">
				Work & Experience
			</div>
			<div className="col-span-1 mt-2 flex flex-col gap-8 md:col-span-9 md:mt-0">
				<p className="text-primary">
					I have a strong foundation in web development and specialize
					in Next.js, React.js, TypeScript, and product design, with
					experience in SwiftUI — but{' '}
					<strong className="font-semibold">
						always eager to learn new technologies and expand my
						skills
					</strong>
					.
				</p>

				<ul className="flex flex-col gap-y-5">
					<p className="font-bold text-primary">IT Work Experience</p>
					{dataItJobs
						.sort((a, b) => b.pos - a.pos)
						.map((work) => (
							<li key={work.id}>
								<Work
									data={work}
									onHover={onHover}
									idSelected={itemHovered}
								/>
							</li>
						))}
				</ul>
				<ul className="flex flex-col gap-y-5">
					<p className="font-bold text-primary">
						Non-IT Work Experience
					</p>
					{dataNonItJobs
						.sort((a, b) => b.pos - a.pos)
						.map((work) => (
							<li key={work.id}>
								<Work
									data={work}
									onHover={onHover}
									idSelected={itemHovered}
								/>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
