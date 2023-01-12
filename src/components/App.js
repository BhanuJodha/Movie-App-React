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
    this.props.store.dispatch(setShowFavourite(!this.props.store.getState().showFavourite));
  }

  render() {
    const storeState = this.props.store.getState();
    const movies = storeState.showFavourite ? storeState.favourites : storeState.list;
    
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${storeState.showFavourite || "active-tabs"}`} onClick={this.changeTab}>Movies</div>
            <div className={`tab ${storeState.showFavourite && "active-tabs"}`} onClick={this.changeTab}>Favourites</div>
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
