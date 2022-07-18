import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRole } from 'util/auth';
import { requestBackend } from 'util/requests';
import ReviewForm from './ReviewForm';
import ReviewListing from './ReviewListing';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      console.log(response.data);
      setReviews(response.data);
    });
  }, [movieId]);

const handleInsertReview = (review : Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
};

  return (
    <div className="container">
      <h1>Tela detalhes do filme id: {movieId}</h1>
      {hasAnyRole(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview}/>
      )}
      <ReviewListing reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
