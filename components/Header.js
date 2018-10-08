import Subscribe from './Subscribe';

const Header = () => (
  <header className="header">
    <div className="header__center">
      <h1 aria-label="journalpodcast.com">
        <img className="header__logo" src="/static/logo.png" alt="Journal" />
      </h1>
      <span className="tagLine">All things MongoDB and related.<br></br>
      <a
          target="_blank"
          href="https://goo.gl/forms/mgBf4ngRJmSx7Gcz2"
          className="title__potluck-btn"
        >
          Ask a Question →
        </a>
      </span>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline"></h2>
      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
