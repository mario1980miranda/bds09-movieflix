import { Review } from 'types/review';
import StarImage from 'assets/images/star-image.png';

import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="base-card review-list-card">
      {reviews.map((review) => (
        <div key={review.id}>
          <div className="review-content">
            <img src={StarImage} alt="star" />
            <h2>{review.user.name}</h2>
          </div>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewListing;
