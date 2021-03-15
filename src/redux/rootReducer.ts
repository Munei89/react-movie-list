import { combineReducers } from "redux";

import movieListReducer from "./MovieList/reducer";

const rootReducer = combineReducers({
  movieList: movieListReducer,
});

export default rootReducer;
