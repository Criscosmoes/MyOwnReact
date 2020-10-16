import React from 'react';
import './App.css'; 
import Header from './Header'; 
import AboutMe from './AboutMe';
import Experience from './Experience';
import Location from './Location'; 
import Contact from './Contact';

const App = () => {

    return (
        <div>
            <Header /> 
            <AboutMe /> 
            <Experience /> 
            <Location /> 
            <Contact /> 
        </div>
    )
}


export default App; 