import MovieList from './MovieList/indext';

import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="catalog-container">
      <div className="catalog-select-container">
        <div className="base-card catalog-select-card">
          <select className="catalog-select">
            <option value="teste" label="teste" />
          </select>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-6 col-xl-2">
            <a href="#link">
              <div className="base-card">
                <img src="" alt="nome" />
                <h1>Texto</h1>
                <h2>2007</h2>
                <p>sinopsys</p>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-2">
            <a href="#link">
              <div className="base-card">
                <img src="" alt="nome" />
                <h1>Texto</h1>
                <h2>2007</h2>
                <p>sinopsys</p>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-2">
            <a href="#link">
              <div className="base-card">
                <img src="" alt="nome" />
                <h1>Texto</h1>
                <h2>2007</h2>
                <p>sinopsys</p>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-2">
            <a href="#link">
              <div className="base-card">
                <img src="" alt="nome" />
                <h1>Texto</h1>
                <h2>2007</h2>
                <p>sinopsys</p>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-2">
            <a href="#link">
              <div className="base-card">
                <img src="" alt="nome" />
                <h1>Texto</h1>
                <h2>2007</h2>
                <p>sinopsys</p>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-6 col-xl-2">
            <a href="#link">
              <div className="base-card">
                <img src="" alt="nome" />
                <h1>Texto</h1>
                <h2>2007</h2>
                <p>sinopsys</p>
              </div>
            </a>
          </div>
        </div>
        <h1>1 2 3 ...</h1>
      </div>
    </div>
  );
};

export default MovieCatalog;
