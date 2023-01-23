import React from "react";
import { addFavourite, removeFavourite } from "../actions";

class MovieCard extends React.Component {
    addFav = () => {
        this.props.store.dispatch(addFavourite(this.props.movie));
    }

    removeFav = () => {
        this.props.store.dispatch(removeFavourite(this.props.movie));
    }

    isFavourite = () => {
        const { favourites } = this.props.store.getState().movies;
        const index = favourites.indexOf(this.props.movie);

        if (index === -1) {
            return false;
        }
        return true;
    }

    render() {
        const { movie } = this.props;

        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster" />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {(this.isFavourite() &&
                            <button className="unfavourite-btn" onClick={this.removeFav}>Unfavourite</button>)
                            ||
                            <button className="favourite-btn" onClick={this.addFav}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;