// Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

// Action creators
export const addMovies  = (movies) => {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export const addFavourite = (movie) => {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export const removeFavourite = (movie) => {
    return {
        type: REMOVE_FAVOURITE,
        movie
    }
}

export const setShowFavourite = (val) => {
    return {
        type: SET_SHOW_FAVOURITE,
        val
    }
}

export const searchMovie = (text) => {
    return (dispatch) => {
        fetch(`http://www.omdbapi.com/?apikey=eb2728ec&s=${text}&page=1`)
        .then((response) => response.json())
        .then((data) => {
            // call dispatch
            if (data.Response === "True"){
                dispatch({
                    type: SEARCH_MOVIE,
                    movies: data.Search
                })
            }
        })
    }
}

