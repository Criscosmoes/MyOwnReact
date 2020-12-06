import React, {useEffect} from 'react'; 
import '../App.css'; 

import NavBar from './NavBar';
import HomePage from './HomePage';
import WatchTrailer from './WatchTrailer';
import Search from './Search';
import WatchTrailerv2 from './WatchTrailerv2'; 

import { Switch, Route } from 'react-router-dom'; 


import { fetchMovies } from './../actions/index';
import { connect } from 'react-redux'; 




const App = ({movies, fetchMovies}) => {


    useEffect(() => {

       fetchMovies('top rated', 'movie/top_rated'); 
       fetchMovies('trending', 'trending/all/week'); 
       fetchMovies('trendingToday', 'trending/movie/day')
       fetchMovies('popular', 'movie/popular'); 
       fetchMovies('now_playing', 'movie/now_playing'); 
       fetchMovies('upcoming', 'movie/upcoming')


    }, [fetchMovies])

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <NavBar /> 
                    <HomePage trending={movies.trending} topRated={movies.topRated} trendingToday={movies.trendingToday} />
                </Route>

                <Route path="/popular" exact>
                    <NavBar /> 
                    <Search movies={movies.popular} /> 
                </Route>

                <Route path="/now_playing" exact>
                    <NavBar /> 
                    <Search movies={movies.now_playing} /> 
                    
                </Route>

                <Route path="/upcoming" exact>
                    <NavBar /> 
                    <Search movies={movies.upcoming} />
                </Route>

                <Route path="/movie/:id" exact>
                    <NavBar /> 
                    <WatchTrailerv2 /> 
                </Route>

                <Route path="/search/:search" exact>
                    <NavBar /> 
                    <Search movies={movies.search} /> 
                    
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