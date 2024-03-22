import React, { createContext, useContext, useReducer, useEffect } from "react";
import { SET_LOADING, SET_STORIES } from "./actions";
import reducer from "./reducer";
import { type HackerNewsState } from "./types";
import { type AppProviderProps } from "./types";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
	isLoading: false,
	page: 0,
	hits: [],
	nbPages: 0,
};

interface AppContextType extends HackerNewsState {}

const AppContext = createContext(initialState);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchApiData = async (url: string) => {
		dispatch({ type: SET_LOADING });
		try {
			const response = await fetch(url);
			const data = await response.json();
			dispatch({
				type: SET_STORIES,
				payload: {
					hits: data.hits,
					nbPages: data.nbPages,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchApiData(`${API_ENDPOINT}page=${state.page}`);
	}, [state.page]);

	return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

const useGlobalContext = (): AppContextType => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
