import { ADD_MOVIES } from "../actions";

export default function movie(state = [], action) {
    switch (action.type) {
        case ADD_MOVIES:
            return action.movies;
        default:
            return state;
    }
}