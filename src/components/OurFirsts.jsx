import { useEffect, useState } from "react";

export default function OurFirsts() {
  const firsts = [
    {
      icon: "💬",
      title: "First Chat",
      date: "18 April 2025",
      text: "That first ‘Heyy’ that started everything ❤️"
    },
    {
      icon: "☕",
      title: "First Date",
      date: "13 May 2025",
      text: "Nervous smiles, endless talks, and warm coffee"
    },
    {
      icon: "🧳",
      title: "First Trip",
      date: "20 June 2025",
      text: "New places, shared laughs, unforgettable memories"
    },
    {
      icon: "💖",
      title: "First Valentine",
      date: "14 Feb 2026",
      text: "The day I celebrated us, not just a date"
    }
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  // Animate items appearing one by one
  useEffect(() => {
    setVisibleCount(0);
    const interval = setInterval(() => {
      setVisibleCount((c) => {
        if (c >= firsts.length) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, 450); // speed of reveal

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="our-firsts">
      <h2>Our Firsts ✨</h2>
      <p className="firsts-subtitle">Little moments that became everything 💕</p>

      <div className="timeline">
        {firsts.slice(0, visibleCount).map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot">
              <span className="dot-emoji">{item.icon}</span>
            </div>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span className="timeline-date">{item.date}</span>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🌱 Final Line */}
      {visibleCount >= firsts.length && (
        <p className="timeline-ending">
          And this is just the beginning… ❤️
        </p>
      )}
    </div>
  );
}
