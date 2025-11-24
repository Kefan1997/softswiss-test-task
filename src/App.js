import logoIcon from './images/logo.svg';
import heroPlanet from './images/earth.png';
import React, { useState } from 'react';
import './App.scss';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="header__inner">
          <div className="header__logo">
            <img src={logoIcon} alt="SpaceGo logo" className="header__logo-img" />
            <span className="header__logo-text">GO</span>
          </div>

          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <a href="#hero" className="header__nav-link" onClick={closeMenu}>
              Home
            </a>
            <a href="#offers" className="header__nav-link" onClick={closeMenu}>
              Products
            </a>
            <a href="#journey" className="header__nav-link" onClick={closeMenu}>
              About
            </a>
          </nav>

          <button
            type="button"
            className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
            onClick={handleToggleMenu}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {isMenuOpen && <div className="header__backdrop" onClick={closeMenu} />}
      </header>

      <main className="page__content">
        {/* HERO */}
        <section className="hero" id="hero">
          <div className="hero__inner">
            <div className="hero__content">
              <h1 className="hero__title">
                Discover the vast expanses of <span className="hero__title-highlight">space</span>
              </h1>

              <p className="hero__subtitle">
                Where the possibilities are{' '}
                <span className="hero__subtitle-highlight">endless!</span>
              </p>

              <button type="button" className="button button--primary hero__button">
                Learn more
              </button>
            </div>

            <div className="hero__image-wrapper">
              <img src={heroPlanet} alt="Planet Earth with a rocket" className="hero__image" />
            </div>
          </div>
        </section>

        {/* OFFERS */}
        <section className="offers" id="offers">
          <div className="offers__inner">
            <h2 className="offers__title">Offers</h2>

            <article className="offer-card offer-card--wide offer-card--image1">
              <div className="offer-card__content">
                <h3 className="offer-card__title">Move the borders of reality!</h3>
                <p className="offer-card__text">
                  Go on a space adventure – it&apos;s possible with us!
                </p>
                <button type="button" className="button button--secondary offer-card__button">
                  Learn more
                </button>
              </div>
            </article>

            <div className="offers__grid">
              <article className="offer-card offer-card--medium offer-card--image2">
                <div className="offer-card__content">
                  <h3 className="offer-card__title">Space is not just stars and planets</h3>
                  <p className="offer-card__text">Go on a space adventure!</p>
                  <button type="button" className="button button--secondary offer-card__button">
                    Learn more
                  </button>
                </div>
              </article>

              <article className="offer-card offer-card--medium offer-card--image3">
                <div className="offer-card__content">
                  <h3 className="offer-card__title">For those who dream of stars</h3>
                  <p className="offer-card__text">Our offer: make your dream come true.</p>
                  <button type="button" className="button button--secondary offer-card__button">
                    Learn more
                  </button>
                </div>
              </article>
            </div>

            {/* 4-я (большая снизу) */}
            <article className="offer-card offer-card--wide offer-card--bottom offer-card--image4">
              <div className="offer-card__content">
                <h3 className="offer-card__title">Fulfill your fantastic dreams</h3>
                <p className="offer-card__text">Space has never been so close.</p>
                <button type="button" className="button button--secondary offer-card__button">
                  Learn more
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* ARTICLE + READ MORE (CSS only) */}
        <section className="article" id="journey">
          <div className="article__inner">
            <h2 className="article__title">Embark on a space journey</h2>

            <div className="article__body">
              <p className="article__text">
                Travelling into space is one of the most exciting and unforgettable adventures that
                can change your life forever. And if you have ever dreamed of exploring stars,
                planets and galaxies, then our company is ready to help you realize this dream. We
                offer a unique experience that will allow you to go on a space journey and see all
                the secrets of the universe. We guarantee that every moment in space will be filled
                with incredible impressions, excitement and new discoveries. Our team of
                professionals takes care of your safety and comfort so that you can fully enjoy your
                adventure in space. We offer various options for space excursions.
                <span className="article__text-full">
                  {' '}
                  Modern technologies are turning what was recently science fiction into reality.
                  Our company offers safe and carefully prepared tours that will allow you to enjoy
                  every moment of your journey. Training, support from experienced instructors and
                  comfortable conditions on board will make your adventure not only exciting, but
                  also as comfortable as possible.
                </span>
              </p>

              <div className="article__controls">
                <label
                  htmlFor="article-toggle"
                  className="article__read-more article__read-more--more"
                >
                  Read more
                </label>
                <label
                  htmlFor="article-toggle"
                  className="article__read-more article__read-more--less"
                >
                  Read less
                </label>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__badge">
            <span className="footer__badge-icon">🚀</span>
            <span className="footer__badge-text">Exciting space adventure!</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
