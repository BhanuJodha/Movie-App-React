import React from "react";

import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const {store} = this.props;
    store.subscribe(() => {
      this.forceUpdate();
      console.log("Rerender", store.getState())
    })
    store.dispatch(addMovies(data));
  }

  changeTab = () => {
    this.props.store.dispatch(setShowFavourite(!this.props.store.getState().movies.showFavourite));
  }

  render() {
    const {movies: movieState, search: searchState} = this.props.store.getState();
    const movies = movieState.showFavourite ? movieState.favourites : movieState.list;
    
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} searchState={searchState}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${movieState.showFavourite || "active-tabs"}`} onClick={this.changeTab}>Movies</div>
            <div className={`tab ${movieState.showFavourite && "active-tabs"}`} onClick={this.changeTab}>Favourites</div>
          </div>

          <div className="list">
            {(movies.length && movies.map(movie => (
              <MovieCard movie={movie} key={movie.imdbID} store={this.props.store}/>
            )))
            ||
              <div className="no-movies">No movies to display</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
