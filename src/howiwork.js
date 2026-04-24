import React, { useEffect, useRef } from 'react';


const flowSteps = [
  { num: '01', label: 'Understand the Problem', desc: 'The problem needs complete analysis which includes all aspects of its scope and its limitations, and its intended outcomes before any coding work begins.' },
  { num: '02', label: 'Plan & Design', desc: 'Select appropriate tools while creating a data flow diagram, and establish an achievable development schedule. ' },
  { num: '03', label: 'Prototype / Initial Build', desc: 'Create an operational initial product which will demonstrate the main idea while discovering unknown information throughout the initial project stage.' },
  { num: '04', label: 'Test & Debug', desc: 'The testing process requires complete tests which include identifying hidden testing scenarios and resolving problems until the system operates exactly according to its expected performance. ' },
  { num: '05', label: 'Optimize & Improve', desc: 'Enhance system performance through code optimization which results in better system performance, simplified code, and further improve the system performance through testing. ' },
  { num: '06', label: 'Final Output & Documentation', desc: 'Present a complete solution which includes proper documentation, a seamless transfer process, and detailed instructions on how to use the solution. ' },
  { num: '07', label: 'Iterate', desc: 'Gather feedback about the work while assessing the results to create better solutions for future use.' },
];

const principles = [
  {
    name: 'Analytical Thinking',
    desc: 'Breaking down complex problems into clear, manageable components before writing a single line of code.',
  },
  {
    name: 'Efficiency First',
    desc: 'Choosing approaches that save time and resources without sacrificing quality or maintainability.',
  },
  {
    name: 'Detail-Oriented',
    desc: 'Paying close attention to edge cases, UI polish, and logical accuracy in every solution.',
  },
  {
    name: 'Collaborative',
    desc: 'Working openly with interested party and teammates to align goals and deliver shared outcomes.',
  },
];

const tools = [
  { name: 'Python' },
  { name: 'PyQt6' },
  { name: 'SQLite' },
  { name: 'Multisim' },
  { name: 'Arduino' },
];

function HowIWork({ onBack }) {
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('hiw-visible');
        });
      },
      { threshold: 0.12 }
    );
    sectionRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  return (
    <div className="hiw-page">
      <button className="hiw-back-btn" onClick={onBack}>
        ← Back
      </button>

      {/* ── HERO HEADER ── */}
      <div className="hiw-hero">
        <div className="hiw-hero-line" />
        <p className="hiw-hero-eyebrow">methodology</p>
        <h1 className="hiw-hero-title">
          How I <span>Work</span>
        </h1>
        <p className="hiw-intro-quote">
          "I transform ideas into structured, working solutions — one step at a time."
        </p>
      </div>

      {/* ── FLOWCHART ── */}
      <div className="hiw-flowchart-section">
        <div className="hiw-flowchart-inner" ref={addRef}>
          <p className="hiw-section-label">process</p>
          <h2 className="hiw-section-title">My Workflow</h2>

          <div className="hiw-flow-track">
            {flowSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="hiw-flow-step">
                  <div className="hiw-flow-box">
                    <span className="hiw-flow-num">{step.num}</span>
                    <span className="hiw-flow-label">{step.label}</span>
                    <p className="hiw-flow-desc">{step.desc}</p>
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="hiw-flow-arrow">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M1 6H17M17 6L11 1M17 6L11 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="hiw-divider" />

      {/* ── KEY PRINCIPLES ── */}
      <div className="hiw-section" ref={addRef}>
        <p className="hiw-section-label">values</p>
        <h2 className="hiw-section-title">Key Principles</h2>
        <div className="hiw-principles-grid">
          {principles.map((p) => (
            <div className="hiw-principle-card" key={p.name}>
              <p className="hiw-principle-name">{p.name}</p>
              <p className="hiw-principle-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hiw-divider" />

      {/* ── TOOLS & TECHNOLOGIES ── */}
      <div className="hiw-tools-section">
        <div className="hiw-tools-inner" ref={addRef}>
          <p className="hiw-section-label">stack</p>
          <h2 className="hiw-section-title">Tools &amp; Technologies</h2>
          <div className="hiw-tools-track">
            {tools.map((t) => (
              <div className="hiw-tool-pill" key={t.name}>{t.name}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ── REAL PROJECT EXAMPLE ── */}
      <div className="hiw-project-section">
        <div className="hiw-project-inner" ref={addRef}>
          <p className="hiw-section-label">in practice</p>
          <h2 className="hiw-section-title">Real Project Example</h2>

          <div className="hiw-project-card">
            <div className="hiw-project-header">
              <span className="hiw-project-tag">Featured Project</span>
              <h3 className="hiw-project-name">Smart Elevator Control System</h3>
            </div>
            <div className="hiw-project-body">
              <div className="hiw-pob-item">
                <p className="hiw-pob-label problem"><span className="hiw-pob-dot" />Problem</p>
                <p className="hiw-pob-text">Traditional elevators rely on basic call functions, limited safety indicators, and lack sensor-based intelligence. Breakdowns often trap passengers, with poor monitoring and delayed emergency response.</p>
              </div>
              <div className="hiw-pob-item">
                <p className="hiw-pob-label solution"><span className="hiw-pob-dot" />Solution</p>
                <p className="hiw-pob-text">Developed a prototype using ESP32 microcontroller, modular C++ framework, and IoT-enabled sensors. Integrated SCAN scheduling algorithm, mechanical door locking, dual emergency activation (manual + automatic), and real-time GUI monitoring.</p>
              </div>
              <div className="hiw-pob-item">
                <p className="hiw-pob-label outcome"><span className="hiw-pob-dot" />Outcome</p>
                <p className="hiw-pob-text">Enhanced passenger safety and reliability through sensor-driven fault detection, faster emergency response, and transparent system monitoring. Established a scalable foundation for future upgrades including PID control, vibration-based fault detection, and full emergency automation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CALL TO ACTION ── */}
      <div className="hiw-cta-section">
        <p className="hiw-cta-quote">"Interested in working with me?"</p>
        <p className="hiw-cta-sub">Let's build something meaningful together.</p>
        <a
          href="https://forms.gle/pS1RraSNcPdbkBMVA"
          target="_blank"
          rel="noopener noreferrer"
          className="hiw-hire-btn"
        >
          Hire Me <span className="hiw-hire-arrow">→</span>
        </a>
      </div>

    </div>
  );
}

export default HowIWork;
