import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/plants";
  };

  return (
    <div className="app">
      <section className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Bring the beauty of nature into your home with our collection
            of beautiful and healthy houseplants.
          </p>

          <button
            className="get-started-btn"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
