import { useState } from "react";
import indiaMap from "../assets/indian-map.jpg";

const places = [
  {
    name: "Pune",
    top: "56%",
    left: "34%",
    image: require("../assets/places/Pune.jpg"),
    memory: "City of long talks and cozy walks 💕"
  },
  {
    name: "Bhadrachalam",
    top: "60%",
    left: "44%",
    image: require("../assets/places/Bhadra.jpg"),
    memory: "Peace, prayers and us 🙏❤️"
  },
  {
    name: "Nasik",
    top: "58%",
    left: "39%",
    image: require("../assets/places/Shirdi.jpg"),
    memory: "Faith, hope and togetherness ✨"
  },
  {
    name: "Goa",
    top: "69%",
    left: "34%",
    image: require("../assets/places/Goa.jpg"),
    memory: "Sunsets, waves and endless laughs 🌊💖"
  },
  {
    name: "Tirupati",
    top: "75%",
    left: "44%",
    image: require("../assets/places/Tirupti.jpg"),
    memory: "Blessings and beautiful moments together 🛕💫"
  }
];


export default function IndiaMemories() {
  const [showMap, setShowMap] = useState(false);
  const [activePlace, setActivePlace] = useState(null);

  return (
    <>
      {/* 🌸 Cute Button */}
      <div className="india-button-wrapper">
        <button
          className="india-open-btn"
          onClick={() => setShowMap(true)}
        >
          🗺️ Our Journey Across India
        </button>
      </div>

      {/* 🌍 Map Modal */}
      {showMap && (
        <div
          className="india-modal"
          onClick={() => {
            setShowMap(false);
            setActivePlace(null);
          }}
        >
          <div
            className="india-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="india-close-btn"
              onClick={() => {
                setShowMap(false);
                setActivePlace(null);
              }}
            >
              ✕
            </button>

            <h2>Our Journey Across India 🇮🇳</h2>

            <div className="map-container">
              <img
                src={indiaMap}
                alt="India Map"
                className="india-map"
              />

              {places.map((place, index) => (
                <div
                  key={index}
                  className="map-pin"
                  style={{ top: place.top, left: place.left }}
                  onClick={() => setActivePlace(place)}
                >
                  ❤️
                  <span className="tooltip">{place.name}</span>
                </div>
              ))}
            </div>

            {/* 📸 Place Popup */}
            {activePlace && (
              <div className="place-preview">
                <img
                  src={activePlace.image}
                  alt={activePlace.name}
                />
                <h3>{activePlace.name}</h3>
                <p>{activePlace.memory}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
