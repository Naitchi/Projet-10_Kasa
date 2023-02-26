// Components
import Header from '../../components/Header/Header.jsx';

// Css
import './404.css';

function NotFound() {
  return (
    <div className="page">
      <Header />
      <div className="body">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    </div>
  );
}

export default NotFound;
