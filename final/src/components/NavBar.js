import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";

import { connect } from "react-redux";
import {
  switchOpen,
  switchSearch,
  onInputChange,
  fetchMovies,
  clearFields,
} from "../actions";

import { Link } from "react-router-dom";

const StyledNavBar = styled.div`
  & {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 7vh;
    color: lightgray;
    border-bottom: .5px solid gray; 
  }

  h2 {
    color: #ed9d3a;
    font-size: 2rem; 
  }

  span {
    font-size: 3rem; 
  }

  .title {
    width: 15%
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: lightgray;
    font-size: 2rem;
    width: 40%
  }

  .search {
    display: flex;
    justify-content: flex-end;
    width: 17.5%
  }

  .icon {
    font-size: 4rem;

    border: none;
  }

  .icon:hover {
    color: #ed9d3a;
    
    cursor: pointer;
  }

  .all-links {
    color: lightgray;
    font-size: 2rem;
    cursor: pointer;
  }

  .all-links:hover {
    color: #ed9d3a;
    
  }

  .hidden {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  form > * {
    margin: 1%
  }

  .hidden > * {
    margin: 1%;
  }

  input {
    border-radius: 25px;
    outline: none;
    font-size: 2rem;
    text-align: center;
  }

  button {
    background: transparent; 
    color: gray; 
    border: none; 
    outline: none; 
  }
`;

const NavBar = ({
  switchOpen,
  searchOpen,
  switchSearch,
  onInputChange,
  term,
  fetchMovies,
  clearFields,
}) => {
  const [isOpen, setisOpen] = useState(true);

  return (
    <StyledNavBar>
      
      <div className="title"><h2><span>M</span>ovies Info</h2></div>
      <div className="links">
        <Link className="all-links">Popular</Link>
        <Link className="all-links">Now Playing</Link>
        <Link className="all-links"> Upcoming</Link>
        <Link className="all-links">Top Rated</Link>
      </div>

      <div className="search">
        {isOpen ? (
          <BiSearchAlt className="icon" onClick={() => setisOpen(!isOpen)} />
        ) : (
          <div className="hidden">
            <form>
              <input
              name="navSearchTerm"
              onChange={onInputChange}
              value={term}
              type="text"
              placeholder="Search..."
              />
            <Link to={`/search/${term}`}><button onClick={() => fetchMovies('search', 'search/movie', term)} type="submit"><BiSearchAlt className="icon" /></button></Link>
            </form>
            <AiOutlineClose
              className="icon"
              onClick={() => setisOpen(!isOpen)}
            />{" "}
          </div>
        )}
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
  clearFields,
})(NavBar);

/*

 <div className="navigation">
        <nav>
          <FaBars onClick={switchOpen} className="bars" />
          <Link className="title" to="/">
            <h1 onClick={clearFields}>Movies Info</h1>
          </Link>
          
        </nav>

        <div className="blank"></div>

        <div className="other-links">
          <h4>Popular Movies</h4>
          <h4>Now Playing</h4>
          <h4>Upcoming</h4>
        </div>

        

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






*/
