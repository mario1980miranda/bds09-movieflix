import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
};

const MovieList = () => {
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const [page, setPage] = useState<SpringPage<Movie>>();

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };

  const handleSubmitFilter = () => {};

  const getMoviesByGenre = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies?genreId=1',
      params: {
        page: controlComponentsData.activePage,
        size: 1,
      },
    };

    requestBackend(config)
      .then((response) => {
        setPage(response.data);
      })
      .catch((error) => {
        console.log('TOAST', error);
      });
  }, [controlComponentsData]);

  useEffect(() => {
    getMoviesByGenre();
  }, [getMoviesByGenre]);
  return (
    <>
      <div className="row">
        {page?.content.map((movie) => (
          <Link to={`/movies/${movie.id}`}>
            <div key={movie.id} className="base-card movie-list-card">
              <img src={movie.imgUrl} alt={movie.title} />
              <h1>{movie.title}</h1>
              <h2>{movie.year}</h2>
              <p>{movie.subTitle}</p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </>
  );
};

export default MovieList;
