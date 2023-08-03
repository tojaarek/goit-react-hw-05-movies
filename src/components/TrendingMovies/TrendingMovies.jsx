import { useEffect, useState } from 'react';
import { TrendingLink, TrendingItem } from './TrendingMovies.styled';
import axios from 'axios';

export const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const apiKey = '40f1e2fc01a3359e74179736ebf3e1b9';
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error(error);
        alert(
          'Something went wrong while getting trending movies. Please reload the page.'
        );
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <ul>
        {trendingMovies &&
          trendingMovies.map(movie => (
            <TrendingItem key={movie.id}>
              <TrendingLink to={`movies/${movie.id}`} state={{ from: '/' }}>
                {movie.title}
              </TrendingLink>
            </TrendingItem>
          ))}
      </ul>
    </div>
  );
};
