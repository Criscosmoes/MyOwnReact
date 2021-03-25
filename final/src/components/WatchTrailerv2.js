import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { motion } from "framer-motion";

import { FaPlay } from "react-icons/fa";

import { Link } from "react-scroll"; 

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
    background: rgba(0, 0, 0, 0.9);
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
    margin: 2%;
  }

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 0.2rem;
  }

  span {
    font-size: 3.5rem;
  }


  .main-image {
    width: 80%
  }

  h4 {
    font-size: 3rem;
  }

  .icon {
    border: none;
    outline: none;
    font-size: 2.5rem;
  }


  .to-trailer:hover {
    cursor: pointer;
    color: orange;
    transition: ease-in 0.4s;
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
    width: 100%;
  }

  .cast-information > * {
    margin: 2%;
  }

  .cast {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 330px;
    min-width: 200px; 
    border: 4px solid gray;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    margin: 0.5%;
    text-align: center;
  }

  .cast > * {
    margin: 2%;
  }

  h3 {
    text-align: center;
    color: white;
    font-size: 5rem;
  }

  .actor {
    height: 200px;
  }

  h2 {
    min-height: 40px;
  }

  div::-webkit-scrollbar {
    width: 0.5rem;
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
    width: 100%;
  }

  .teaser-container > * {
    margin: 1.5%;
  }

  iframe {
    border: 10px solid gray;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    height: 800px;
    width: 70%;
  }

  .text {
    font-size: 5rem;
    color: orange;
  }

  .to-trailer {
    color: white;
    font-size: 3rem; 
  }







  @media (max-width: 800px){
    h1 {
      font-size: 3rem; 
    }

    p {
      width: 100%; 
      font-size: 1.7rem; 
      letter-spacing: .1rem; 
      line-height: 1.1;
      overflow-y: auto; 
      min-height: 100px;   
    }

    h4 {
      font-size: 2.5rem; 
    }

    span {
  
      font-size: 2.5rem; 
    }

    .information {
      display: flex; 
      justify-content: center; 
      align-items: center; 
      flex-direction: column; 
      text-align: center;
    }

    h3 {
      font-size: 4rem; 
    }


    iframe {
      width: 90%; 
      height: 550px; 
    }
  }

  @media (max-width: 500px){

    .trailer-container {
      height: 650px;
      background-size: cover;
    }


    .transparent {
      display: flex; 
      justify-content: space-evenly; 
      align-items: center; 
      flex-direction: column;
      height: 650px;  
      background: rgba(0, 0, 0, 0.7);
    }

    .information {
      display: flex; 
      justify-content: space-evenly; 
      align-items: center; 
      flex-direction: column; 
      text-align: center; 
      width: 100%; 
      height: 300px; 
    }


    .movie-image {
      display: flex; 
      justify-content: center; 
      align-items: center; 
      margin: 1%; 
      width: 60%; 
      /* height: 200px;  */
    }

    .main-image {
      height: 100%;
      width: 80%; 
    }

    h1 {
      font-size: 2.8rem; 
    }

    span {
      font-size: 2.2rem; 
    }

    h4 {
      font-size: 2rem; 
    }

    .to-trailer {
      font-size: 2rem; 
    }

    .icon {
      font-size: 1.6rem; 
    }
    
    p {
      width: 100%; 
      font-size: 1.7rem; 
      letter-spacing: .1rem; 
      line-height: 1.1;
      overflow-y: auto; 
      min-height: 100px;
    }

    h3 {
      font-size: 3.5rem;     
    }

    iframe {

      border: 3px solid gray; 
      width: 95%; 
      height: 400px; 
    }

    .cast-information > * {
      margin: 4%
    }

    .teaser-container > * {
      margin: 4%
    }

    .teaser-container {
      height: 600px; 
    }
  }

`;

const WatchTrailerv2 = ({ trailerId, currentMovie, cast, providers }) => {
  // add a backdrop image
  const style = {
    backgroundImage: `url(${`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`})`,
  };

 
 const title = currentMovie.original_name || currentMovie.original_title || currentMovie.title; 
 
 let renderedCast, filteredCast; 

  if (cast) {
    // some cast do not have pics of themselves, so we filter these out
    filteredCast = cast.filter((cur) => cur.profile_path !== null);

    // render the cast
    renderedCast = filteredCast.map((cur) => {
      return (
        <div className="cast" key={cur.id}>
          <img
            className="actor"
            src={`https://image.tmdb.org/t/p/original${cur.profile_path}`}
            alt={cur.title || cur.original_title || cur.name}
          />

          <h2 className="name">{cur.name}</h2>
          <h2>{cur.character}</h2>
        </div>
      );
    });
  }

  return (
    <StyledWatchTrailerv2>
      <motion.div
        className="trailer-container"
        style={style}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="transparent">
          <div className="movie-image">
            <img className="main-image"
              src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`}
              alt="example"
            />
          </div>
          <div className="information">
            <h1>
              {currentMovie.name ||
                currentMovie.original_name ||
                currentMovie.title}{" "}
              {currentMovie.media_type
                ? `(${currentMovie.media_type.toUpperCase()})`
                : ""}
            </h1>
            <span>Description</span>
            <p>
             {currentMovie.overview}
            </p>
            <h4>
              Rating:{" "}
              <span
                className={`rating ${
                  currentMovie.vote_average > 7.9 ? "green" : ""
                }`}
              >
                {currentMovie.vote_average}
              </span>{" "}
              / 10
            </h4>
            <h4>
              Date Released:{" "}
              {currentMovie.release_date || currentMovie.first_air_date}{" "}
            </h4>
            
            <Link to="Trailer" smooth={true} className="to-trailer">
              <FaPlay className="icon" /> Check Trailer
            </Link>
          </div>
        </div>
      </motion.div>
      {cast ? (
        <motion.div
          className="cast-information"
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3>Top Cast</h3>
          <div className="cast-container">{renderedCast}</div>
          <hr></hr>
        </motion.div>
      ) : (
        ""
      )}

      <motion.div id="Trailer" smooth={true}
        className="teaser-container"
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3>
          {currentMovie.name ||
            currentMovie.original_name ||
            currentMovie.title}{" "}
          <span className="text">Trailer</span>{" "}
        </h3>
        <iframe
          title={title}
          allowFullScreen
          src={`https://www.youtube.com/embed/${trailerId}`}
          className="trailer"
        />
      </motion.div>
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
