import { Metadata } from 'next';
import Link from 'next/link';
import { JSX } from 'react';

export const metadata: Metadata = {
	title: '404 | qminh',
	description: 'Uh oh! This page does not exist',
};

const Custom404 = (): JSX.Element => (
	<div className="flex flex-col gap-2">
		<h1 className="text-3xl font-bold tracking-tight text-primary">404</h1>
		<p className="max-w-sm text-secondary">
			Uh oh! This page does not exists, maybe you clicked an old link or
			misspelled. Please try again…
		</p>
		<div className="h-2" />
		<Link href="/">Return home</Link>
	</div>
);

export default Custom404;
