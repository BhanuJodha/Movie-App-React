import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE, SEARCH_MOVIE } from "../actions";

const defaultMovieState = {
    list: [],
    favourites: [],
    showFavourite: false
}

function movies(state = defaultMovieState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return { ...state, list: [...action.movies, ...state.list.filter(movie => movie.imdbID !== action.movies[0].imdbID)] };
        case ADD_FAVOURITE:
            state.favourites.push(action.movie);
            return state;
        case REMOVE_FAVOURITE:
            state.favourites = state.favourites.filter(movie => movie.imdbID !== action.movie.imdbID);
            return state;
        case SET_SHOW_FAVOURITE:
            state.showFavourite = action.val;
            return state;
        default:
            return state;
    }
}

const defaultSearchState = {
    results: [],
    showSearch: false
}

function search(state = defaultSearchState, action) {
    switch(action.type){
        case ADD_MOVIES:
            return { ...state, showSearch: false };
        case SEARCH_MOVIE:
            return {
                ...state,
                results: action.movies,
                showSearch: true
            }
        default:
            return state
    }
}

export default combineReducers({
    movies,
    search
})