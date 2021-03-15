import { Layout } from 'antd';
import UIFooter from '../UIFooter';
import UIHeader from '../UIHeader';
import { LayoutBackground, LayoutContent } from './styles';

interface IUILayoutProps {
  children: React.ReactNode;
}

const UILayout = (props: IUILayoutProps) => {
  return (
    <Layout>
      <UIHeader />
      <LayoutContent>
        <LayoutBackground>{props.children}</LayoutBackground>
      </LayoutContent>
      <UIFooter />
    </Layout>
  );
};

export default UILayout;
