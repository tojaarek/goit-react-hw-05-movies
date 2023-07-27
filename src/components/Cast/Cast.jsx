import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image, Item, List, Name, PlaceholderImage } from './Cast.styled';
import placeholder from 'images/placeholder.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const getMovieCast = async () => {
    try {
      const apiKey = '40f1e2fc01a3359e74179736ebf3e1b9';
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
      );
      setCast(response.data.cast);
      console.log(cast);
    } catch (error) {
      console.error(error);
      alert(
        'Something went wrong while getting movie cast. Please reload the page.'
      );
    }
  };

  useEffect(() => {
    getMovieCast();

    return () => {
      setCast([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      {cast &&
        cast.map(actor => (
          <Item key={actor.id}>
            {actor.profile_path ? (
              <Image
                src={`https://www.themoviedb.org/t/p/w300${actor.profile_path}`}
              />
            ) : (
              <PlaceholderImage src={placeholder} />
            )}
            <Name>{actor.original_name}</Name>
            <p>as</p>
            {actor.character}
          </Item>
        ))}
    </List>
  );
};

export default Cast;
