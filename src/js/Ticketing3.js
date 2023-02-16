import React, { useState } from 'react';
import '../css/ministyle.css';
import SeatSelection from './SeatSelection';

const Ticketing3 = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const movieList = [    {      title: 'Avengers: Endgame',      times: ['10:00am', '1:00pm', '4:00pm', '7:00pm'],
      seats: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'],
      price: 12.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Spider-Man: Far From Home',
      times: ['11:00am', '2:00pm', '5:00pm', '8:00pm'],
      seats: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      price: 10.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Toy Story 4',
      times: ['12:00pm', '3:00pm', '6:00pm', '9:00pm'],
      seats: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3', 'D1', 'D2', 'D3'],
      price: 8.99,
      image: 'https://via.placeholder.com/150'
    }
  ];

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setSelectedSeat(null);
    setSelectedTime(null);
    setTicketQuantity(1);
  };

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleTicketQuantityChange = (e) => {
    setTicketQuantity(e.target.value);
  };

  return (
    <div className="ticket-container">
      <h1 className="header">Movie Ticket Purchase</h1>
      <div className="movie-list">
        {movieList.map((movie, index) => (
          <div key={index} className={`movie ${selectedMovie === movie ? 'selected' : ''}`} onClick={() => handleMovieSelect(movie)}>
            <div className="movie-info">
              <h2 className="movie-title">{movie.title}</h2>
              <img className="movie-image" src={movie.image} alt={movie.title} />
            </div>
            <p className="movie-price">${movie.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="selected-movie">
          <h3 className="selected-movie-title">{selectedMovie.title}</h3>
          <p className="selected-movie-price">Price: ${selectedMovie.price.toFixed(2)}</p>
          <div className="seat-selection">
            <h4 className="seat-selection-title">Select a seat:</h4>
            <div class="wrapper">
            <SeatSelection />
            </div>
      </div>
      <div className="time-selection">
        <h4 className="time-selection-title">Select a time:</h4>
        <div className="time-buttons">
          {selectedMovie.times.map((time, index) => (
            <button
              key={index}
              className={`time-button ${time === selectedTime ? 'selected' : ''}`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <div className="ticket-quantity">
        <h4 className="ticket-quantity-title">Number of tickets:</h4>
        <input type="number" min="1" max="10" value={ticketQuantity} onChange={handleTicketQuantityChange} />
      </div>
      <div className="total-price">
        <h4 className="total-price-title">Total price:</h4>
        <p className="total-price-amount">${(selectedMovie.price * ticketQuantity).toFixed(2)}</p>
      </div>
      <button
        className="purchase-button"
        onClick={() =>
          alert(
            `Thank you for purchasing ${ticketQuantity} ticket(s) for ${selectedMovie.title} at ${selectedTime} on seat ${selectedSeat}. Total price: $${(
              selectedMovie.price * ticketQuantity
            ).toFixed(2)}`
          )
        }
      >
        Purchase
      </button>
    </div>
  )}
</div>
);
};

export default Ticketing3;
