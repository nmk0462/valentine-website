import { useState } from "react";
import GiftCard from "./GiftCard";
import GiftModal from "./GiftModal";
import PhotoSlideshow from "./PhotoSlideshow";
import OurFirsts from "./OurFirsts";
import ConcertTicket from "./ConcertTicket";

export default function Gifts() {
  const [openGift, setOpenGift] = useState(null);

  return (
    <>
      <div className="gift-grid">
        <GiftCard
          emoji="📸"
          title="Memories"
          onClick={() => setOpenGift("photos")}
        />
        <GiftCard
          emoji="✨"
          title="Our Firsts"
          onClick={() => setOpenGift("firsts")}
        />
        <GiftCard
          emoji="🎵"
          title="Concert"
          onClick={() => setOpenGift("ticket")}
        />
      </div>

      {openGift && (
        <GiftModal onClose={() => setOpenGift(null)}>
          {openGift === "photos" && <PhotoSlideshow />}
          {openGift === "firsts" && <OurFirsts />}
          {openGift === "ticket" && <ConcertTicket />}
        </GiftModal>
      )}
    </>
  );
}
