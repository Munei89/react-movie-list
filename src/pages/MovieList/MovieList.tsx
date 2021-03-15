import { Button, Col, Dropdown, Menu, Row } from 'antd';
import top5Movie from '../../services/top5Movie';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Dispatch, useEffect, useState } from 'react';
import { Components, Movie, Order } from '../../types';
import { useParams } from 'react-router-dom';
import MovieDetails from '../MovieDetails';
import { WrapperDropdown } from './styles';
import { connect } from 'react-redux';

import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
} from '../../redux/MovieList/types';
import { MovieListingAction } from '../../redux/MovieList/actions';

interface IMovieListProps {
  isLoading: boolean;
  movies: Movie[];
  orders: Order[];
  fetchDataLoading: () => void;
  fetchDataSuccess: Function;
}

const MovieList = (props: IMovieListProps) => {
  const {
    isLoading,
    movies,
    orders,
    fetchDataLoading,
    fetchDataSuccess,
  } = props;
  const [movieOrders, setMovieOrders] = useState<Order[]>([]);
  const [orderBy, setOrderBy] = useState<string>('');
  const params: { rank?: string | undefined } = useParams();
  const [modal, setModal] = useState<boolean>(!!params.rank);
  const [selectedMovie, setSelectedMovie] = useState<any>({});

  const data = top5Movie.components.reduce((acc: any, cur: Components) => {
    acc[cur.type] = cur.items;
    return acc;
  }, {});

  useEffect(() => {
    fetchDataLoading();
    let timer = setTimeout(() => {
      window.localStorage.setItem('movieList', JSON.stringify(data));
      setMovieOrders(data['order-select']);
      if (params.rank) {
        setSelectedMovie(
          data['movie-list'].find(
            (item: Movie) => item.rank === Number(params.rank),
          ),
        );
      }
      fetchDataSuccess(data['movie-list'], data['order-select']);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [fetchDataSuccess, fetchDataLoading, params.rank]);

  useEffect(() => {
    if (!isLoading) {
      if (params.rank) {
        setSelectedMovie(
          movies.find((item: Movie) => item.rank === Number(params.rank)),
        );
      }
    }
  }, [params.rank, movies, isLoading]);
  console.log(movies, orders);
  const handleOrderBy = (value: string) => {
    setOrderBy(value);
  };

  const toggle = () => setModal(!modal);

  const menu = (
    <Menu>
      {movieOrders.map((order: Order) => (
        <Menu.Item
          key={order.valueToOrderBy}
          onClick={() => handleOrderBy(order.valueToOrderBy)}
        >
          {order.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  const sortedMovies = !isLoading
    ? [...movies].sort((a: Movie, b: Movie) =>
        orderBy === 'rank'
          ? a.rank - b.rank
          : orderBy === 'releaseDate'
          ? b.releaseDate - a.releaseDate
          : 0,
      )
    : [];

  const mapValueToLabel = orders.reduce((acc: any, cur: Order) => {
    acc[cur.valueToOrderBy] = cur.label;
    return acc;
  }, {});

  return (
    <>
      <WrapperDropdown>
        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
          <Button>Sort by: {mapValueToLabel[orderBy]}</Button>
        </Dropdown>
      </WrapperDropdown>
      <Row gutter={[16, 16]}>
        {isLoading ? (
          <div style={{ width: 1280 }}>Loading...</div>
        ) : (
          sortedMovies.map(item => (
            <Col className="gutter-row" xs={24} sm={12} md={8} key={item.id}>
              <MovieCard movie={item} toggle={toggle} />
            </Col>
          ))
        )}
      </Row>
      {!isLoading && (
        <MovieDetails movie={selectedMovie} modal={modal} toggle={toggle} />
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  const { isLoading, data, movies, orders } = state.movieList;
  return {
    isLoading,
    data,
    movies,
    orders,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<MovieListingAction>) => {
  return {
    fetchDataLoading: () => dispatch({ type: FETCH_DATA_LOADING }),
    fetchDataSuccess: (movies: Movie[], orders: Order[]) =>
      dispatch({ type: FETCH_DATA_SUCCESS, movies, orders }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
