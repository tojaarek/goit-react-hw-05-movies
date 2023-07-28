import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Image,
  Item,
  List,
  Name,
  Year,
  Link,
  Error,
} from './SearchResults.styled';
import { PlaceholderImage } from './SearchResults.styled';

const SearchResults = ({ movieName }) => {
  const [searchedMovie, setSearchedMovie] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const apiKey = '40f1e2fc01a3359e74179736ebf3e1b9';
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
        );
        setSearchedMovie(response.data.results);
      } catch (error) {
        alert(
          'Something went wrong while getting the movies. Please reload the page.'
        );
      }
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieName]);

  return (
    <List>
      {searchedMovie.length > 0 ? (
        searchedMovie.map(movie => (
          <Item key={movie.id}>
            {movie.poster_path ? (
              <Image
                src={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
                alt={`${movie.original_title} poster`}
              />
            ) : (
              <PlaceholderImage src="https://via.placeholder.com/100x150" />
            )}
            <Name>{movie.original_title}</Name>
            <Year>({movie.release_date.substring(0, 4)})</Year>
            <Link to={`/movies/${movie.id}`} state={{ from: '/movies' }}>
              Details
            </Link>
          </Item>
        ))
      ) : (
        <Error>No results found for "{movieName}"</Error>
      )}
    </List>
  );
};

export default SearchResults;
