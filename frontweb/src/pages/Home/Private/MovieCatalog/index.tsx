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
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCatalog;
