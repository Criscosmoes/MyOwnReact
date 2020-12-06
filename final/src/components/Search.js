import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { exampleTrailers } from "../actions";

import { motion } from "framer-motion";

import Spinner from './Spinner'; 

const StyledSearch = styled.div`
  h1 {
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
  }
`;

const Search = ({ movies, exampleTrailers, isLoading }) => {
  const filteredList = movies.filter((cur) => cur.poster_path !== null);

  const renderedList = filteredList.map((cur) => {
    return (
      <div key={cur.id} className="movie">
        <img
          alt={cur.title}
          src={`https://image.tmdb.org/t/p/original/${cur.poster_path}`}
        />
        <div className="info">
          <h2>{cur.title}</h2>
          <p className="overview">{cur.overview}</p>
          <Link className="link" to={`/movie/${cur.id}`}>
            <button onClick={() => exampleTrailers(cur.id, cur)}>Watch Trailer</button>
          </Link>
        </div>
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
          <h1>Results: {renderedList.length}</h1>
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
