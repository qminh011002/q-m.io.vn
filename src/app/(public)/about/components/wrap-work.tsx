'use client';

import { useState } from 'react';

import Work from '@pp/app/(public)/about/components/work';

export const data: {
	id: number;
	imageUrl: string;
	role: string;
	title: string;
	startYear: number;
	endYear: number;
	url: string;
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
	},
	{
		id: 2,
		imageUrl:
			'https://s3.ap-southeast-1.amazonaws.com/q-m.io/icon-logo/FPT_Software_Logo.png',
		endYear: 2023,
		role: 'Software Engineer - Front End',
		startYear: 2022,
		title: 'FPT Software',
		url: 'https://fptsoftware.com',
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

				<ul className="flex flex-col gap-y-8">
					{data.map((work) => (
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
