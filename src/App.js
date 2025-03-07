import './index.css';
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
