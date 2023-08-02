import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { lazy } from 'react';
import { MovieInfo } from 'pages/MovieInfo';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Error = lazy(() => import('pages/Error'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieInfo />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
