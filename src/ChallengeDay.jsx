import "./ChallengeDay.css";

function ChallengeDay() {
  return (
    <main className="challenge-day">

      <header className="day-header">
        <button
          className="back-button"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          ←
        </button>

        <div>
          <p>60-DAY CHALLENGE</p>
          <strong>DAY 12 / 60</strong>
        </div>
      </header>

      <section className="day-intro">
        <span className="day-badge">DAY 12</span>

        <h1>Build a Login Experience</h1>

        <p>
          Create a clean, responsive login and signup experience
          that feels simple and trustworthy.
        </p>

        <div className="day-meta">
          <span>⏱ 2 hours</span>
          <span>● Medium</span>
          <span>💻 Web Development</span>
        </div>
      </section>

      <section className="task-section">

        <p className="section-label">YOUR MISSION</p>

        <div className="mission-card">
          <h2>What you need to build</h2>

          <p>
            Build a responsive authentication screen that includes:
          </p>

          <ul>
            <li>✓ Email and password fields</li>
            <li>✓ Login button</li>
            <li>✓ Form validation</li>
            <li>✓ Mobile-friendly design</li>
            <li>✓ A clean user experience</li>
          </ul>
        </div>

      </section>

      <section className="proof-section">

        <p className="section-label">PROVE YOUR WORK</p>

        <div className="proof-card">

          <h2>1. GitHub</h2>

          <p>
            Submit the repository or commit containing today's work.
          </p>

          <input
            type="text"
            placeholder="https://github.com/username/repository"
          />

          <input
            type="text"
            placeholder="GitHub commit URL"
          />

          <div className="proof-status">
            ✓ GitHub proof added
          </div>

        </div>

        <div className="proof-card">

          <h2>2. LinkedIn</h2>

          <p>
            Share what you built and what you learned today.
          </p>

          <input
            type="text"
            placeholder="LinkedIn post URL"
          />

        </div>

        <div className="proof-card">

          <h2>3. Live deployment</h2>

          <p>
            Add the URL where someone can try your project.
          </p>

          <input
            type="text"
            placeholder="https://your-project.vercel.app"
          />

        </div>

      </section>

      <section className="reflection">

        <p className="section-label">QUICK REFLECTION</p>

        <textarea
          placeholder="What did you learn today?"
          rows="4"
        ></textarea>

      </section>

      <button className="submit-day">
        Submit Day 12 →
      </button>

      <p className="submit-note">
        Your submission will be added to your public challenge history.
      </p>

    </main>
  );
}

export default ChallengeDay;
