import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { Link } from 'react-router-dom';
import Login from './Login';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div>
                <h1>Avalie Filmes</h1>
                <p>Diga o que você achou do seu filme favorito</p>
                <MainImage />
            </div>
            <div>
                <Login />
            </div>
        </div>
    );
}

export default Home;
