import { useLocation, Link } from "react-router-dom";
import "../App.css";

function Success() {
  const location = useLocation();
  const { movie, name, email, mobile, bookingId } = location.state || {};

  return (
    <div className="container">
      <h1>Seat Booked Successfully ✅</h1>

      <div className="success-card">
        <h2>Booking ID: {bookingId}</h2>
        <h3>Movie: {movie?.name}</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile:</strong> {mobile}</p>

        <Link to="/" className="back-link">
          Back to Movies
        </Link>
      </div>
    </div>
  );
}

export default Success;
