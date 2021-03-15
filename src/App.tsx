import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UILayout from './components/UILayout';

const App = () => {
  return (
    <Router>
      <UILayout>Here</UILayout>
    </Router>
  );
};

export default App;
