import { SET_LOADING, SET_STORIES, HANDLE_PAGE } from "./actions";
import { type HackerNewsState, type Action } from "./types";

const reducer = (state: HackerNewsState, action: Action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case SET_STORIES:
			return {
				...state,
				isLoading: false,
				hits: action.payload.hits,
				nbPages: action.payload.nbPages,
			};
		case HANDLE_PAGE:
			if (action.payload === "inc") {
				let nextPage = state.page + 1;
				if (nextPage > state.nbPages - 1) {
					nextPage = 0;
				}
				return { ...state, page: nextPage };
			}
			if (action.payload === "dec") {
				let prevPage = state.page - 1;
				if (prevPage < 0) {
					prevPage = state.nbPages - 1;
				}
				return { ...state, page: prevPage };
			}
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

export default reducer;
