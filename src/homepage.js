import React, { useState, useEffect } from 'react';


function HomePage({ onNavigate }) {
  const fullTitle1 = "Engineering";
  const fullTitle2 = "Profile";
  const fullDesc = "I am a Computer Engineering student with a strong interest in developing real-world systems through both hardware and software. With experience in embedded systems and hands-on projects, I focus on building efficient, functional solutions and continuously refining my skills as an aspiring engineer.";

  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [desc, setDesc] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase === 0) {
      if (t1.length < fullTitle1.length) {
        const t = setTimeout(() => setT1(fullTitle1.slice(0, t1.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase(1), 150);
        return () => clearTimeout(t);
      }
    } else if (phase === 1) {
      if (t2.length < fullTitle2.length) {
        const t = setTimeout(() => setT2(fullTitle2.slice(0, t2.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase(2), 250);
        return () => clearTimeout(t);
      }
    } else if (phase === 2) {
      if (desc < fullDesc.length) {
        const t = setTimeout(() => setDesc(desc + 1), 15);
        return () => clearTimeout(t);
      } else {
        setPhase(3);
      }
    }
  }, [phase, t1, t2, desc]);

  const renderHighlighted = (textStr) => {
    const keywords = ['hardware', 'software', 'embedded systems'];
    let elements = [textStr];
    keywords.forEach(kw => {
      elements = elements.flatMap(el => {
        if (typeof el !== 'string') return [el];
        const parts = el.split(kw);
        const res = [];
        for (let i = 0; i < parts.length; i++) {
          res.push(parts[i]);
          if (i < parts.length - 1) {
            res.push(<span key={kw + i} className="highlight-tag">{kw}</span>);
          }
        }
        return res;
      });
    });
    return elements;
  };

  return (
    <section id="home" className="split-layout">

      {/* ── LEFT PANEL (Beige) ── */}
      <div className="panel-left">
        <div className="profile-container">
          <div className="profile-offset-box"></div>
          <div className="profile-img-wrap">
            <img
              src={require('./image/picko.jpg')}
              alt="Alessandra R. Abuque"
              className="profile-img"
            />
          </div>
        </div>

        <h1 className="name-feature">ABUQUE, ALESSANDRA R.</h1>
        <p className="subtitle">Computer Engineering Student</p>

        <div className="left-buttons">
          <a href="https://forms.gle/pS1RraSNcPdbkBMVA" target="_blank" rel="noopener noreferrer" className="btn-dark btn-tech-hover"><span className="btn-text">Hire Me</span><span className="btn-arrow">→</span></a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-dark btn-tech-hover"><span className="btn-text">Download Resume</span><span className="btn-arrow">→</span></a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/alxabq" aria-label="GitHub" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/alxabq/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.facebook.com/alessandra.abuque" aria-label="Facebook" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/alessandra-abuque-630919405/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── RIGHT PANEL (Dusty Pink) ── */}
      <div className="panel-right">
        <h2>
          {t1}{(phase === 0) && <span className="caret">|</span>}<br />
          {t2}{(phase === 1) && <span className="caret">|</span>}
        </h2>
        <p>
          {renderHighlighted(fullDesc.slice(0, desc))}
          {(phase === 2) && <span className="caret">|</span>}
        </p>

        <div className="nav-grid">
          <button onClick={() => onNavigate('about')} className="btn-dark btn-grid btn-tech-hover" style={{ border: 'none', cursor: 'pointer' }}><span className="btn-num">01</span><span className="btn-text">About</span><span className="btn-arrow">→</span></button>
          <button onClick={() => onNavigate('howiwork')} className="btn-dark btn-grid btn-tech-hover" style={{ border: 'none', cursor: 'pointer' }}><span className="btn-num">02</span><span className="btn-text">How I Work</span><span className="btn-arrow">→</span></button>
          <button onClick={() => onNavigate('skills')} className="btn-dark btn-grid btn-tech-hover" style={{ border: 'none', cursor: 'pointer' }}><span className="btn-num">03</span><span className="btn-text">Skills</span><span className="btn-arrow">→</span></button>
          <button onClick={() => onNavigate('projects')} className="btn-dark btn-grid btn-tech-hover" style={{ border: 'none', cursor: 'pointer' }}><span className="btn-num">04</span><span className="btn-text">Projects</span><span className="btn-arrow">→</span></button>
          <a href="/Certificates_Abuque.pdf" target="_blank" rel="noopener noreferrer" className="btn-dark btn-grid btn-tech-hover"><span className="btn-num">05</span><span className="btn-text">Certificates</span><span className="btn-arrow">→</span></a>
          <button onClick={() => onNavigate('blog')} className="btn-dark btn-grid btn-tech-hover" style={{ border: 'none', cursor: 'pointer' }}><span className="btn-num">06</span><span className="btn-text">Blog</span><span className="btn-arrow">→</span></button>
        </div>

        <p className="panel-right-footer">© 2026 Alessandra R. Abuque</p>
      </div>

    </section>
  );
}

export default HomePage;