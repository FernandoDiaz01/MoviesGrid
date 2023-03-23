import React from "react";
import movies from './movies.json';
import { MovieCard } from "./MovieCard";
import styles from './MovieGrid.module.css';
import { Link } from "react-router-dom";

export function MovieGrid() {
  return (
    <>
    <Link to="/fav">
     <div className={styles.titleFav} >Favoritos</div>
    </Link>
        <ul className={styles.moviesGrid} >
           {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} movieDetailView ></MovieCard>
           ))}
        </ul>
        </>
   
  )
}

export default MovieGrid;