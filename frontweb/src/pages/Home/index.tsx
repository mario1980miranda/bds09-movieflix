import { ReactComponent as MainImage } from '../../assets/images/main-image.svg';
import Login from "../../components/Login";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-card-container">
          <h1>Avalie Filmes</h1>
          <p>Diga o que você achou do seu filme favorito</p>
          <MainImage />
        </div>
        <div>
            <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
