import "./Landing.css";

function Landing() {
  return (
    <main className="landing">

      <header className="landing-header">
        <h1>ABTalks</h1>
        <span>60-Day Challenge</span>
      </header>

      <section className="hero">
        <h2>
          Build Every Day.
          <br />
          Become a Better Developer.
        </h2>

        <p>
          A 60-day coding challenge where students build projects,
          maintain streaks, and showcase their skills.
        </p>

        <button>
          Start Your Journey →
        </button>
      </section>

      <section className="stats">
        <div>
          <strong>60</strong>
          <span>Days</span>
        </div>

        <div>
          <strong>5000+</strong>
          <span>Students</span>
        </div>

        <div>
          <strong>1000+</strong>
          <span>Projects</span>
        </div>
      </section>

      <section className="tracks">
        <h2>Choose Your Track</h2>

        <div className="track-card">
          💻 Web Development
        </div>

        <div className="track-card">
          🤖 AI / ML
        </div>

        <div className="track-card">
          🔐 Cybersecurity
        </div>
      </section>

    </main>
  );
}

export default Landing;