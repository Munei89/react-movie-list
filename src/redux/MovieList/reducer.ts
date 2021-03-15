import { MovieListingAction } from "./actions";
import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS } from "./types";

const INITIAL_STATE = {
  isLoading: true,
  movies: [],
  orders: [],
};

const reducer = (state = INITIAL_STATE, action: MovieListingAction) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.movies,
        orders: action.orders,
      };
    default:
      return state;
  }
};

export default reducer;
