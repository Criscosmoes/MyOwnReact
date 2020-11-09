import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { onInputChange, fetchMovies } from '../actions'; 

const StyledHomePageHeader = styled.div`
  /* header */

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${"https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"});
    background-size: cover;
    color: white;
    height: 40vh;
  }

  .info > * {
    /*  margin: 1%;  */
    margin-left: 4%;
  }

  h1 {
    font-size: 5.5rem;
    margin-top: 24%;
  }

  p {
    font-size: 2rem;
    line-height: 1.3;
    width: 100%;
    margin: 5%;
  }

  input {
    width: 80%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 2rem;
  }

  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
  }
`;

const HomePageHeader = ({ term, onInputChange, fetchMovies}) => {

  return (
    <StyledHomePageHeader>
      <div className="header">
        <div className="info">
          <h1>Greetings.</h1>
          <p>
            Millions of Movies at your touch.<br></br> Simply Search.{" "}
          </p>
        </div>

        <div className="input">
         
         <form>
         <input name="searchTerm" onChange={onInputChange} value={term} type="text" placeholder="Search..." />
         
         <Link to={`/search/${term}`}>
          <button onClick={() => fetchMovies('search', 'search/movie', term)} type="submit">Click Me</button>
         </Link>
         </form>
        </div>
      </div>
    </StyledHomePageHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    term: state.searchTerm,
  };
};

export default connect(mapStateToProps, { onInputChange, fetchMovies })(HomePageHeader);
