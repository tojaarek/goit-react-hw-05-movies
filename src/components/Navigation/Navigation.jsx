import { Container, Header, Link } from './Navigation.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Navigation = () => (
  <Container>
    <Header>
      <nav>
        <Link to="/goit-react-hw-05-movies">Home</Link>
        <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
      </nav>
    </Header>
    <Suspense fallback={<div>Loading page ...</div>}>
      <Outlet />
    </Suspense>
  </Container>
);
