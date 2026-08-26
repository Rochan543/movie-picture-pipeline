import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`)
      .then((response) => {
        const movieData = response?.data?.movies;

        if (Array.isArray(movieData)) {
          setMovies(movieData);
        } else {
          setMovies([]);
          setError('Movie data was not returned in the expected format.');
        }
      })
      .catch((err) => {
        console.error('Failed to load movies:', err);
        setMovies([]);
        setError('Unable to load movies.');
      });
  }, []);

  return (
    <>
      {error && <p>{error}</p>}

      <ul>
        {movies.map((movie) => (
          <li
            className="movieItem"
            key={movie.id}
            onClick={() => onMovieClick(movie)}
          >
            {movie.title}
          </li>
        ))}
      </ul>
    </>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
