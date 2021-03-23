import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from 'react-icons/fa'; 



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
    height: 65px;
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
  }

  button {
    background: transparent; 
    color: gray; 
    border: none; 
    outline: none; 
  }


  @media (max-width: 800px){

    & {
      display: flex; 
      justify-content: space-between;
      align-items: center; 
    }

    .title {
      width: 20%
    }

    .links {
      width: 42%; 
    }

    .all-links {
      font-size: 1.7rem; 
    }

    .icon {
      font-size: 2.7rem; 
    }

    .search {
      width: 20%
    }

    .close {
      font-size: 5rem; 
      border: none; 
    }


    form {

      width:100%
    }

    input {
      width: 100%; 
      font-size: 1.5rem; 
    }
  }


  @media (max-width: 500px){



    & {
      display: flex; 
      justify-content: space-between; 
      align-items: center; 

    }

    .sidebar {
      margin-left: 3%; 
    }

    .secret {
      width: 0%;
      display: none; 

    }
  
    .hide-sidebar {
      font-size: 3rem; 
      border: none; 
      color: orange;
    }
    
    .search {
      width: 80%; 
      margin-right: 3%
    }

    .close {
      font-size: 3.2rem; 
    }



  }


  @media (min-width: 502px){
    .secret {
      display: block; 

    }

    .hide-sidebar {
      display: none; 
    }
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
  const [isWidth, setisWidth] = useState(false);

  const removeDivs = () => {

    // we know the width of the screen is phone size; 
    if (window.innerWidth < 500){
        
      setisWidth(true); 
    }
    else {
      setisWidth(false); 
    }

  }

  useEffect(() => {

    window.addEventListener("resize", removeDivs);



  }, [])



  return (
    <StyledNavBar>

      
      {window.innerWidth > 500 ? "" : 
        <div className="sidebar">
          <FaBars className="hide-sidebar"/>
        </div>
      }

      <div className="title secret"><Link to="/"><h2><span>M</span>ovies Info</h2></Link></div>
  
      {window.innerWidth < 500 ? "" : 
      
      <div className="links">
        <Link className="all-links" onClick={switchOpen} to="/popular">Popular</Link>
        <Link className="all-links" onClick={switchOpen} to="/now_playing">Now Playing</Link>
        <Link className="all-links" onClick={switchOpen} to="/upcoming"> Upcoming</Link>
      </div>
      
      }

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
              placeholder="Search movies..."
              />
            <Link to={`/search/${term}`}><button onClick={() => fetchMovies('search', 'search/movie', term)} type="submit"><BiSearchAlt className="icon" /></button></Link>
            <AiOutlineClose
              className="close"
              onClick={() => setisOpen(!isOpen)}
            />{" "}
            </form>
           
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
