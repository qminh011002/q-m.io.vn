import Gallery from '@pp/app/(public)/about/components/gallery';
import WrapConnect from '@pp/app/(public)/about/components/wrap-connect';
import WrapWork from '@pp/app/(public)/about/components/wrap-work';
import Greeting from '@pp/components/greeting';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Quang Minh',
};

export default function Home() {
	return (
		<section>
			<div className="flex flex-col gap-y-16 md:gap-y-24">
				<div>
					<h1 className="animate-raise text-3xl font-semibold tracking-tight text-primary">
						hey, Quang Minh here!
					</h1>
					<p
						style={{ '--index': 1 } as React.CSSProperties}
						className="text-zin-600 mt-4 max-w-lg animate-raise break-words text-secondary"
					>
						I’m a software engineer in Ho Chi Minh, Vietnam, excited
						to learn and apply the latest web technologies to build
						modern, efficient, and scalable solutions.
					</p>
				</div>
				<div>
					<h1 className="animate-raise text-3xl font-bold tracking-tight text-primary">
						About
					</h1>

					<p
						style={{ '--index': 1 } as React.CSSProperties}
						className="text-zin-600 max-w-lg animate-raise break-words text-secondary"
					>
						A glimpse into my world.
					</p>
				</div>

				<div className="hidden md:block">
					<Gallery />
				</div>

				{/* About */}
				<div
					style={{ '--index': 2 } as React.CSSProperties}
					className="z-0 flex animate-raise flex-col gap-16 md:gap-24"
				>
					<div className="grid grid-cols-1 md:grid-cols-12">
						<div className="col-span-1 text-secondary md:col-span-3">
							About
						</div>
						<div className="col-span-1 mt-2 flex flex-col gap-6 text-primary md:col-span-9 md:mt-0">
							<p>
								<Greeting />, my name is Trần Quang Minh, a
								Software Engineer based in Ho Chi Minh City,
								Vietnam.
							</p>
							<p>
								My passion for web development started in high
								school, where I became fascinated by how a
								website looks, feels, and functions. I believe a
								great product must be visually appealing,
								intuitive, and highly performant.
							</p>

							<p>
								I hold a Software Engineering degree from FPT
								University and gained real-world experience
								during my six months at FPT Software, where I
								improved my team collaboration and
								problem-solving skills.
							</p>

							<p>
								I’m always eager to learn and apply the latest
								web technologies, building solutions that are
								modern, scalable, and highly efficient. My focus
								is on creating seamless and visually engaging
								experiences that not only perform well but also
								feel intuitive to users. I strive to bring real
								value to every project I work on, ensuring that
								my contributions have a meaningful impact on
								both users and the businesses I support.
							</p>
						</div>
					</div>

					<WrapConnect />

					<WrapWork />
				</div>
			</div>
		</section>
	);
}
