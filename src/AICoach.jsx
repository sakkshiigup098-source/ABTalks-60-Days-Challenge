import "./AICoach.css";

function AICoach() {
  return (
    <main className="ai-coach">

      <header className="coach-header">

        <button
          className="back-button"
          onClick={() => window.location.href="/dashboard"}
        >
          ←
        </button>

        <div>
          <p>AI COACH</p>
          <h1>Your Personal Mentor</h1>
        </div>

      </header>


      <section className="coach-card">

        <span>✦ AI INSIGHT</span>

        <h2>
          You're building consistency.
        </h2>

        <p>
          You have completed 11 days of your challenge.
          Keep your momentum and focus on small improvements daily.
        </p>
        <div className="progress-insight">
  <strong>Next Recommendation</strong>
  <p>
    Your frontend skills are improving. Try adding an API
    connection to make your next project full-stack.
  </p>
</div>


      </section>


      <section className="suggestions">

        <p className="section-label">
          TODAY'S GUIDANCE
        </p>


        <div className="suggestion-card">
          <span>🎯</span>

          <div>
            <strong>Focus Task</strong>
            <p>
              Complete your login experience and test responsiveness.
            </p>
          </div>
        </div>


        <div className="suggestion-card">
          <span>💡</span>

          <div>
            <strong>Learning Tip</strong>
            <p>
              Spend 20 minutes learning form validation techniques.
            </p>
          </div>
        </div>


        <div className="suggestion-card">
          <span>🔥</span>

          <div>
            <strong>Motivation</strong>
            <p>
              Small progress every day creates big results.
            </p>
          </div>
        </div>


      </section>


      <section className="chat-box">

        <p>
          Ask your AI Coach
        </p>

        <div className="message">
          How can I improve my coding skills?
        </div>

        <div className="ai-message">
          Keep building projects, practice daily, and review your mistakes.
        </div>


        <input
          placeholder="Ask anything..."
        />

      </section>


    </main>
  );
}

export default AICoach;