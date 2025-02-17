'use client';

import { projects } from '@pp/lib/data';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Project from './project';
import Image from 'next/image';

export default function ProjectList() {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const listRef = useRef<HTMLUListElement>(null);
	const imageBox = useRef<HTMLDivElement>(null);
	const [imageSelect, setImageSelect] = useState<string>('');
	const [select, setSelect] = useState<number | null>(null);

	// Dùng useRef để lưu vị trí chuột mà không gây re-render
	const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

	// Lắng nghe thay đổi kích thước màn hình
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Kiểm tra ngay khi component mount
		handleResize();

		// Lắng nghe sự kiện resize
		window.addEventListener('resize', handleResize);

		// Cleanup event khi unmount component
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const onHover = (value: number | null) => {
		// Dù là mobile hay không, vẫn set giá trị
		setSelect(value);

		// Nếu là mobile, không thực hiện tiếp các hiệu ứng UI
		if (isMobile) return;

		// Tìm ảnh tương ứng nếu hover
		if (select !== value) {
			const image = projects.find((p) => p.id === value);
			setImageSelect(image?.imageUrl ?? '');
		}
	};

	const onMouseMove = (
		event: React.MouseEvent<HTMLUListElement, MouseEvent>,
	) => {
		// Nếu là mobile, không cập nhật vị trí ảnh
		if (isMobile) return;

		const ulRect = event.currentTarget.getBoundingClientRect();
		const { clientX, clientY } = event;
		const { left, top } = ulRect;

		// Cập nhật vị trí nhưng không làm re-render
		setBoxPosition({
			x: clientX - left + 10, // Điều chỉnh khoảng cách box với chuột
			y: clientY - top - 150 - 10,
		});
	};

	const onMouseLeave = () => {
		setSelect(null); // Vẫn giữ logic setSelect(null) dù là mobile hay desktop
	};

	return (
		<div>
			<ul
				onMouseLeave={onMouseLeave}
				onMouseMove={onMouseMove}
				ref={listRef}
				className="flex flex-col transition-transform delay-150 duration-200"
			>
				{/* Chỉ hiển thị hover box nếu không phải là mobile */}
				{!isMobile && select !== null && (
					<motion.div
						ref={imageBox}
						initial={false}
						animate={{
							x: boxPosition.x,
							y: boxPosition.y,
							opacity: select !== null ? 1 : 0,
						}}
						transition={{
							type: 'spring',
							stiffness: 70, // Độ cứng của lò xo
							damping: 20, // Độ mượt khi box dừng lại
						}}
						className="absolute z-10 rounded-lg bg-gray-400"
						style={{
							position: 'absolute',
							pointerEvents: 'none',
							height: 150,
							width: 250,
						}}
					>
						{imageSelect && (
							<Image
								priority
								src={imageSelect}
								alt="Project Image"
								className="h-[150px] w-[250px] rounded-lg object-cover"
								height={150}
								width={250}
							/>
						)}
					</motion.div>
				)}
				{projects.map((project, index) => (
					<li
						key={project.id}
						className="animate-raise"
						style={{ '--index': index } as React.CSSProperties}
					>
						<Project
							itemSelected={select} // Vẫn giữ state select dù là mobile
							onHover={onHover}
							project={project}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
