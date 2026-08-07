import "./Dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard">

      <header className="dashboard-header">
        <div>
          <p className="eyebrow">YOUR 60-DAY JOURNEY</p>
          <h1>Hey, Builder 👋</h1>
        </div>

        <div className="avatar">B</div>
      </header>

      <section className="streak-card">
        <div>
          <span className="streak-label">CURRENT STREAK</span>
          <h2>🔥 11 Days</h2>
          <p>You're on fire. Keep showing up.</p>
        </div>

        <div className="streak-circle">18%</div>
      </section>

      <section className="today-section">
        <div className="section-top">
          <div>
            <p className="eyebrow">TODAY'S MISSION</p>
            <h2>Day 12</h2>
          </div>

          <span className="difficulty">MEDIUM</span>
        </div>

        <div className="task-card">
          <span className="task-icon">⌘</span>

          <h3>Build a Login Experience</h3>

          <p>
            Create a responsive login and signup interface with
            validation and a clean user experience.
          </p>

          <div className="task-info">
            <span>⏱ 2 hours</span>
            <span>💻 Web Development</span>
          </div>

          <button
            className="dashboard-button"
            onClick={() => {
              window.location.href = "/day/12";
            }}
          >
            Start today's task →
          </button>
        </div>
      </section>

      <section className="progress-section">
        <div className="section-top">
          <div>
            <p className="eyebrow">YOUR PROGRESS</p>
            <h2>18% Complete</h2>
          </div>

          <span>11 / 60 days</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </section>

      <section className="achievements">
        <p className="eyebrow">ACHIEVEMENTS</p>

        <div className="achievement-grid">
          <div className="achievement">
            <span>🏁</span>
            <strong>First Commit</strong>
            <small>Day 1</small>
          </div>

          <div className="achievement">
            <span>🔥</span>
            <strong>7 Day Streak</strong>
            <small>Unlocked</small>
          </div>

          <div className="achievement locked">
            <span>🚀</span>
            <strong>30 Day Streak</strong>
            <small>19 days to go</small>
          </div>
        </div>
      </section>

      <section className="standing">
        <p className="eyebrow">YOUR STANDING</p>

        <div className="standing-card">
          <div>
            <small>GLOBAL RANK</small>
            <strong>#45</strong>
          </div>

          <div>
            <small>PERCENTILE</small>
            <strong>TOP 9%</strong>
          </div>

          <div>
            <small>SUBMISSIONS</small>
            <strong>11</strong>
          </div>
        </div>
      </section>

      <section 
  className="coach"
  onClick={() => {
    window.location.href = "/ai-coach";
  }}
>
  <span>✦ AI COACH</span>

  <h2>Your streak is stronger than your excuses.</h2>

  <p>
    You've shown up for 11 days. Tomorrow is another chance
    to prove you can keep going.
  </p>
</section>

      <nav className="bottom-nav">

  <a className="active"
    onClick={() => window.location.href="/dashboard"}>
    ⌂<span>Home</span>
  </a>

  <a onClick={() => window.location.href="/day/12"}>
    ▣<span>Challenge</span>
  </a>

  <a onClick={() => window.location.href="/rank"}>
    ♛<span>Rank</span>
  </a>

  <a onClick={() => window.location.href="/profile"}>
    ●<span>Profile</span>
  </a>

</nav>

    </main>
  );
}

export default Dashboard;
