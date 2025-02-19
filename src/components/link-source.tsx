import Link from 'next/link';

interface Props {
	content: string;
	href: string;
}

export default function Linksource({ content, href }: Props) {
	return (
		<Link
			target="_blank"
			className="inline-block text-blue-500 underline underline-offset-4 dark:text-blue-400"
			href={href}
		>
			{content}
		</Link>
	);
}
