'use client';

import * as React from 'react';
import { Check, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@pp/components/ui/dropdown-menu';
import { Button } from '@pp/components/ui/button';

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="link"
					className="rounded-xl text-zinc-700 hover:bg-zinc-50 focus-visible:ring-0 dark:text-zinc-300 dark:hover:bg-zinc-900"
					size="icon"
				>
					<Sun
						style={{
							width: 18,
							height: 18,
						}}
						strokeWidth={1.5}
						color="currentColor"
						className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						style={{
							width: 18,
							height: 18,
						}}
						fill="currentColor"
						color="currentColor"
						className="absolute w-12 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="rounded-2xl border-[0.5px] border-gray-50 bg-white p-2 shadow-lg focus-visible:ring-0 dark:border-black dark:bg-black"
				align="end"
			>
				<DropdownMenuItem
					className="flex w-full items-center justify-between rounded-md px-3 text-primary"
					onClick={() => setTheme('light')}
				>
					<span>Light</span>
					{theme === 'light' && <Check />}
				</DropdownMenuItem>
				<DropdownMenuItem
					className="flex w-full items-center justify-between rounded-md px-3 text-primary"
					onClick={() => setTheme('dark')}
				>
					<span>Dark</span>
					{theme === 'dark' && <Check />}
				</DropdownMenuItem>
				<DropdownMenuItem
					className="flex w-full items-center justify-between rounded-md px-3 text-primary"
					onClick={() => setTheme('system')}
				>
					<span>System</span>
					{theme === 'system' && <Check />}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
