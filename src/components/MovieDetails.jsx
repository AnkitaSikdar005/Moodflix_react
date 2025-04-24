// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const API_KEY = import.meta.env.VITE_TMBD_API_KEY;
// const API_OPTIONS = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_KEY}`
//   }
// };

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
//       const data = await res.json();
//       setMovie(data);
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (!movie) return <p className="text-white">Loading...</p>;

//   return (
//     <div className="movie-details text-white p-4 max-w-4xl mx-auto">
//       <button onClick={() => navigate(-1)} className="text-purple-400 underline mb-4">← Back</button>
//       <div className="flex flex-col md:flex-row gap-4">
//         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg w-full md:w-1/3" />
//         <div>
//           <h1 className="text-4xl font-bold">{movie.title}</h1>
//           <p className="text-sm mt-1 text-gray-400">{movie.release_date} • {movie.runtime} mins • {movie.status}</p>
//           <p className="mt-4">{movie.overview}</p>
//           <p className="mt-4"><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
//           <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
//           <p><strong>Rating:</strong> ⭐ {movie.vote_average} ({movie.vote_count})</p>
//           <p><strong>Budget:</strong> ${movie.budget?.toLocaleString()}</p>
//           <p><strong>Revenue:</strong> ${movie.revenue?.toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_TMBD_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
      const data = await res.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p className="text-white">Loading...</p>;

  return (
    <div className="movie-details text-white p-4 max-w-6xl mx-auto">
      {/* <button onClick={() => navigate(-1)} className="text-purple-400 underline mb-4">← Back</button> */}
      <button onClick={() => navigate(-1)} className="text-white bg-purple-600 hover:bg-purple-500 px-3 py-1 rounded-lg shadow-md transition duration-300"
        > ← Back </button>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Poster */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-sm mt-1 text-gray-400">
            {movie.release_date} • {movie.runtime} mins • {movie.status}
          </p>
          <p className="mt-4 text-lg">{movie.overview}</p>

          {/* Genres */}
          <div className="mt-4 flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-gray-800 text-sm rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Additional Details */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
            <p><strong>Rating:</strong> ⭐ {movie.vote_average} ({movie.vote_count})</p>
            <p><strong>Budget:</strong> ${movie.budget?.toLocaleString()}</p>
            <p><strong>Revenue:</strong> ${movie.revenue?.toLocaleString()}</p>
            <p><strong>Tagline:</strong> {movie.tagline || 'N/A'}</p>
            <p><strong>Production Companies:</strong> {movie.production_companies.map(c => c.name).join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;


