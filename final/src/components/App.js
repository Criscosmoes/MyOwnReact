import React, {useEffect} from 'react'; 
import '../App.css'; 

import NavBar from './NavBar';
import HomePage from './HomePage';


import { Switch, Route } from 'react-router-dom'; 


import { fetchMovies, fetchTrailers } from './../actions/index';
import { connect } from 'react-redux';



const App = ({movies, fetchMovies, fetchTrailers}) => {


    useEffect(() => {

       fetchMovies('top rated', 'movie/top_rated'); 
       fetchMovies('trending', 'trending/all/week'); 
       fetchTrailers('740985', 'movie'); 


    }, [fetchMovies, fetchTrailers])

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <NavBar /> 
                    <HomePage trending={movies.trending} topRated={movies.topRated} />
                </Route>

                <Route path="/popular" exact>
                    <NavBar /> 
                    <h1>Popular</h1>
                </Route>

                <Route path="/top-rated" exact>
                    <NavBar /> 
                    <h1>Top Rated</h1>
                </Route>

                <Route path="/upcoming" exact>
                    <NavBar /> 
                    <h1>Upcoming</h1>
                </Route>

                <Route path="/movie/:id">
                    <NavBar /> 
                    <h1>movie id</h1>
                </Route>

            </Switch>
        </div>
    )
}


const mapStateToProps = state => {

    return {
        movies: state.movies
    }
}


export default connect(mapStateToProps, { fetchMovies, fetchTrailers })(App); 