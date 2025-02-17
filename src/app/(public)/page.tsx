import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			{/* Shortest description */}
			<div className="flex flex-col gap-8">
				<div>
					<h1 className="animate-raise text-3xl font-semibold tracking-tight text-primary">
						hey, Quang Minh here!
					</h1>
					<p
						style={{ '--index': 1 } as React.CSSProperties}
						className="text-zin-600 animate-raise mt-4 max-w-lg break-words text-secondary"
					>
						I’m a software engineer in Ho Chi Minh, Vietnam, excited
						to learn and apply the latest web technologies to build
						modern, efficient, and scalable solutions.
					</p>
				</div>

				{/* Socials link */}
				<ul
					className="animate-raise flex items-center gap-x-3"
					style={{ '--index': 2 } as React.CSSProperties}
				>
					<li>
						<Link
							href={'#!'}
							target="_blank"
							className="flex w-fit items-center space-x-[2px] rounded-full bg-zinc-50 px-3 py-1 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
						>
							<span className="text-sm text-zinc-800 dark:text-zinc-100">
								Linkedin
							</span>
							<ArrowUpRight
								size={16}
								strokeWidth={1.8}
								color="#a1a1aa"
							/>
						</Link>
					</li>
					<li>
						<Link
							href={'#!'}
							target="_blank"
							className="flex w-fit items-center space-x-[2px] rounded-full bg-zinc-50 px-3 py-1 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
						>
							<span className="text-sm text-zinc-800 dark:text-zinc-100">
								Instagram
							</span>
							<ArrowUpRight
								size={16}
								strokeWidth={1.8}
								color="#a1a1aa"
							/>
						</Link>
					</li>
					<li>
						<Link
							href={'#!'}
							target="_blank"
							className="flex w-fit items-center space-x-[2px] rounded-full bg-zinc-50 px-3 py-1 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
						>
							<span className="text-sm text-zinc-800 dark:text-zinc-100">
								Facebook
							</span>
							<ArrowUpRight
								size={16}
								strokeWidth={1.8}
								color="#a1a1aa"
							/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
