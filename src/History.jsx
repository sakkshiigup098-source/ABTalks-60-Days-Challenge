import "./History.css";

function History() {
  return (
    <main className="history">

      <header className="history-header">

        <button
          className="back-button"
          onClick={() => window.location.href="/dashboard"}
        >
          ←
        </button>

        <div>
          <p>CHALLENGE HISTORY</p>
          <h1>Your Journey</h1>
        </div>

      </header>


      <section className="history-summary">

        <div>
          <strong>11</strong>
          <span>Completed</span>
        </div>

        <div>
          <strong>18%</strong>
          <span>Progress</span>
        </div>

        <div>
          <strong>11</strong>
          <span>Submissions</span>
        </div>

      </section>


      <section className="timeline">

        <p className="section-label">
          RECENT DAYS
        </p>


        <div className="history-card completed">

          <div className="day-number">
            ✓
          </div>

          <div>
            <h3>Day 11</h3>
            <p>Build a Portfolio Section</p>

            <small>
              GitHub ✓ • LinkedIn ✓
            </small>
          </div>

        </div>


        <div className="history-card completed">

          <div className="day-number">
            ✓
          </div>

          <div>
            <h3>Day 10</h3>
            <p>Create API Integration</p>

            <small>
              GitHub ✓ • Deployment ✓
            </small>
          </div>

        </div>


        <div className="history-card current">

          <div className="day-number">
            12
          </div>

          <div>
            <h3>Day 12</h3>
            <p>Build a Login Experience</p>

            <small>
              In Progress
            </small>
          </div>

        </div>


      </section>


    </main>
  );
}

export default History;