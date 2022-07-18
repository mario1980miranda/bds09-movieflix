import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import history from 'util/history';
import { removeAuthData } from 'util/storage';

import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar main-nav">
      <Link to="/" className="nav-logo-text">
        <h4>MovieFlix</h4>
      </Link>
      <div className="nav-logout">
        {authContextData.authenticated && (
          <>
            <span className="nav-user-name">
              {authContextData.tokenData?.username}
            </span>
            <a href="#logout" onClick={handleLogoutClick}>
              SAIR
            </a>
          </>
        )}
        <span className="nav-user-name">
          {authContextData.tokenData?.username}
        </span>
        <a href="#logout" onClick={handleLogoutClick}>
          SAIR
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
