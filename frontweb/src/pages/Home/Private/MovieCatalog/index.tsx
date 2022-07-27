import MovieList from './MovieList/indext';

import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="catalog-container">
      <div className="catalog-select-container">
        <MovieList />
      </div>
    </div>
  );
};

export default MovieCatalog;
