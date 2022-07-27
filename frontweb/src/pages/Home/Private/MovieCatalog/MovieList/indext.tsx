import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import Pagination from 'components/Pagination';
import GenreFilter, { GenreFilterData } from './GenreFilter';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: GenreFilterData;
};

const MovieList = () => {
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const [page, setPage] = useState<SpringPage<Movie>>();

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getMoviesByGenre = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: controlComponentsData.filterData.genre
        ? '/movies?genreId=' + controlComponentsData.filterData.genre.id
        : '/movies',
      params: {
        page: controlComponentsData.activePage,
        size: 4,
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
      <GenreFilter onSubmitFilter={handleSubmitFilter} />

      <div className="row">

        {page?.content.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-lg-6 col-xl-3">
            <Link to={`/movies/${movie.id}`}>
              <div className="base-card movie-list-card">
                <img src={movie.imgUrl} alt={movie.title} />
                <h1>{movie.title}</h1>
                <h2>{movie.year}</h2>
                <p>{movie.subTitle}</p>
              </div>
            </Link>
          </div>
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
