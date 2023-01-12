// Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";

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

