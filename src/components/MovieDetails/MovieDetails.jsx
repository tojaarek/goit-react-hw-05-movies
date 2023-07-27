import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Details,
  Headline,
  Info,
  Poster,
  Title,
  Score,
} from './MovieDetails.styled';
import axios from 'axios';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  const getMovieDetails = async () => {
    try {
      const apiKey = '40f1e2fc01a3359e74179736ebf3e1b9';
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      console.log(response.data);
      setMovie(response.data);
      console.log(movie);
    } catch (error) {
      console.error(error);
      alert(
        'Something went wrong while getting movie details. Please reload the page.'
      );
    }
  };

  useEffect(() => {
    getMovieDetails();

    return () => {
      setMovie('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const date = movie.release_date ? movie.release_date.substring(0, 4) : '';
  const score = movie.vote_average
    ? parseFloat(movie.vote_average.toFixed(1))
    : '';
  const genres = movie.genres
    ? movie.genres.map(genre => genre.name).join(', ')
    : '';

  return (
    <Container>
      <Poster
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt="Movie poster"
      ></Poster>
      <Details>
        <Title>
          {movie.original_title} {date}
        </Title>
        <Score>User score: {score}</Score>
        <Headline>Overview</Headline>
        <Info>{movie.overview}</Info>
        <Headline>Genres</Headline>
        <Info>{genres}</Info>
      </Details>
    </Container>
  );
};
