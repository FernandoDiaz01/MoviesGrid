const initialState = { 
    moviesFavorites: []
}

export default function RootReducer (state = initialState, action) {
   switch (action.type) {
   case 'ADD_FAVORITE': 
    return{
              ...state,
              moviesFavorites: state.moviesFavorites.concat(action.payload)
    }
    case 'REMOVE_MOVIE_FAVORITE':
    return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.payload)
    }
    case 'GET_MOVIE_DETAIL':
        return{
            ...state,
            moviesFavorites: state.moviesFavorites.concat(action.payload)
        }
        
    default:
        return state;
   }

}
