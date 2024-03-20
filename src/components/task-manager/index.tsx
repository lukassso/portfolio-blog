import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { store } from "../../features/task-manager/store";
import { Provider } from "react-redux";

export const TaskRoot = () => (
	<>
		<Provider store={store}>
			<TaskForm />
			<TaskList />
		</Provider>
	</>
);
