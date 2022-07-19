import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';

import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
        console.log('SUCESSO AO SALVAR', response);
      })
      .catch((error) => {
        console.log('FALHA AO SALVAR', error);
      });
  };

  return (
    <div>
      <div className="base-card review-form-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register('text', { required: 'Campo obrigatório' })}
              type="text"
              name="text"
              placeholder="Deixe sua avaliação aqui"
              className={`form-control base-input ${
                errors.text ? `is-invalid` : ''
              }`}
            />
            <div className="invalid-feedback d-block">
              {errors.text?.message}
            </div>
          </div>
          <button type="submit">SALVAR AVALIAÇÃO</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
