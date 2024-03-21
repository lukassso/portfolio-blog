import { useAppSelector } from "../../../../features/task-manager/hooks";
import RemoveCompletedBtn from "./components/RemoveCompletedBtn";
import TaskFilterBtn from "./components/TaskFilterBtn";

function pluralize(count: number, noun: string, suffix = "s") {
	return `${count} ${noun}${count !== 1 ? suffix : ""}`;
}

function TaskFilterBar() {
	const { filteredTasks } = useAppSelector((state) => state.taskState);

	return (
		<section className="mt-8 flex w-full flex-wrap items-center justify-between">
			<span>{pluralize(filteredTasks.length, "task")}</span>
			<div className="flex gap-3">
				<TaskFilterBtn filterValue="all" />
				<TaskFilterBtn filterValue="active" />
				<TaskFilterBtn filterValue="completed" />
			</div>
			<RemoveCompletedBtn />
		</section>
	);
}
export default TaskFilterBar;
