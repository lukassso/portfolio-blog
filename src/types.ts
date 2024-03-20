export type SiteConfig = {
	author: string;
	title: string;
	description: string;
	lang: string;
	ogLocale: string;
};

export type SiteMeta = {
	title: string;
	description?: string;
	ogImage?: string | undefined;
	articleDate?: string | undefined;
};

export type PaginationLink = {
	url: string;
	text?: string;
	srLabel?: string;
};

export type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export type TaskState = {
  tasks: Task[];
  filterValue: TaskFilterValue;
  filteredTasks: Task[];
};

export type TaskFilterValue = 'all' | 'active' | 'completed';

