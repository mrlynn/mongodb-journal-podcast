import Subscribe from './Subscribe';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <h1 aria-label="journalpodcast.com">
        <img className="header__logo" src="/static/logo.png" alt="Journal" />
      </h1>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">A </h2>
        <a
          target="_blank"
          href="https://goo.gl/forms/mgBf4ngRJmSx7Gcz2"
          className="title__potluck-btn"
        >
          Ask a Question →
        </a>
      </div>
      <div className="people">
        <div className="person">
          <img
            src="/static/mlynn400x400.jpg"
            alt=""
            className="avatar"
          />
          <h3>Michael Lynn</h3>
          <a
            target="_blank"
            href="https://twitter.com/mlynn"
            className="person__social person__social--twitter"
          >
            @mlynn
          </a>
          <p>
            DevRel Leader @MongoDB.
          </p>
        </div>

        {/* <div className="person">
          <img
            src="https://avatars2.githubusercontent.com/u/669383?s=460&v=4"
            alt=""
            className="avatar"
          />
          <h3>Scott Tolinski</h3>
          <a
            target="_blank"
            href="https://twitter.com/stolinski"
            className="person__social person__social--twitter"
          >
            @stolinski
          </a>
          <p>
            Web Developer, Creator of <a href="https://leveluptutorials.com/">Level Up Tuts</a>,
            Bboy, Robotops Crew and{' '}
            <a target="_blank" href="https://www.youtube.com/c/leveluptuts">
              Youtuber
            </a>
          </p>
        </div> */}
      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
