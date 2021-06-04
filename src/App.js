import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ExploreAll from './Pages/ExploreAll';

function App() {
  return (
    <Router>
     <Header />
     <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/collections">
            <HomePage />
          </Route>
          <Route path="/exploreAll">
            <ExploreAll />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
