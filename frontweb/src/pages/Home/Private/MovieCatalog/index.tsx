import MovieList from './MovieList/indext';
import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="catalog-container">
      <div className="base-card">
        <select>
          <option>Aventura</option>
        </select>
      </div>
      <MovieList />
    </div>
  );
};

export default MovieCatalog;
