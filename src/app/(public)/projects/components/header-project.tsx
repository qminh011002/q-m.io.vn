import { Dot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	title: string;
	description: string;
	hrefProject: string;
	time: string;
	role?: string;
}

export default function HeaderProject({
	description,
	hrefProject,
	title,
	time,
	role,
}: Props) {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex max-w-xl flex-col gap-4">
				<h1 className="text-3xl font-bold text-primary">{title}</h1>
				<p className="text-secondary">{description}</p>
			</div>

			<div className="flex gap-4">
				<div className="relative h-12 w-12 overflow-hidden rounded-xl">
					<Image
						src={'/me.png'}
						fill
						className="absolute bg-transparent object-cover"
						alt="Tran Quang Minh"
					/>
				</div>
				<div className="">
					<div className="flex items-center">
						<h2 className="text-primary">Tran Quang Minh</h2>
						<Dot size={15} className="block sm:hidden" />
						<p className="block text-secondary sm:hidden">{time}</p>
					</div>

					<div className="flex items-center justify-between gap-1">
						<p className="hidden text-secondary sm:block">{time}</p>
						<Dot size={15} className="hidden sm:block" />
						<p className="text-primary">{role}</p>
						<Dot size={15} className="sm:block" />
						<Link
							target="_blank"
							className="text-secondary underline underline-offset-4"
							href={hrefProject}
						>
							Visit Project
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
