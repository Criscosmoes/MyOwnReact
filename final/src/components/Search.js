import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { exampleTrailers } from "../actions";

import { motion } from "framer-motion";

import Spinner from './Spinner'; 


import { FaPlay } from 'react-icons/fa'; 

const StyledSearch = styled.div`


  .movie {
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin: 1%; 
    border-bottom: 1px solid gray; 
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


  @media (max-width: 800px){


    .information {
      display: flex; 
      justify-content: center; 
      align-items: center; 
      flex-direction: column; 
      text-align: center; 
    }

    .information > * {
      margin: 3%
    }
    
    .image {
      width: 60%;
    }

    img {
      border: none; 
    }

    h2 {
      font-size: 4.5rem; 
    }

    p {
      width: 100%; 
      font-size: 1.8rem; 
      letter-spacing: .1rem; 
      line-height: 1.1; 
    }

    span {
      font-size: 3.5rem; 
    }


  }

  @media (max-width: 500px){


    .image {
      width: 90%
    }



    .information {
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      flex-direction: column; 
      width: 100%; 
      height: 310px; 
    }

    .information > * {
      margin: 3.5%
    }

    img {
      height: 300px
    }


    h2 {
      font-size: 2.3rem; 
    }

    h4 {
      font-size: 2rem; 
    }

    p {
      width: 100%; 
      font-size: 1.5rem; 
      letter-spacing: .1rem; 
      line-height: 1.1;
      overflow-y: auto;
      height: 200px; 
    }


    .movie-container {
      height: 350px;
    }

    .movie {
      height: 350px; 
    }


    span {
      font-size: 2rem; 
    }

    .to-trailer {
      font-size: 2rem; 
    }

    .rating {
      display: none; 
    }

  }



    



  }

`;

const Search = ({ movies, exampleTrailers, isLoading }) => {
  const filteredList = movies.filter((cur) => cur.poster_path !== null);

  // sorts a list from greatest popularity to smallest
  const sortedList = filteredList.sort(function(a,b){return b.popularity - a.popularity}); 

  const renderedList = sortedList.map((cur) => {
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
            <h4 className="rating">Rating: {cur.vote_average}</h4>
            <h4 className="rating"> Date Released: {cur.release_date || cur.first_air_date}</h4>
            
            <Link to={`/movie/${cur.id}`}><h3 onClick={() => exampleTrailers(cur.id, cur)} className="to-trailer"><FaPlay className="icon" /> Check Info</h3></Link>
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
