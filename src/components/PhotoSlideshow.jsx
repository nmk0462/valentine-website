import { useEffect, useState } from "react";

import video1 from "../assets/slideshow/video.mp4";
import video2 from "../assets/slideshow/video2.mp4";
import photo1 from "../assets/slideshow/p1.jpg";
import photo2 from "../assets/slideshow/p2.jpg";
import photo3 from "../assets/slideshow/p1.jpg";

const slides = [
  { type: "image", src: photo2 },
  { type: "video", src: video1 },
  { type: "image", src: photo1 },
  { type: "video", src: video2 },
];

export default function PhotoSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000); // 5 sec per slide

    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <div className="slideshow-wrapper">
      <h2>Our Beautiful Moments 📸🎬</h2>

      <div className="slideshow-frame">
        {current.type === "image" ? (
          <img
            key={current.src}
            src={current.src}
            alt="memory"
            className="slide fade"
          />
        ) : (
          <video
            key={current.src}
            src={current.src}
            className="slide fade"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>

      <p className="slideshow-hint">Some moments are better in motion 💕</p>
    </div>
  );
}
