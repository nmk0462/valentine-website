import { useEffect, useState } from "react";
import kit1 from "../assets/kit1.jpg";
import kit2 from "../assets/kit2.jpg";
import kit3 from "../assets/kit3.jpg";

const IMAGES = [kit1, kit2, kit3];

export default function RomanticBackground({ isYes }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`romantic-bg ${isYes ? "blur" : ""}`}>
      {IMAGES.map((img, i) => (
        <div
          key={i}
          className={`bg-image ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="bg-overlay" />
    </div>
  );
}
