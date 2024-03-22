import { type ReactNode } from "react";

interface Hit {
	objectID: string;
	title: string;
	url: string;
	num_comments: number;
	points: number;
	author: string;
}

export interface HackerNewsState {
	isLoading: boolean;
	page: number;
	hits: Hit[];
	nbPages: number;
}

export interface AppProviderProps {
	children: ReactNode;
}
