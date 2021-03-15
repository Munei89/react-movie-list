import { Layout } from 'antd';
import styled from 'styled-components';

export const StyledHeader = styled(Layout.Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
`;

export const Logo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  color: #fff;
`;
