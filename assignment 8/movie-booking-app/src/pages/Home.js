import { useNavigate } from "react-router-dom";
import { movies } from "../data/movies";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Movie Booking App</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.name} />
            <h3>{movie.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;