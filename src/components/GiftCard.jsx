export default function GiftCard({ emoji, title, onClick }) {
  return (
    <div className="gift-card" onClick={onClick}>
      <div className="gift-lid">
        <span className="bow">🎀</span>
      </div>

      <div className="gift-body">
        <div className="gift-emoji">{emoji}</div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
