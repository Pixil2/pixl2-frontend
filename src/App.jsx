import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Canvas from './views/Canvas/Canvas';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/canvas" element={<Canvas />} />
          <Route exact path="/canvas/edit/:id" element={<Canvas edit />} />
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}
