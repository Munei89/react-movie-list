import { Link } from 'react-router-dom';
import { Movie } from '../../types';
import { StyledCard, StyledMeta } from './styles';

interface IMovieCardProps {
  movie: Movie;
  toggle: () => void;
}

const MovieCard = (props: IMovieCardProps) => {
  const {
    toggle,
    movie: { rank, imageUrl, title, synopsis },
  } = props;

  return (
    <Link to={'/' + rank} onClick={toggle}>
      <StyledCard hoverable cover={<img alt={title} src={imageUrl} />}>
        <StyledMeta title={title} description={synopsis} />
      </StyledCard>
    </Link>
  );
};

export default MovieCard;
