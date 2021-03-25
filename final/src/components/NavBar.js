import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from 'react-icons/fa'; 
import { AiFillFire } from 'react-icons/ai'; 
import { FaArrowAltCircleUp } from "react-icons/fa"; 
import { BsQuestionSquareFill } from "react-icons/bs"; 
import { ImCross } from "react-icons/im"; 



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
  /* & {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 65px;
    color: lightgray;
    border-bottom: .5px solid gray; 
  } */

  .big-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 65px;
    color: lightgray;
    border-bottom: .5px solid gray; 
    width: 100%
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
    width: 20%;
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
    width: 100%
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

  .close {
    font-size: 4.4rem; 
    border: none; 
    color: gray; 
    cursor: pointer;
  }
  
  .close:hover {
    color: orange; 
  }


  @media (max-width: 800px){

    & {
      display: flex; 
      justify-content: space-around;
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

    .img:hover {
      border: none; 
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
      color: #D3D3D3; 
    }
    
    .search {
      width: 80%; 
      margin-right: 3%
    }


    .close {
      font-size: 5rem; 
    }

    .title {
      width: 40%; 
      position: absolute; 
      right: 104px; 
      top: 17px; 
    }

    .hide {
      display: none; 
    }

    .icon {
      font-size: 3.5rem; 
    }

    .nav-links {
      position: fixed; 
      top: 0; 
      left: 0; 
      z-index: 2;
      height: 100vh; 
      width: 320px; 
      background: gray; 
      transform: translateX(-320px);
      transition: transform 0.3s; 
      background: #181818; 
      border-right: 3px solid gray; 
    }

    .open {
      transform: translateX(0); 
      transition: 500ms ease-in; 
    }

    .all-links {
      display: flex; 
      margin: 4%; 
      align-items: center; 
      font-size: 2.2rem; 
      padding: 12px 15px; 
      color: white; 
    }

    .all-links > * {
      margin-right: 15px; 
    }

    .nav-icons {
      font-size: 2.2rem; 
      border: none; 
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
  const [openInput, setOpenInput] = useState(false); 
  const [navOpen, setNavOpen] = useState(false); 

  const removeDivs = () => {

    // we know the width of the screen is phone size; 
    if (window.innerWidth < 500){
        
      setisWidth(true); 
    }
    else {
      setisWidth(false); 
    }

  }

  const changeBooleans = () => {


    setisOpen(!isOpen); 
    setOpenInput(!openInput); 

  }

  useEffect(() => {

    window.addEventListener("resize", removeDivs);



  }, [])



  return (
    <StyledNavBar>

      <div className="big-container">
        {window.innerWidth > 500 ? "" : 
          <div className="sidebar">
            <FaBars className="hide-sidebar" onClick={() => setNavOpen(true)}/>
          </div>
        }


        <div className={`title ${openInput ? "hide" : ""}`}><Link to="/"><h2><span>M</span>ovies Info</h2></Link></div>
    
        {window.innerWidth < 500 ? "" : 
        
        <div className="links">
          <Link className="all-links" onClick={switchOpen} to="/popular">Popular</Link>
          <Link className="all-links" onClick={switchOpen} to="/now_playing">Now Playing</Link>
          <Link className="all-links" onClick={switchOpen} to="/upcoming"> Upcoming</Link>
        </div>
        
        }

        <div className="search">
          {isOpen ? (
            <BiSearchAlt className="icon" onClick={changeBooleans} />
          ) : (
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
              onClick={changeBooleans}
            />{" "}
            </form>
          )}
        </div>
        {window.innerWidth < 500 ? <nav>
          <div className={`nav-links ${navOpen ? "open" : ""}`}>
            <Link className="all-links" onClick={() => setNavOpen(false)} to="/popular"> <AiFillFire className="nav-icons" />Popular</Link>
            <Link className="all-links" onClick={() => setNavOpen(false)} to="/now_playing"><FaArrowAltCircleUp className="nav-icons" />Now Playing</Link>
            <Link className="all-links" onClick={() => setNavOpen(false)} to="/upcoming"><BsQuestionSquareFill className="nav-icons" />Upcoming</Link>
            <div className="all-links" onClick={() => setNavOpen(false)}><ImCross className="nav-icons"/>Back</div>
          </div>
        </nav> : ""}
        
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
