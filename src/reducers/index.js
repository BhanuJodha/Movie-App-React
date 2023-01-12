import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE } from "../actions";

const defaultState = {
    list: [],
    favourites: [],
    showFavourite: false
}

export default function movie(state = defaultState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {...state, list: action.movies};
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