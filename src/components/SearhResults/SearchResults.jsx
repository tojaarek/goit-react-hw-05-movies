import axios from 'axios';
import { useState, useEffect } from 'react';

const SearchResults = ({ movieName }) => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const getMovies = () => {
    try {
      const apiKey = '40f1e2fc01a3359e74179736ebf3e1b9';
      const response = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}?query=${movieName}`
      );
      setSearchedMovie(response.data.results);
    } catch (error) {
      alert(
        'Something went wrong while getting trending movies. Please reload the page.'
      );
    }
  };

  useEffect(() => {
    getMovies();
  }, [searchedMovie]);

  return <div>{/* Wyświetl wyniki wyszukiwania */}</div>;
};

export default SearchResults;
