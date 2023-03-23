import React, { isValidElement } from "react";
import styles from "./MovieCard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeMovieFavorite, getMovieDetail, addFavorite } from "./actions";
import { Link } from "react-router-dom";

export function MovieCard({ movie, movieFavorite = false, movieDetailView = false}) {
  const dispatch = useDispatch();

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  const [isFavorite, setIsFavorite] = useState({id:'', favorite: false});
  console.log('fav', isFavorite)

  const favoriteClick = (movieId, isFavorite) => {
     return isFavorite ? removeMovieFavorite(movieId) : addFavorite(movieId)
}

  const setLocalStorage = isFavorite => {
    try {
      setIsFavorite(isFavorite)
      window.localStorage.setItem('FAV', isFavorite)
     setIsFavorite(!isFavorite)
    } catch (error) {
      console.error(error)
    }
  }

  const addFavoriteMovie = (movieId) => {
      dispatch(favoriteClick(movieId, isFavorite.favorite));
      setIsFavorite({id: movieId, favorite: !isFavorite.favorite});
      setLocalStorage()
  };

  const removeMovie = (id) => {
    dispatch(removeMovieFavorite(id));
  };

  const movieDetail = (id, overview, poster_path) => {
    dispatch(getMovieDetail(id, overview, poster_path));

  };  
 

  return (
    <div className={styles.movieCard}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
        id={movie}
      />
      <div>{movie.title} </div>
      <div className={styles.containerBtn}>

       {movieDetailView && 
        <Link to='/detail' >
        <button
          className={styles}
          onClick={() =>
            movieDetail(movie.title, movie.overview, movie.poster_path)
          }
        >
          {" "}
          Leer Más
        </button>
        </Link>
       }
      
        {movieFavorite ? (
          <button onClick={() => removeMovie(movie.id)}>X</button>
        ) : (
          <button
            type="submit"
            onClick={() => addFavoriteMovie(movie.id)}
            style={{ backgroundColor: isFavorite.favorite && "red" }}
          >
            {" "}
            FAV{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
