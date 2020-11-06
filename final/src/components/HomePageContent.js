import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchMovies } from "./../actions/index";

const StyledHomePageContent = styled.div`
  & {
   
  }

  h2 {
    text-align: center;
    margin: 3%;
  }

  .container {
    display: flex;
    overflow-x: auto;
  }


  .movie {
    display: flex; 
    flex-direction: column; 
    min-width: 45%; 
    margin: 1.5%; 
    text-align: center; 
    border: 4px solid white;
    -moz-box-shadow: 5px 5px 40px black;
    -webkit-box-shadow: 5px 5px 40px black;
    box-shadow: 10px 10px 30px black;
  }

  img {
    width: 100%; 
    height: 250px; 
    min-height: 250px; 
    
  }

  .title {
    display: flex; 
    justify-content: center;
    align-items: center; 
    background: #1f2833; 
    color: white; 
    width: 100%; 
    height: 100%; 
  }
`;

const HomePageContent = ({movies, fetchMovies}) => {



  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const filteredList = movies.filter(cur => cur.poster_path !== null); 

  const moviesList = filteredList.map(cur => {
      return (
          <div className="movie" key={cur.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${cur.poster_path}`} /> 
              <div className="title">
                  <h3>{cur.title}</h3>
              </div>
              
          </div>
          
      )
  })


  return (
    <StyledHomePageContent>
      <h2>What's Popular</h2>
      <div className="container">
        {moviesList}
      </div>
    </StyledHomePageContent>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { fetchMovies })(HomePageContent);
