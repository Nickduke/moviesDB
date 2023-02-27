import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path='/' exact />
      <Route element={<Movie />} path='/movies/:id' />
    </Routes>
  );
}

export default App;
