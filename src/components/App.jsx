import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Navigation } from './Navigation/Navigation';
import { MovieInfo } from 'pages/MovieInfo';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route
          path="/goit-react-hw-05-movies/movies/:movieId"
          element={<MovieInfo />}
        >
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId/cast"
            element={<Cast />}
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId/reviews"
            element={<Reviews />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
