import React, { useState, useEffect } from 'react';

import HomePage from './homepage';
import AboutMe from './aboutme';
import HowIWork from './howiwork';
import Blog from './blog';
import Skills from './skills';
import Projects from './projects';

function App() {
  const [page, setPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToTopBtn = (
    <button
      className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      A.R.A.
    </button>
  );

  if (page === 'blog') {
    return (
      <>
        <header className="cute-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <a
            href="#top"
            className="header-logo"
            style={{ textDecoration: 'none' }}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
          >
            <span>A.R.A.</span>
          </a>
          <button
            className="header-home-btn"
            style={{ background: 'none', border: '1px solid rgba(192,157,150,0.3)', cursor: 'pointer' }}
            onClick={() => goTo('home')}
          >
            Home
          </button>
        </header>
        <Blog onBack={() => goTo('home')} />
        {backToTopBtn}
      </>
    );
  }

  if (page === 'skills') {
    return (
      <>
        <header className="cute-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <a
            href="#top"
            className="header-logo"
            style={{ textDecoration: 'none' }}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
          >
            <span>A.R.A.</span>
          </a>
          <button
            className="header-home-btn"
            style={{ background: 'none', border: '1px solid rgba(192,157,150,0.3)', cursor: 'pointer' }}
            onClick={() => goTo('home')}
          >
            Home
          </button>
        </header>
        <Skills onBack={() => goTo('home')} />
        {backToTopBtn}
      </>
    );
  }

  if (page === 'howiwork') {
    return (
      <>
        <header className="cute-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <a
            href="#top"
            className="header-logo"
            style={{ textDecoration: 'none' }}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
          >
            <span>A.R.A.</span>
          </a>
          <button
            className="header-home-btn"
            style={{ background: 'none', border: '1px solid rgba(192,157,150,0.3)', cursor: 'pointer' }}
            onClick={() => goTo('home')}
          >
            Home
          </button>
        </header>
        <HowIWork onBack={() => goTo('home')} />
        {backToTopBtn}
      </>
    );
  }

  if (page === 'projects') {
    return (
      <>
        <header className="cute-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <a
            href="#top"
            className="header-logo"
            style={{ textDecoration: 'none' }}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
          >
            <span>A.R.A.</span>
          </a>
          <button
            className="header-home-btn"
            style={{ background: 'none', border: '1px solid rgba(192,157,150,0.3)', cursor: 'pointer' }}
            onClick={() => goTo('home')}
          >
            Home
          </button>
        </header>
        <Projects onBack={() => goTo('home')} />
        {backToTopBtn}
      </>
    );
  }

  if (page === 'about') {
    return (
      <>
        <header className="cute-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <a
            href="#top"
            className="header-logo"
            style={{ textDecoration: 'none' }}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
          >
            <span>A.R.A.</span>
          </a>
          <button
            className="header-home-btn"
            style={{ background: 'none', border: '1px solid rgba(192,157,150,0.3)', cursor: 'pointer' }}
            onClick={() => goTo('home')}
          >
            Home
          </button>
        </header>
        <AboutMe onBack={() => goTo('home')} />
        {backToTopBtn}
      </>
    );
  }

  return (
    <>
      <main className="page-wrapper" style={{ paddingTop: 0 }}>
        <header className="cute-header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <a
            href="#top"
            className="header-logo"
            style={{ textDecoration: 'none' }}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
          >
            <span>A.R.A.</span>
          </a>
          <a href="#home" className="header-home-btn" aria-label="Back to home">
            Home
          </a>
        </header>

        <HomePage onNavigate={goTo} />
      </main>


      {backToTopBtn}
    </>
  );
}

export default App;