import React, {useEffect} from 'react'; 
import '../App.css'; 

import NavBar from './NavBar';
import HomePage from './HomePage';


import { Switch, Route } from 'react-router-dom'; 


import { fetchMovies, fetchTrailers } from './../actions/index';
import { connect } from 'react-redux';
import WatchTrailer from './WatchTrailer';



const App = ({movies, fetchMovies}) => {


    useEffect(() => {

       fetchMovies('top rated', 'movie/top_rated'); 
       fetchMovies('trending', 'trending/all/week'); 


    }, [])

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
                    <WatchTrailer /> 
                </Route>

            </Switch>
        </div>
    )
}


const mapStateToProps = state => {

    return { 
        movies: state.movies, 
    }
}


export default connect(mapStateToProps, { fetchMovies })(App); 