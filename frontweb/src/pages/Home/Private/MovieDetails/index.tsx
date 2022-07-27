import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRole } from 'util/auth';
import { requestBackend } from 'util/requests';
import ReviewForm from './ReviewForm';
import ReviewListing from './ReviewListing';

import './styles.css';

type urlParams = {
  movieId: string;
};

type MovieDetail = {
  id: number;
  title: string;
  subTitle: string;
  year: number;
  imgUrl: string;
  synopsis: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();

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

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  useEffect(() => {
    const config : AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true
    };
    requestBackend(config).then((response) => {
      setMovieDetail(response.data);
    }).catch((error) => {
      console.log(error);
    });
  },[movieId]);

  return (
    <div className="movie-details-container">
      <div className="base-card movie-details-card">
        <div className="row">
          <div className="col-xl-6">
            <img
              src={movieDetail?.imgUrl}
              alt={movieDetail?.title}
            />
          </div>
          <div className="col-xl-6">
            <h1>{movieDetail?.title}</h1>
            <h2>{movieDetail?.year}</h2>
            <h3>{movieDetail?.subTitle}</h3>
            <p>{movieDetail?.synopsis}</p>
          </div>
        </div>
      </div>
      {hasAnyRole(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      <ReviewListing reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
