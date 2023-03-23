import React from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

export default function MovieDetail() {

  const detailMovie = useSelector((state) => state && state.moviesFavorites);


  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>

      <nav>
        <ul>
          {detailMovie &&
            detailMovie.map((detail) => {
              return (
                <>
                <MovieCard
                  key={detail.id}
                  movie={detail}
                  movieFavorite={true}
                  poster_path={detail.poster_path}
                />
                <h1>{detail.overview} </h1>
                </>
              );
            })}
            
        </ul>
      </nav>
      
    </div>
  );
}
