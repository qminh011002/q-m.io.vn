'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
	const [mount, setMount] = useState<boolean>(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		setMount(true);
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			const scrollHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const progress = (scrollTop / scrollHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (!mount) return null;
	return (
		<div
			className="bg-black dark:bg-zinc-50"
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: `${scrollProgress}%`,
				height: '3px',
				transition: 'width 0.1s ease-out',
				zIndex: 1000,
			}}
		/>
	);
}
