import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Canvas from './views/Canvas/Canvas';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/canvas">
            <Canvas />
          </Route>
          <Route path="/canvas/edit/:id">
            //Continue as guest
            <Canvas />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
