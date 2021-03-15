import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS } from "./types";
import { Movie, Order } from "../../types";

type FetchDataLoading = {
  type: typeof FETCH_DATA_LOADING;
};

type FetchDataSuccess = {
  type: typeof FETCH_DATA_SUCCESS;
  movies: Movie[];
  orders: Order[];
};

export type MovieListingAction = FetchDataLoading | FetchDataSuccess;
