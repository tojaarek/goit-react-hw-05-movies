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
  PlaceholderImage,
} from './MovieDetails.styled';
import axios from 'axios';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const apiKey = '40f1e2fc01a3359e74179736ebf3e1b9';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        setMovie(response.data);
      } catch (error) {
        alert(
          'Something went wrong while getting movie details. Please reload the page.'
        );
      }
    };
    getMovieDetails();

    return () => {
      setMovie('');
    };
  }, [movieId]);

  const date = movie.release_date ? movie.release_date.substring(0, 4) : '';
  const genres = movie.genres
    ? movie.genres.map(genre => genre.name).join(', ')
    : '';

  return (
    <Container>
      {movie.poster_path ? (
        <Poster
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="Movie poster"
        />
      ) : (
        <PlaceholderImage src="https://via.placeholder.com/300x450" />
      )}
      <Details>
        <Title>
          {movie.original_title} {date}
        </Title>
        <Score>User score: {Math.trunc(movie.vote_average * 10)}%</Score>
        <Headline>Overview</Headline>
        <Info>{movie.overview}</Info>
        <Headline>Genres</Headline>
        <Info>{genres}</Info>
      </Details>
    </Container>
  );
};
