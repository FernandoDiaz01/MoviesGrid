import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import styles from './MoviesFavorites.module.css';



export default function MoviesFavorites() {

const allFavorites = useSelector((state) => state && state.moviesFavorites )


  return (
    <div>
      <Link to={"/"} >
      <div className={styles.titleFav} >Volver a la página principal</div>
      </Link>

      <nav>
        <ul className={styles.MoviesFavorites} >
        {allFavorites && allFavorites.map((favoriteMovie) => {
          return <MovieCard key={favoriteMovie.id} movie={favoriteMovie} movieFavorite={true} />
          
        })} 
        </ul>
        
      </nav>
      
      
    </div>
  );
}
