import { Logo, StyledHeader } from './styles';
import { VideoCameraFilled } from '@ant-design/icons';

const UIHeader = () => {
  return (
    <StyledHeader>
      <Logo>
        <VideoCameraFilled /> Movie List
      </Logo>
    </StyledHeader>
  );
};

export default UIHeader;
