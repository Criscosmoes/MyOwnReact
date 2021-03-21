import React, {useState} from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


import { motion } from "framer-motion"

import { connect } from "react-redux";
import { switchOpen, switchSearch, onInputChange, fetchMovies, clearFields } from "../actions";

import { Link } from "react-router-dom";

const StyledNavBar = styled.div`

  & {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    height: 7vh;
    background: black;
    color: lightgray;
  }

  h2 {
    color: #ED9D3A
  }

  .links {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    width: 60%; 
    color: lightgray; 
    font-size: 2rem; 
  }

  .search {
    display: flex; 
    justify-content: flex-end; 
    margin-right: 5%; 
    width: 20%; 
    transition: all ease-in .3s; 
  }

  .icon {
    font-size: 4rem;
    transition: all ease-out .2s; 
    border: none; 
  }

  .icon:hover {
    color: #ED9D3A; 
    transition: ease-in .2s;
    cursor: pointer;
  }


  .all-links {
    color: lightgray; 
    font-size: 2rem;
    transition: ease-out .2s; 
    cursor: pointer;
  }

  .all-links:hover {
    color: #ED9D3A; 
    transition: ease-in .2s; 
  }

  .hidden {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    transition: all .2s ease-out;
    width: 100%;

  }

  .hidden > * {
    margin: 1%
  }

  input {
    width: 100%; 
    height: 80%; 
    border-radius: 25px; 
    outline: none;
    font-size: 2rem;
    text-align: center; 
  }


`

const NavBar = ({
  switchOpen,
  searchOpen,
  switchSearch,
  onInputChange,
  term,
  fetchMovies, 
  clearFields
}) => {


  const [isOpen, setisOpen] = useState(true); 



  



  return (
    <StyledNavBar>
      <div className="links">
        <h2>MI</h2>
        <Link className="all-links">Popular</Link>
        <Link className="all-links">Now Playing</Link>
        <Link className="all-links"> Upcoming</Link>
        <Link className="all-links">Top Rated</Link>

      </div>

      <div className="search">
        {isOpen ? <BiSearchAlt className="icon" onClick={() => setisOpen(!isOpen)}/> : <div className="hidden"><input type="text" /> <BiSearchAlt className="icon" /> <AiOutlineClose className="icon" onClick={() => setisOpen(!isOpen)} /> </div>}
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


