import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { connect } from "react-redux";
import { switchOpen, switchSearch, onInputChange, fetchMovies, clearFields } from "../actions";

import { Link } from "react-router-dom";

const StyledNavBar = styled.div`
  & {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border: none;
  }

  /* navigation top */

  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #1f2833;
    color: #66fcf1;
  }

  .navigation > * {
    margin: 3%;
  }

  .bars {
    margin: 3%;
    font-size: 2.5rem;
    border: none;
  }

  .search {
    font-size: 2.5rem;
    border: none;
  }

  .title {
    color: #c5c6c7;
  }

  /* dropdown menu */

  .menu {
    background: lightgray;
    width: 52%;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 500ms;
    height: 100%;
  }

  .active {
    left: 0;
    z-index: 1;
    transition: 500ms;
  }

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
  }

  .link {
    margin: 15%;
    text-align: center; 
  }

  .click-search {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    transition: 500ms;
    color: black;
  }

  .open {
    display: none;
    font-size: 1.5rem;
    transition: 500ms;
  }

  input {
    width: 90%;
    margin: 1%;
    border: none;
    outline: none;
  }

  .hidden-btn {
    border: none; 
  }

  form {
    width: 100%; 
  }

`;

const NavBar = ({
  isOpen,
  switchOpen,
  searchOpen,
  switchSearch,
  onInputChange,
  term,
  fetchMovies, 
  clearFields
}) => {



  return (
    <StyledNavBar>
      <div className="navigation">
        <nav>
          <FaBars onClick={switchOpen} className="bars" />
        </nav>

        <Link className="title" to="/">
          <h1 onClick={clearFields}>Movies Info</h1>
        </Link>

        {searchOpen ? (
          <AiOutlineClose className="search" onClick={switchSearch} />
        ) : (
          <BiSearchAlt onClick={switchSearch} className="search" />
        )}
      </div>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <div className="links">
          <AiOutlineClose className="search" onClick={switchOpen} />

          <Link className="link" onClick={switchOpen} to="/popular">
            Popular Movies
          </Link>

          <Link className="link" onClick={switchOpen} to="/now_playing">
            Now Playing
          </Link>

          <Link className="link" onClick={switchOpen} to="/upcoming">
            Upcoming Movies
          </Link>
        </div>
      </div>
      <div className={`click-search ${searchOpen ? "" : "open"}`}>
        <BiSearchAlt className="search" />

        <form>
          <input
            name="navSearchTerm"
            onChange={onInputChange}
            value={term}
            type="text"
            placeholder="Search..."
          />
          <Link to={`/search/${term}`}><button onClick={() => fetchMovies('search', 'search/movie', term)} className="hidden-btn" type="submit" /></Link>
        </form>
      </div>
    </StyledNavBar>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen,
    searchOpen: state.searchOpen,
    term: state.navSearchTerm,
  };
};

export default connect(mapStateToProps, {
  switchOpen,
  switchSearch,
  onInputChange,
  fetchMovies, 
  clearFields
})(NavBar);
