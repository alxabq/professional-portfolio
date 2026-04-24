import React, { useState } from 'react';



function AboutMe({ onBack }) {
  const [activeTab, setActiveTab] = useState('background');

  // Animation key resetter to re-trigger CSS animations on tab switch
  const animKey = `tab-${activeTab}`;

  return (
    <section id="about" className="split-layout" style={{ minHeight: '100vh', position: 'relative' }}>
      <button className="about-back-btn" onClick={onBack}>
        ← Back
      </button>
      {/* ── LEFT PANEL (Beige Side) ── */}
      <div className="panel-left" style={{ padding: '4rem 8%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="profile-container">
          <div className="profile-offset-box" style={{ backgroundColor: '#D4B2AA' }}></div>
          <div className="profile-img-wrap">
            <img
              src={require('./image/picko.jpg')}
              alt="Alessandra R. Abuque"
              className="profile-img"
            />
          </div>
        </div>

        <h1 className="name-feature" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: '0.5rem 0', color: '#1A1A1A' }}>Behind the Code</h1>
        <p className="subtitle" style={{ fontSize: '1.05rem', marginBottom: '2rem', color: '#555' }}>Aspiring Engineer & Leader</p>

        {/* Updated Left Panel Layout: Sleek floating badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%', maxWidth: '340px' }}>
          <div style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.8)', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ flex: 1, textAlign: 'center', paddingRight: '20px' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', fontWeight: 600 }}>Degree</div>
              <div style={{ fontSize: '0.95rem', color: '#313133', fontWeight: 600 }}>BS Computer Engineering</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.8)', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ flex: 1, textAlign: 'center', paddingRight: '20px' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', fontWeight: 600 }}>Status</div>
              <div style={{ fontSize: '0.95rem', color: '#313133', fontWeight: 600 }}>3rd Year · ICPEP.SE-FC VP</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.8)', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ flex: 1, textAlign: 'center', paddingRight: '20px' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', fontWeight: 600 }}>Location</div>
              <div style={{ fontSize: '0.95rem', color: '#313133', fontWeight: 600 }}>Batangas, Philippines</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.8)', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ flex: 1, textAlign: 'center', paddingRight: '20px' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', fontWeight: 600 }}>Availability</div>
              <div style={{ fontSize: '0.95rem', color: '#313133', fontWeight: 600 }}>Open to Opportunities</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL (Dusty Pink Side) ── */}
      <div className="panel-right" style={{ display: 'flex', flexDirection: 'column', padding: '4rem 8%', gap: '2rem', justifyContent: 'center' }}>

        <div className="about-interactive-tabs" style={{ display: 'flex', gap: '0.5rem', width: '100%', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          <button onClick={() => setActiveTab('background')} className={`btn-dark btn-tech-hover ${activeTab === 'background' ? 'active-tab' : ''}`} style={{ flex: '1', padding: '0.8rem', fontSize: '0.85rem', borderRadius: '12px' }}>Background</button>
          <button onClick={() => setActiveTab('interests')} className={`btn-dark btn-tech-hover ${activeTab === 'interests' ? 'active-tab' : ''}`} style={{ flex: '1', padding: '0.8rem', fontSize: '0.85rem', borderRadius: '12px' }}>Interests</button>
          <button onClick={() => setActiveTab('goals')} className={`btn-dark btn-tech-hover ${activeTab === 'goals' ? 'active-tab' : ''}`} style={{ flex: '1', padding: '0.8rem', fontSize: '0.85rem', borderRadius: '12px' }}>Career</button>
          <button onClick={() => setActiveTab('strengths')} className={`btn-dark btn-tech-hover ${activeTab === 'strengths' ? 'active-tab' : ''}`} style={{ flex: '1', padding: '0.8rem', fontSize: '0.85rem', borderRadius: '12px' }}>Strengths</button>
        </div>

        <div className="about-content-display fade-in-container" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Key ensures React completely re-mounts the div, triggering the description typewriter effect */}
          <div key={animKey} className="typewriter-fade">
            {activeTab === 'background' && (
              <>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: '800' }}>Know More About Me</h3>
                <p style={{ color: '#4A4A4A', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  I’m a 22-year-old <span className="highlight-tag">Computer Engineering student</span> and the  <span className="highlight-tag">Vice President for Academic Affairs</span> of ICPEP.SE-FC. My role allows me to connect with fellow students and support their academic journey.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  Now in my 3rd year, I am building knowledge in <span className="highlight-tag">hardware</span> and <span className="highlight-tag">software</span>. Each semester brings challenges that help me grow as a future engineer!
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  Outside of academics, I enjoy working with people, joining events, and being part of activities that build teamwork and community. I value experiences that help me<span className="highlight-tag">grow</span> not just in knowledge, but also in character.
                </p>
              </>
            )}

            {activeTab === 'interests' && (
              <>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: '800' }}>Exploring Knowledge and Wellness</h3>
                <p style={{ color: '#4A4A4A', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  I enjoy learning new things, especially in the medical field where technology and healthcare meet. <span className="highlight-tag">Sports</span> are also a big part of my life, keeping me active and balanced.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  My strongest interest is in <span className="highlight-tag">biomedical engineering</span>, where science and innovation can improve patient care. I’m fascinated by how <span className="highlight-tag">artificial intelligence</span> can create new diagnostic tools that make healthcare more efficient and directly help people’s well-being.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  Sports connect to this <span className="highlight-tag">passion</span> because they highlight the importance of health, endurance, and recovery. Understanding how the body performs in athletics inspires me to explore biomedical solutions that can support both everyday wellness and medical care.
                </p>
              </>
            )}

            {activeTab === 'goals' && (
              <>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: '800' }}>Career Aspirations</h3>
                <p style={{ color: '#4A4A4A', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  I aim to work in a place where I can gain valuable experience, expand my knowledge, and grow in a supportive work environment. Having fair compensation is important, but what matters most to me is <span className="highlight-tag">continuous learning</span> and being part of a team that values growth.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: '1.9', fontSize: '1.05rem' }}>
                  <span className="highlight-tag">Someday</span>, I would love to deepen my understanding of biomedical engineering, exploring how technology can improve healthcare and make a real difference in people’s lives.
                </p>
              </>
            )}

            {activeTab === 'strengths' && (
              <>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '1.2rem', fontWeight: '800' }}>My Strengths</h3>
                <p style={{ color: '#4A4A4A', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  Driven by curiosity and ambition, I adapt quickly to new technologies and excel under pressure. I pride myself on these core abilities:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1rem' }}>
                  <span className="highlight-tag" style={{ background: 'rgba(192, 157, 150, 0.25)', boxShadow: 'none', border: '1px solid #CFADA6' }}>Problem Solver</span>
                  <span className="highlight-tag" style={{ background: 'rgba(192, 157, 150, 0.25)', boxShadow: 'none', border: '1px solid #CFADA6' }}>Fast Learner</span>
                  <span className="highlight-tag" style={{ background: 'rgba(192, 157, 150, 0.25)', boxShadow: 'none', border: '1px solid #CFADA6' }}>Team Leader</span>
                  <span className="highlight-tag" style={{ background: 'rgba(192, 157, 150, 0.25)', boxShadow: 'none', border: '1px solid #CFADA6' }}>Critical Thinker</span>
                  <span className="highlight-tag" style={{ background: 'rgba(192, 157, 150, 0.25)', boxShadow: 'none', border: '1px solid #CFADA6' }}>Detail-Oriented</span>
                  <span className="highlight-tag" style={{ background: 'rgba(192, 157, 150, 0.25)', boxShadow: 'none', border: '1px solid #CFADA6' }}>Knowledge Seeker</span>
                  <span className="highlight-tag" style={{ background: 'rgba(192, 157, 150, 0.25)', boxShadow: 'none', border: '1px solid #CFADA6' }}>Adaptable</span>
                  <span className="highlight-tag" style={{ background: 'rgba(192, 157, 150, 0.25)', boxShadow: 'none', border: '1px solid #CFADA6' }}>Good Communicator</span>
                  <span className="highlight-tag" style={{ background: 'rgba(192, 157, 150, 0.25)', boxShadow: 'none', border: '1px solid #CFADA6' }}>Collaborative Worker</span>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;