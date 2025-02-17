'use client';

import { useEffect, useState } from 'react';

export default function Greeting() {
	const [greeting, setGreeting] = useState('Welcome');

	useEffect(() => {
		const hour = new Date().getHours();
		let newGreeting;

		if (hour >= 5 && hour < 12) {
			newGreeting = 'Good morning';
		} else if (hour >= 12 && hour < 17) {
			newGreeting = 'Good afternoon';
		} else if (hour >= 17 && hour < 22) {
			newGreeting = 'Good evening';
		} else {
			newGreeting = 'Good night';
		}

		setGreeting(newGreeting);
	}, []);

	return <span>{greeting}</span>;
}
