import React, { useState } from "react";
import "../src/styles.css";

const App = () => {
  const [showCard, setShowCard] = useState(false);

  function showCardAnimation() {
    setShowCard(!showCard);
    setTimeout(() => {
      setShowCard(false);
    }, 2000);
  }

  return (
    <div className="container">
      <div className="card-container">
        <div className={`card ${showCard ? "animation-card" : ""}`}></div>
      </div>
      <button onClick={showCardAnimation}>Add</button>
    </div>
  );
};

export default App;
