import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.component";
// import MoviePage from "./MoviePage";

function AppRouting() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/movies-app" element={<HomePage />} />
				{/* <Route path="/movie/:id" element={<MoviePage />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouting;
