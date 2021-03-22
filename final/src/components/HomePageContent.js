import React, {useEffect} from "react";

import styled from "styled-components";
import Aos from 'aos'; 
import { motion } from 'framer-motion'; 


import { Link } from 'react-router-dom'; 

import { flipCard, fetchTrailers, exampleTrailers } from "../actions";
import { connect } from "react-redux";

const StyledHomePageContent = styled.div`


  & {
    color: gray;
    font-family: 'montserrat', sans-serif;
  }


  .big-container > * {
    margin: 2%;  
  }


  h1 {
    font-size: 6rem; 
    text-align: center; 
    color: white; 
    font-weight: bolder; 
  }

  .container {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }

  h2 {
    font-size: 1.7rem; 
    margin: 3% 0%;
  }

  .movie {
    margin: 1%;
    cursor: pointer;
  }

  .movie:hover {
    color: white; 
  }


  img {
    min-width: 300px; 
    transition: ease-out .3s; 
  }

  img:hover {

    transform: scale(1.05);
    cursor: pointer;
    border: 4px solid orange; 
  }



  div::-webkit-scrollbar {
    width: 1rem;
 
  }

  div::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: orange;
  }


`;

const HomePageContent = ({ movies, title, flipCard, exampleTrailers }) => {


  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])


  const filteredList = movies.filter((cur) => cur.poster_path !== null);

  const moviezList = filteredList.map((cur) => {
    return (
      <div key={cur.id} className="scene">
        <div onClick={flipCard} className="card">
          <div className="card__face card__face--front">
            <img
              src={`https://image.tmdb.org/t/p/w500/${cur.poster_path}`}
              alt={cur.title}
            />
            <div className="info">
              <h3 className="title">{cur.title || cur.original_title || cur.name}</h3>
              <h3>
                Rating:{" "}
                {`${cur.vote_average}  ${cur.vote_average > 7.5 ? "🔥" : ""}`}
              </h3>
              <Link to={`/movie/${cur.id}`}><button onClick={() => exampleTrailers(cur.id, cur)}>Watch Trailer</button></Link>
            </div>
          </div>
          <div className="card__face card__face--back">
            <p>{cur.overview}</p>
          </div>
        </div>
      </div>
    );
  });


  const moviesList = filteredList.map((cur) => {

    return (
      <div className="movie" onClick={() => exampleTrailers(cur.id, cur)}>
        
        <Link  to={`/movie/${cur.id}`}><img src={`https://image.tmdb.org/t/p/w500/${cur.poster_path}`} /></Link>
        <h2>{cur.title || cur.original_title || cur.name}</h2>
      </div>
    )
  })


  return (
    <StyledHomePageContent>
      <motion.div className="big-container" exit={{ opacity: 1}} animate={{opacity: 1}} initial={{ opacity: 0}} duration={4000} >
        <h1 data-aos="flip-up" data-aos-duration={2500}>{title}</h1>

        <div className="container">{moviesList}</div>

        <hr></hr>
      </motion.div>
    </StyledHomePageContent>
  );
};

const mapStateToProps = (state) => {
  return {
    isFlipped: state.isFlipped,
  };
};

export default connect(mapStateToProps, { flipCard, fetchTrailers, exampleTrailers })(HomePageContent);
