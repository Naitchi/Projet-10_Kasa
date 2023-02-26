import './header.css';

export default function Header() {
  return (
    <header>
      <h1>
        <img src="../img/kasa.svg" className="logo" alt="Logo Kasa" />
      </h1>
      <nav>
        <a href="/">Acceuil</a>
        <a href="/About">A Propos</a>
      </nav>
    </header>
  );
}
