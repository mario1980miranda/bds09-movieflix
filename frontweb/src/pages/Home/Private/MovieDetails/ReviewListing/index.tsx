import { Review } from 'types/review';

import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="base-card">
      {reviews.map((review) => (
        <div key={review.id}>
          <>
            <h1>*</h1>
            <h2>{review.user.name}</h2>
            <p>{review.text}</p>
          </>
        </div>
      ))}
    </div>
  );
};

export default ReviewListing;
