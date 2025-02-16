import { ModeToggle } from '@pp/components/mode-toggle';
import NavItems from '@pp/components/nav-item';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header className="sticky top-0 z-10 bg-white bg-white/70 backdrop-blur-md dark:bg-[#0b0b0b]/60 md:-top-6 md:pt-6">
			<nav className="mx-auto flex w-full max-w-[700px] items-center justify-between px-4 py-3">
				{/* Logo */}

				<Link href={'/'} className="hidden md:inline-block">
					<Image
						className="dark:invert"
						src="/qminh-logo-black.svg"
						alt="Next.js logo"
						width={24}
						height={24}
						priority
					/>
				</Link>
				{/* Navigation */}
				<NavItems />
				{/* Darkmode Action */}
				<ModeToggle />
			</nav>
		</header>
	);
}
