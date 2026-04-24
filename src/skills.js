import React, { useState, useEffect, useRef } from 'react';


/* ── Skill data ── */
const categories = [
  {
    id: 'programming',
    label: 'Programming & Software',
    tagline: 'Building logic, one line at a time',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'C / C++', level: 60 },
      { name: 'JavaScript', level: 70 },
      { name: 'HTML & CSS', level: 80 },
      { name: 'SQL', level: 80 },
      { name: 'Java', level: 65 },
      { name: 'Xilinx', level: 75 },
      { name: 'Quartus', level: 70 },
      { name: 'Matlab', level: 60 },
      { name: 'Octave', level: 80 },
      { name: 'EDA Playground', level: 85 },
    ],
  },
  {
    id: 'hardware',
    label: 'Hardware & Embedded Systems',
    tagline: 'Bridging the physical and digital',
    skills: [
      { name: 'Arduino', level: 90 },
      { name: 'ESP32', level: 85 },
      { name: 'Circuit Design', level: 75 },
      { name: 'Altium Design', level: 65 },
      { name: 'Soldering & Prototyping', level: 75 },
      { name: 'Sensor Integration', level: 80 },
    ],
  },
  {
    id: 'control',
    label: 'Control Systems & IoT',
    tagline: 'Connecting systems, automating solutions',
    skills: [
      { name: 'System modeling and transfer functions', level: 70 },
      { name: 'IoT applications (MQTT, WiFi, Bluetooth)', level: 70 },
      { name: 'Robotics basics (motor control, PWM)', level: 70 },
    ],
  },
  {
    id: 'tools',
    label: 'Software Tools & Productivity',
    tagline: 'Tools that power the workflow',
    skills: [
      { name: 'GitHub', level: 65 },
      { name: 'VS Code', level: 80 },
      { name: 'Microsoft Office', level: 90 },
      { name: 'Google Workspace', level: 90 },
    ],
  },
  {
    id: 'design',
    label: 'Design & Multimedia',
    tagline: 'Where creativity meets engineering',
    skills: [
      { name: 'Canva', level: 70 },
      { name: 'Video Editing', level: 60 },
      { name: 'UI/UX Basics', level: 50 },
      { name: 'Technical Drawing', level: 65 },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    tagline: 'The human side of engineering',
    skills: [
      { name: 'Team Collaboration', level: 100 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Communication', level: 90 },
      { name: 'Time Management', level: 85 },
      { name: 'Adaptability', level: 95 },
      { name: 'Leadership', level: 95 },
      { name: 'Creativity and innovation', level: 80 },
      { name: 'Critical thinking', level: 85 },
      { name: 'Detail orientation', level: 85 },
    ],
  },
];

/* ── Progress Bar Component ── */
function ProgressBar({ level, animate }) {
  return (
    <div className="sk-bar-track">
      <div
        className="sk-bar-fill"
        style={{ width: animate ? `${level}%` : '0%' }}
      />
      <span className="sk-bar-pct">{level}%</span>
    </div>
  );
}

/* ── Skills Page ── */
function Skills({ onBack }) {
  const [activeTab, setActiveTab] = useState('programming');
  const [animate, setAnimate] = useState(false);
  const tabContentRef = useRef(null);

  /* trigger bar animation on mount and tab change */
  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(t);
  }, [activeTab]);

  const active = categories.find((c) => c.id === activeTab);

  return (
    <div className="sk-page">
      {/* ── HERO ── */}
      <section className="sk-hero">
        <div className="sk-hero-line" />
        <div className="sk-hero-dot-grid" />

        <button className="sk-back-btn" onClick={onBack}>
          ← Back
        </button>

        <p className="sk-hero-eyebrow">skills &amp; expertise</p>
        <h1 className="sk-hero-title">
          My <span>Skillset</span>
        </h1>
        <p className="sk-hero-intro">
          A mix of technical skills and creative ideas, shaped through classes, projects, and hands-on work. Here’s what I can offer.
        </p>
      </section>

      {/* ── CATEGORY CARDS GRID ── */}
      <section className="sk-cards-section">
        <div className="sk-cards-inner">
          <p className="sk-section-label">Skill Categories</p>
          <div className="sk-cards-grid">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`sk-card ${activeTab === cat.id ? 'sk-card--active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <span className="sk-card-label">{cat.label}</span>
                <span className="sk-card-tagline">{cat.tagline}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABBED SKILL DETAILS ── */}
      <section className="sk-details-section">
        <div className="sk-details-inner">
          {/* Tab strip */}
          <div className="sk-tab-strip">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`sk-tab ${activeTab === cat.id ? 'sk-tab--active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="sk-tab-content" ref={tabContentRef} key={activeTab}>
            <div className="sk-tab-header">
              <div>
                <h2 className="sk-tab-title">{active.label}</h2>
                <p className="sk-tab-tagline">{active.tagline}</p>
              </div>
            </div>

            <div className="sk-skills-list">
              {active.skills.map((skill, i) => (
                <div
                  className="sk-skill-row"
                  key={skill.name}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="sk-skill-name">{skill.name}</span>
                  <ProgressBar level={skill.level} animate={animate} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sk-cta-section">
        <div className="sk-cta-section-dots" />
        <h2 className="sk-cta-title">Want to see these skills in action?</h2>
        <p className="sk-cta-sub">
          Check out my projects or reach out to discuss a collaboration.
        </p>
        <a
          href="https://forms.gle/pS1RraSNcPdbkBMVA"
          target="_blank"
          rel="noopener noreferrer"
          className="sk-cta-btn"
        >
          Let's Work Together <span className="sk-cta-arrow">→</span>
        </a>
      </section>
    </div>
  );
}

export default Skills;
