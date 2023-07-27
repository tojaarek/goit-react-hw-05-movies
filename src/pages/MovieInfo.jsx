import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import Button from 'components/Button/Button';
import { Main } from 'components/App.styled';
import { Link } from 'components/Button/Button.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const MovieInfo = () => {
  return (
    <Main>
      <Button />
      <MovieDetails />
      <Link to="cast">Cast</Link>
      <Suspense fallback={<div>Loading page ...</div>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};
