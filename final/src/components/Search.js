import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { exampleTrailers } from "../actions";

import { motion } from "framer-motion";

import Spinner from './Spinner'; 


import { FaPlay } from 'react-icons/fa'; 

const StyledSearch = styled.div`
/*   h1 {
    margin: 1%;
  }

  .movie-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 150px;
    height: 210px;
  }

  .movie {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1%;
    background: #1f2833; 
    color: white; 
    border: 4px solid white;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
  }

  p {
    text-align: center;
    overflow-y: auto;
    height: 16vh;
  }

  h2 {
    font-size: 2rem;
  }

  .info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    margin: 1%;
  }

  .info > * {
    margin: 1%;
  }

  button {
    background: #45a29e; 
    color: white; 
    padding: 2%; 
    width: 100%; 
  }

  .overview {
    margin: 5%
  }

  .link {
    width: 70%; 
  } */


  .movie {
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin: 1%
  }

  .movie > * {
    margin: 1%
  }

  .image {
    display: flex; 
    justify-content: flex-end; 
    width: 40%; 
  }

  img {
    width: 400px;
    height: 600px; 
    transition: ease-out .2s; 
    margin: 1%
  }

  h2 {

    font-size: 6rem; 
  }

  h3 {
    font-size: 3rem; 
    color: white; 
    transition: ease-out .3s; 
  }

  h4 {
    font-size: 3rem; 
  }

  h3:hover {
    color: orange;
    transition: ease-in .3s; 
  }


  p {
    width: 80%; 
    font-size: 2rem; 
  }

  span {
    font-size: 4rem; 
  }

  .information {
    display: flex;
    align-items: flex-start; 
    flex-direction: column; 
    width: 60%; 
    height: 585px; 
    color: white; 
  }

  .information > * {
    margin: 1.5%
  }

  .icon {
    border: none; 
    outline: none; 
    font-size: 2rem; 
  }

  img:hover {
    transform: scale(1.05);
    cursor: pointer;
    border: 5px solid orange; 
  }


  hr {
    width: 80%
  }

`;

const Search = ({ movies, exampleTrailers, isLoading }) => {
  const filteredList = movies.filter((cur) => cur.poster_path !== null);

  const renderedList = filteredList.map((cur) => {
    return (
      <div key={cur.id} className="movie">
        <div className="image">
          <Link to={`/movie/${cur.id}`}>
          <img
            alt={cur.title}
            src={`https://image.tmdb.org/t/p/original/${cur.poster_path}`}
            onClick={() => exampleTrailers(cur.id, cur)}
          />
          </Link>
        </div>

        <div className="information">
            <h2>{cur.title || cur.original_name}</h2>
            <p><span>Description</span> <br></br> <br></br>{cur.overview}</p>
            <h4>Rating: {cur.vote_average}</h4>
            <h4>Date Released: {cur.release_date || cur.first_air_date}</h4>
            
            <Link to={`/movie/${cur.id}`}><h3 onClick={() => exampleTrailers(cur.id, cur)} className="to-trailer"><FaPlay className="icon" /> Check Info</h3></Link>
            <hr></hr>
        </div>
        {/* <div className="info">
          <h2>{cur.title}</h2>
          <p className="overview">{cur.overview}</p>
          <Link className="link" to={`/movie/${cur.id}`}>
            <button onClick={() => exampleTrailers(cur.id, cur)}>Watch Trailer</button>
          </Link>
        </div> */}
      </div>
    );
  });

  return (
    <StyledSearch>
      {isLoading ? (
        <div>
          <Spinner /> 
        </div>
      ) : (
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: .5 }}
          className="movie-container"
        >
          {renderedList}
        </motion.div>
      )}
    </StyledSearch>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { exampleTrailers })(Search);
