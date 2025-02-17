export default function Footer() {
	return (
		<footer className="py-6 text-center text-primary">
			<div className="mx-auto flex w-full max-w-[700px] items-center justify-center px-4 py-3">
				<p className="text-sm">
					&copy; {new Date().getFullYear()} 13gucci | Tran Quang Minh.
					All rights reserved.
				</p>
			</div>
		</footer>
	);
}
