import ticket from "../assets/tkt.jpg";

export default function ConcertTicket() {
  return (
    <>
      <h2>Our Special Date 🎶</h2>

      <div className="ticket">
        <div className="ticket-left">
          <h3>LIVE CONCERT</h3>
          <p>For My Valentine 💖</p>
          <p>📍 Hyderabad</p>
          <p>🗓 14 Feb</p>
        </div>

        <div className="ticket-right">
          <img src={ticket} alt="ticket" />
        </div>
      </div>
    </>
  );
}
