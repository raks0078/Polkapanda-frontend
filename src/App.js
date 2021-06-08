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
import Footer from './Components/Footer/Footer';
import CardInfo from './Pages/CardInfo';
import CollectionPage from './Pages/CollectionPage';

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
          <Route exact path="/exploreAll">
            <ExploreAll />
          </Route>
          <Route exact path="/exploreAll/:categoryd">
            <ExploreAll />
          </Route>
          <Route exact path="/token/cardInfo">
            <CardInfo />
          </Route>
          <Route exact path="/collection/:categoryd">
            <CollectionPage />
          </Route>
          <Route exact path="/:some">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
