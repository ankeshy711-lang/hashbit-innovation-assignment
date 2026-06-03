import { useNavigate, useParams } from "react-router-dom";
import { movies } from "../data/movies";
import "../App.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="container">
      <h1>{movie.name}</h1>

      <div className="details-card">
        <img src={movie.image} alt={movie.name} />
        <p>{movie.description}</p>

        <button onClick={() => navigate(`/book/${movie.id}`)}>
          Book Seat
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;