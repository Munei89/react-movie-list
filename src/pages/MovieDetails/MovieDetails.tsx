import { Modal, Typography } from "antd";
import { Movie } from "../../types";
import { WrapperContainer, WrapperDetails } from "./styles";

const { Title, Paragraph } = Typography;

interface IMovieDetailsProps {
  movie: Movie;
  modal: boolean;
  toggle: () => void;
}

const MovieDetails = (props: IMovieDetailsProps) => {
  const {
    modal,
    toggle,
    movie: {
      title,
      imageUrl,
      releaseDate,
      rank,
      type,
      synopsis,
    }
  } = props

  return (
    <Modal
      centered
      visible={modal}
      onCancel={toggle}
      footer={null}
      width={1100}
    >
      <WrapperContainer>
        <img
          alt={title}
          src={imageUrl}
          className="imgCard"
        />
        <WrapperDetails>
          <Title level={2}>
            {title} <span>({releaseDate})</span>
          </Title>
          <Paragraph>
            <Title level={5} className="span">
              Rank:{" "}
            </Title>
            {rank}
          </Paragraph>
          <Paragraph>
            <Title level={5} className="span">
              Type:{" "}
            </Title>
            {type}
          </Paragraph>
          <div>
            <Title level={5} className="mb-0">
              Synopsis:
            </Title>
            <Paragraph className="synopsis">{synopsis}</Paragraph>
          </div>
        </WrapperDetails>
      </WrapperContainer>
    </Modal>
  );
};

export default MovieDetails;
