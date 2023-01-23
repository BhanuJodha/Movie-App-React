import React from "react";
import { addMovies, searchMovie } from "../actions";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: ""
        }
    }

    handleAddMovie = (movie) => {
        console.log(movie)
        this.props.dispatch(addMovies([movie]));
    }

    handleSearch = () => {
        this.props.dispatch(searchMovie(this.state.searchText));
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    render() {
        const { showSearch, results } = this.props.searchState;
        
        return (
            <div className="nav">
                <div className="search-container">
                    <input type="text" onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {showSearch &&
                        <div className="search-results">
                            {results.map((movie) => {
                                return <div className="search-result" key={movie.imdbID}>
                                    <img src={movie.Poster} alt="search-pic" />

                                    <div className="movie-info">
                                        <span>{movie.Title}</span>
                                        <button onClick={() => { this.handleAddMovie(movie) }}>
                                            Add to Movies
                                        </button>
                                    </div>
                                </div>
                            })}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;