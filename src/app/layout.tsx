import Footer from '@pp/components/footer';
import Header from '@pp/components/header';
import { ThemeProvider } from '@pp/components/theme-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '13gucci',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} scroll-smooth font-sans antialiased dark:bg-[#0b0b0b]`}
			>
				<Analytics />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className="mx-auto max-w-[700px] px-6 py-16 md:px-4 md:py-20">
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
