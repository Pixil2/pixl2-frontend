import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Canvas from './views/Canvas/Canvas';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/canvas">
          <Canvas />
        </Route>
        <Route exact path="/canvas/edit/:id">
          <Canvas edit />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}
