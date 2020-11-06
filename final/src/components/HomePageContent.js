import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchMovies } from "./../actions/index";

const StyledHomePageContent = styled.div`
  & {
    height: 60vh;
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
    min-width: 40%; 
    margin: 1%; 
    text-align: center; 
  }

  img {
      width: 100%; 
  }
`;

const HomePageContent = ({movies, fetchMovies}) => {



  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);


  const moviesList = movies.map(cur => {
      return (
          <div className="movie" key={cur.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${cur.poster_path}`} /> 
              <h3>{cur.title}</h3>
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
