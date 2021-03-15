import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import UILayout from "./components/UILayout";

const App = () => {
    return (
        <Router>
            <UILayout>
                <Switch>
                    <Route path="/:rank?">
                        <MovieList />
                    </Route>
                </Switch>
            </UILayout>
        </Router>
    );
};

export default App;
