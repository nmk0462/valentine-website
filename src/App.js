import React, { useEffect, useState } from "react";
import "./App.css";
import song from "./assets/song.mp4";
import couple from "./assets/cp1.jpg";
import Gifts from "./components/Gifts";
import RomanticBackground from "./components/RomanticBackground";
import IndiaMemories from "./components/IndiaMemories";


function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  // 🎵 Play music on first interaction
  const playMusic = () => {
    const audio = document.getElementById("bg-music");
    if (audio.paused) audio.play();
  };

  // 💌 Countdown
  useEffect(() => {
    const valentineDate = new Date("February 14, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = valentineDate - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 🙈 NO button escape
  const moveNoButton = (e) => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    e.target.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <><RomanticBackground isYes={yesClicked} /><div className="container" onClick={playMusic}>
      <audio id="bg-music" loop>
        <source src={song} type="audio/mp3" />
      </audio>

      {/* 🌟 Sparkles */}
      <div className="sparkles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i}>✨</span>
        ))}
      </div>

      {/* 🎆 Floating Hearts */}
      <div className="hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>💖</span>
        ))}
      </div>

      {/* 💕 Pulsing Heart */}
      <div className="pulse-heart">💗</div>

      {/* 🎀 Valentine Card */}
      <div className={`card ${yesClicked ? "flip" : ""}`}>
        <div className="card-front">
          <h1>Hey My Love 💕</h1>

          <img src={couple} alt="us" className="photo" />

          <p>
            Every moment with you feels magical.<br />
            Valentine’s Day is almost here 🌙
          </p>

          <div className="countdown">
            💌 {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>

          <h2>Will you be my Valentine? 💘</h2>

          <div className="buttons">
            <button className="yes" onClick={() => setYesClicked(true)}>
              YES 💕
            </button>
            <button className="no" onMouseEnter={moveNoButton}>
              NO 🙈
            </button>
          </div>
        </div>


        <div className="card-back">
          <h1>I Love You ❤️</h1>
          <p>I have something special for you 🎁</p>
<Gifts />
<IndiaMemories />
        </div>

      </div>
    </div></>
  );
}

export default App;
