import WrapConnect from '@pp/app/(public)/about/components/wrap-connect';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact | qminh',
};

export default function ContactPage() {
	return (
		<div>
			<WrapConnect />
		</div>
	);
}
