'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

const nav_links = [
	{ id: 0, title: 'Home', href: '/' },
	{ id: 2, title: 'Project', href: '/projects' },
	{ id: 3, title: 'Contact', href: '/contact' },
];

export default function NavItems() {
	const path = usePathname();
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
	const navRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (navRef.current) {
			const activeNav = navRef.current.querySelector('.active');

			if (activeNav) {
				const { offsetLeft, offsetWidth } = activeNav as HTMLElement;
				setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
			}
		}
	}, [path]);

	return (
		<ul ref={navRef} className="relative flex items-center gap-x-2">
			{nav_links.map((nav) => {
				const isActive =
					path === nav.href || path.startsWith(nav.href + '/'); // Fix applied
				return (
					<Link
						href={nav.href}
						key={nav.id}
						className={clsx(
							'relative block px-3 py-1.5 text-sm transition-all duration-200',
							{
								'active text-primary': isActive,
								'text-secondary hover:text-black dark:hover:text-primary':
									!isActive,
							},
						)}
					>
						{nav.title}
					</Link>
				);
			})}

			{/* Background Indicator */}
			<span
				className="absolute top-1/2 z-[-1] h-full -translate-y-1/2 rounded-lg bg-zinc-100 transition-all duration-500 dark:bg-zinc-800"
				style={{
					left: `${indicatorStyle.left}px`,
					width: `${indicatorStyle.width}px`,
				}}
			></span>
		</ul>
	);
}
