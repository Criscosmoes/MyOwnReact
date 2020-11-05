import React from 'react'; 
import '../App.css'; 
import HeaderText from './HeaderText';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import HomePage from './HomePage';


import { Switch, Route } from 'react-router-dom'; 


const App = () => {


    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <NavBar /> 
                    <HomePage />
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

            </Switch>
        </div>
    )
}



export default App; 