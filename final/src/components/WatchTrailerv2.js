import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { FaPlay } from 'react-icons/fa'; 

const StyledWatchTrailerv2 = styled.div`


  & {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
  }

  .trailer-container {
    height: 650px; 
    background-size: cover;
  }

  .transparent {
    background: gray; 
    height: 650px;
    width: 100%;
    background: rgba(0,0,0, 0.9); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }

  .movie-image {
    display: flex; 
    justify-content: flex-end;
  }

  .information {
    width: 60%;
    margin: 2%; 
    color: white; 
    height: 600px; 
  }

  .information > * {
    margin: 2%
  }

  h1 {
    font-size: 5rem; 
  }

  p {
    font-size: 2rem; 
    line-height: 1.5;
    letter-spacing: .2rem; 
  }

  span {
    font-size: 3.5rem; 
  }

  img {
    width: 80%; 
  }

  h4 {
    font-size: 3rem; 
  }

  .icon {
    border: none; 
    outline: none; 
    font-size: 2rem; 
  }

  .to-trailer {
    width: 21%
  }

  .to-trailer:hover {
    cursor: pointer;
    color: orange; 
    transition: ease-in .4s; 
  }
  
  .green {
    color: green; 
  }

  //cast section


  .cast-container {
    display: flex;
    overflow-x: auto;  
    margin: 2%; 
    color: white; 
  }

  .cast-information {
    width: 100%
  }

  .cast-information > * {
    margin: 2%
  }

  .cast {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    min-height: 300px; 
    min-width: 200px;
    border: 4px solid gray;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    margin: .5%; 
    text-align: center; 
  }

  .cast > * {
    margin: 2%
  }

  h3 {
    text-align: center; 
    color: white; 
    font-size: 5rem; 
  }

  .actor {
    height: 220px; 
  }

  h2 {
    min-height: 40px; 
  }


  div::-webkit-scrollbar {
    width: .5rem;
 
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: orange;
  
  }

  // trailer section 

  .teaser-container {
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    height: 900px; 
    width: 100%
  }

  .teaser-container > *  {
    margin: 1.5%
  }


  iframe {
    border: 10px solid gray;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    height: 800px; 
    width: 70%
  }

  .text {
    font-size: 5rem; 
    color: orange; 
  }

`;

const WatchTrailerv2 = ({ trailerId, currentMovie, cast, providers }) => {
  // add a backdrop image
  const style = {
    backgroundImage: `url(${`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`})`,
  };

  const title = currentMovie.original_name | currentMovie.original_title | currentMovie.original_name;

  let renderedCast, filteredCast; 

  if (cast) {

    // some cast do not have pics of themselves, so we filter these out
    filteredCast = cast.filter((cur) => cur.profile_path !== null);

    // render the cast
    renderedCast = filteredCast.map((cur) => {
      return (
        <div className="cast" key={cur.id}>
          <img className="actor"
            src={`https://image.tmdb.org/t/p/original${cur.profile_path}`}
            alt={cur.name}
          />
          
          <h2 className="name">{cur.name}</h2>
          <h2>{cur.character}</h2>
          
        </div>
      );
    });
  }

  


  return (
    <StyledWatchTrailerv2>
      <div className="trailer-container" style={style}>
        <div className="transparent">
            <div className="movie-image">
             <img src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} />
            </div>
            <div className="information">
                <h1>{currentMovie.name || currentMovie.original_name || currentMovie.title} {currentMovie.media_type ? `(${currentMovie.media_type.toUpperCase()})`: ""}</h1>
                <p><span>Description</span><br></br> {currentMovie.overview}</p>
                <h4>Rating: <span className={`rating ${currentMovie.vote_average > 7.9 ? "green" : ""}`}>{currentMovie.vote_average}</span> / 10</h4>
                <h4>Date Released: {currentMovie.release_date || currentMovie.first_air_date} </h4>
                <h4 className="to-trailer"><FaPlay className="icon" /> Check Trailer</h4>
            </div>
        </div>
      </div>
      {cast ? 
      <div className="cast-information">
        <h3>Top Cast</h3>
        <div className="cast-container">{renderedCast}</div>
        <hr></hr>
      </div> : ""}
      
      <div className="teaser-container">
        <h3>{currentMovie.name || currentMovie.original_name || currentMovie.title} <span className="text">Trailer</span> </h3>
        <iframe
          title={title}
          allowFullScreen
          src={`https://www.youtube.com/embed/${trailerId}`}
          className="trailer"
        />
      </div>

    </StyledWatchTrailerv2>
  );
};

const mapStateToProps = (state) => {
  return {
    trailerId: state.info.trailersId,
    currentMovie: state.info.currentMovie,
    cast: state.info.cast,
    providers: state.info.providers,
  };
};

export default connect(mapStateToProps)(WatchTrailerv2);
