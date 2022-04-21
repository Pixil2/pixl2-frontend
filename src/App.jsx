import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Canvas from './views/Canvas/Canvas';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import styles from './App.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Community from './views/Community/Community';

export default function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route exact path="/canvas" element={<Canvas />} />
          <Route
            exact
            path="/canvas/edit/:id"
            element={
              <ProtectedRoute>
                <Canvas edit />
              </ProtectedRoute>
            }
          />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/community" element={<Community />} />
        </Routes>
      </Router>
    </div>
  );
}
