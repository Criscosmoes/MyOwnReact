import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { FcSearch } from "react-icons/fc";

import { onInputChange, fetchMovies } from "../actions";

const StyledHomePageHeader = styled.div`
  /* header */

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${"https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"});
    background-size: cover;
    background-position: 20% 67%;
    color: white;
    height: 40vh;
  }

  .header > * {
    margin: 2%;
  }

  .info > * {
    margin-left: 4%;
  }

  .info {
    width: 95%;
  }

  h1 {
    font-size: 5.5rem;
  }

  p {
    font-size: 2rem;
    line-height: 1.3;
  }


  .form {
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  input {
    height: 100%; 
    width: 60%; 
    outline: none; 
    border-radius: 0%; 
  }

  button {
    background: #1f2833;
    border: none;
    outline: none;
    width: 11rem; 
  }

  .search-btn {
    font-size: 2rem;
    background: transparent;
    border: none;
    outline: none;
  }


`;

const HomePageHeader = ({ term, onInputChange, fetchMovies }) => {
  return (
    <StyledHomePageHeader>
      <div className="header">
        <div className="info">
          <h1>Greetings.</h1>
          <p>
            Millions of Movies at your touch.<br></br> Simply Search.{" "}
          </p>
        </div>

        <form className="form">
          <input
            name="searchTerm"
            onChange={onInputChange}
            value={term}
            type="text"
            placeholder="Search..."
          />

          <Link className="test" to={`/search/${term}`}>
            <button
              onClick={() => fetchMovies("search", "search/movie", term)}
              type="submit"
            >
              <FcSearch className="search-btn" />
            </button>
          </Link>
        </form>
      </div>
    </StyledHomePageHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    term: state.searchTerm,
  };
};

export default connect(mapStateToProps, { onInputChange, fetchMovies })(
  HomePageHeader
);
