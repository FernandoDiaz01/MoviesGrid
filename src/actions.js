export function addFavorite(moviesFavorites){
    return{
        type: 'ADD_FAVORITE',
        payload: moviesFavorites
    }
    
};

export function removeMovieFavorite(id){
    return{
        type: 'REMOVE_MOVIE_FAVORITE',
        payload: id
    }
}

export function getMovieDetail(id, overview, poster_path){
    return{
        type: 'GET_MOVIE_DETAIL',
        payload:{ id, overview, poster_path}
    }
}
