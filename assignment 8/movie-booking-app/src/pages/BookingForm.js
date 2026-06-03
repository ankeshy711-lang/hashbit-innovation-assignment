import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { movies } from "../data/movies";
import "../App.css";

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/success", {
      state: {
        movie,
        ...formData,
        bookingId: Math.floor(100000 + Math.random() * 900000),
      },
    });
  };

  return (
    <div className="container">
      <h1>Book Seat</h1>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Enter Mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;