import React from 'react'
import styled from 'styled-components'; 

import { connect } from 'react-redux'; 



const StyledWatchTrailerv2 = styled.div`


& {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
}


.trailer-container {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    flex-direction: column; 
    width: 100%; 
    text-align: center; 
    font-size: 2.5rem; 
    height: 40vh; 
    background-position: cover; 
    background-size: cover; 
    color: white; 
}

iframe {

    border: 4px solid white;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    width: 90%; 
    height: 70%; 
}

.trailer-container > * {
    margin: 2%; 
}

.overview {
 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 100%;
    text-align: center; 
}

.overview > * {
    margin: 1%
}

`

const WatchTrailerv2 = ({ trailerId, currentMovie }) => {

    // add a backdrop image 
    const style = {
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`})`
    }

    const title = !currentMovie.original_name ? currentMovie.original_title : currentMovie.original_name; 

    return (
        <StyledWatchTrailerv2>
            <div className="trailer-container" style={style}>
                <h1>{title} Official Trailer</h1>
                <iframe allowFullScreen src={`https://www.youtube.com/embed/${trailerId}`}/>
            </div>
            <div className="overview">
                <h2>Overview: </h2>
                <p>{currentMovie.overview}</p>
            </div>
        </StyledWatchTrailerv2>
    )
}

const mapStateToProps = state => {
    return {
        trailerId: state.info.trailersId, 
        currentMovie: state.info.currentMovie, 
    }
}

export default connect(mapStateToProps)(WatchTrailerv2)
