import { useState } from "react";
import "../css/ministyle.css";

const SeatSelection = () => {
  // Define the seat layout and availability
  const rows = 2;
  const seatsPerRow = 8;
  const [seatAvailability, setSeatAvailability] = useState(
    Array(rows * seatsPerRow).fill(true)
  );

  // Define the function to handle seat selection
  const handleSeatSelection = (index) => {
    setSeatAvailability((prevAvailability) => {
      const newAvailability = [...prevAvailability];
      newAvailability[index] = !newAvailability[index];
      return newAvailability;
    });
  };

  // Render the seat grid
  const seatGrid = [];
  for (let i = 0; i < rows * seatsPerRow; i++) {
    seatGrid.push(
      <div
        className={`seat ${!seatAvailability[i] ? "unavailable" : ""} ${
          seatAvailability[i] ? "available" : ""
        }`}
        key={i}
        onClick={() => handleSeatSelection(i)}
      >
        {i + 1}
      </div>
    );
  }

  return (
    <div className="seat-selection">
      <div className="title">Seat</div>
      <div className="seat-grid">{seatGrid}</div>
    </div>
  );
};

export default SeatSelection;