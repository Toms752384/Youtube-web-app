import React from 'react';
import confetti from 'canvas-confetti';

function RegistButton() {
  return (
    //register button
    <div className="Dubi">
      <button className="confetti-button" onClick={() => confetti()}>Sign Up</button>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    </div>
  );
}

export default RegistButton;
