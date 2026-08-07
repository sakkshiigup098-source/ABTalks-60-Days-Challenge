import "./Profile.css";

function Profile() {
  return (
    <main className="profile">

      <header className="profile-header">
        <button
          className="back-button"
          onClick={() => window.location.href="/dashboard"}
        >
          ←
        </button>

        <p>PROFILE</p>
      </header>


      <section className="profile-card">

        <div className="profile-avatar">
          B
        </div>

        <h1>Builder</h1>

        <p>
          Frontend Developer • 60-Day Challenger
        </p>

      </section>


      <section className="stats">

        <div>
          <strong>11</strong>
          <span>Days</span>
        </div>

        <div>
          <strong>18%</strong>
          <span>Progress</span>
        </div>

        <div>
          <strong>#45</strong>
          <span>Rank</span>
        </div>

      </section>


      <section className="profile-section">

        <p className="label">
          ACHIEVEMENTS
        </p>

        <div className="profile-achievements">

          <div>
            🏁
            <span>First Commit</span>
          </div>

          <div>
            🔥
            <span>7 Day Streak</span>
          </div>

          <div className="locked">
            🚀
            <span>30 Days</span>
          </div>

        </div>

      </section>


      <section className="profile-section">

        <p className="label">
          SETTINGS
        </p>

        <div className="settings-card">

          <div>
            Account
            <span>›</span>
          </div>

          <div>
            Notifications
            <span>›</span>
          </div>

          <div>
            Logout
            <span>›</span>
          </div>

        </div>

      </section>


    </main>
  );
}

export default Profile;