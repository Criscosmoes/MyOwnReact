import React from "react";

import styled from "styled-components";


import { Link } from 'react-router-dom'; 

import { flipCard, fetchTrailers, exampleTrailers } from "../actions";
import { connect } from "react-redux";

const StyledHomePageContent = styled.div`
  .scene {
    min-width: 46.5%;
    height: 33rem;
    margin: 1%;
  }

  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .card__face {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }

  .card__face--front {
    border: 4px solid white;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
    
  }

  .card__face--back {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: rotateY(180deg);
  }

  .card.is-flipped {
    transform: rotateY(180deg);
  }

  .container {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .card__face--front img {
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 25%;
  }

  .title {
    text-align: center;
    font-size: 1.5rem;  
  }

  img {
    width: 100%;
    height: 75%;
  }

  h3 {
    font-size: 1.2rem;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin: 3%;
  }

  p {
    font-size: 1.8rem;
    font-weight: bold;
    overflow-x: auto;
    max-height: 100%;
  }

`;

const HomePageContent = ({ movies, title, flipCard, exampleTrailers }) => {
  const filteredList = movies.filter((cur) => cur.poster_path !== null);

  const moviesList = filteredList.map((cur) => {
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

  return (
    <StyledHomePageContent>
      <h2>{title}</h2>

      <div className="container">{moviesList}</div>
    </StyledHomePageContent>
  );
};

const mapStateToProps = (state) => {
  return {
    isFlipped: state.isFlipped,
  };
};

export default connect(mapStateToProps, { flipCard, fetchTrailers, exampleTrailers })(HomePageContent);
