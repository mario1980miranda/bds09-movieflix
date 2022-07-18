import { Review } from 'types/review';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div>
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
