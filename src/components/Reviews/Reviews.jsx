import { List, Item, Author, Content } from './Reviews.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const apiKey = '40f1e2fc01a3359e74179736ebf3e1b9';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
        );
        setReviews(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
        alert(
          'Something went wrong while getting movie reviews. Please reload the page.'
        );
      }
    };

    getMovieReviews();

    return () => {
      setReviews([]);
    };
  }, [movieId]);

  return (
    <List>
      {reviews &&
        reviews.map(review => (
          <Item key={review.id}>
            <Author>Author: {review.author}</Author>
            <Content>{review.content}</Content>
          </Item>
        ))}
    </List>
  );
};

export default Reviews;
