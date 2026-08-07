import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ChallengeDay from "./ChallengeDay";
import "./App.css";

function LandingPage() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">
          AB<span>Talks</span>
        </div>

        <button className="login-btn">Log in</button>
      </nav>

      <section className="hero">
        <div className="badge">🇮🇳 BUILT FOR INDIAN STUDENTS</div>

        <h1>
          60 days.
          <br />
          <span>One project.</span>
          <br />
          A better you.
        </h1>

        <p className="hero-description">
          Build something every day. Prove your work on GitHub and LinkedIn.
          Turn consistency into a portfolio recruiters can see.
        </p>

        <button className="start-btn">
          Start the 60-Day Challenge →
        </button>

        <p className="small-text">
          No experience required · Start anytime
        </p>
      </section>

      <section className="stats">
        <div>
          <strong>60</strong>
          <span>DAYS</span>
        </div>

        <div>
          <strong>1</strong>
          <span>BUILD / DAY</span>
        </div>

        <div>
          <strong>2</strong>
          <span>PROOFS / DAY</span>
        </div>
      </section>

      <section className="how">
        <p className="section-label">HOW IT WORKS</p>

        <h2>
          Show up.
          <br />
          Build. Repeat.
        </h2>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Pick a track</h3>
            <p>
              Choose what you want to become better at: Web, AI,
              Cybersecurity and more.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Build every day</h3>
            <p>
              Complete one focused task each day and push your work to GitHub.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Build in public</h3>
            <p>
              Share your progress on LinkedIn and create a public record
              of your growth.
            </p>
          </div>
        </div>
      </section>

      <section className="tracks">
        <p className="section-label">CHOOSE YOUR PATH</p>

        <h2>What will you build?</h2>

        <div className="track-grid">
          <div className="track-card">
            <span>01</span>
            <h3>Web Development</h3>
            <p>Build websites and full-stack applications.</p>
          </div>

          <div className="track-card">
            <span>02</span>
            <h3>AI / ML</h3>
            <p>Build intelligent applications using AI.</p>
          </div>

          <div className="track-card">
            <span>03</span>
            <h3>Cybersecurity</h3>
            <p>Learn security by building and breaking things.</p>
          </div>

          <div className="track-card">
            <span>04</span>
            <h3>App Development</h3>
            <p>Turn ideas into mobile applications.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p>YOUR FUTURE PORTFOLIO STARTS TODAY.</p>

        <h2>
          Don't wait for
          <br />
          motivation.
        </h2>

        <button className="start-btn">
          Start Day 1 →
        </button>
      </section>

      <footer>
        <div className="logo">
          AB<span>Talks</span>
        </div>

        <p>Build in public. Become undeniable.</p>
      </footer>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/day/12" element={<ChallengeDay />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;