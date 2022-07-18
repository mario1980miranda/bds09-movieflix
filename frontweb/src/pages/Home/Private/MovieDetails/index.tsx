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

  return (
    <div className="container">
      <h1>Tela detalhes do filme id: {movieId}</h1>
      {hasAnyRole(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} />
      )}
      <ReviewListing reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
