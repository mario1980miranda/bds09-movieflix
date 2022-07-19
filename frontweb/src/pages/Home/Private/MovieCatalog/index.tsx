import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="catalog-container">
      <h1>Tela listagem de filmes</h1>
      <div className="catalog-items">
        <a href="/movies/1">Acessar /movies/1</a>
        <a href="/movies/2">Acessar /movies/2</a>
      </div>
    </div>
  );
};

export default MovieCatalog;
