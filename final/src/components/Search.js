import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchTrailers } from "../actions";

import { motion } from "framer-motion";

const StyledSearch = styled.div`
  h1 {
    margin: 2%;
  }

  .movie-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 150px;
    height: 200px;
  }

  .movie {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2%;
  }

  p {
    text-align: center;
    overflow-y: auto;
    height: 16vh;
  }

  h2 {
    font-size: 1.9rem;
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
`;

const Search = ({ movies, fetchTrailers }) => {
  const filteredList = movies.filter((cur) => cur.poster_path !== null);

  const renderedList = filteredList.map((cur) => {
    return (
      <div className="movie">
        <img src={`https://image.tmdb.org/t/p/original/${cur.poster_path}`} />
        <div className="info">
          <h2>{cur.title}</h2>
          <p>{cur.overview}</p>
          <Link to={`/movie/${cur.id}`}>
            <button onClick={() => fetchTrailers(cur.id)}>Watch Trailer</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <StyledSearch>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1, }}
        initial={{ opacity: 0,}}
        transition={{ delay: 1, duration: 0.6 }}
        className="movie-container"
      >
        <h1>Results: {movies.length}</h1>
        {renderedList}
      </motion.div>
    </StyledSearch>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { fetchTrailers })(Search);
