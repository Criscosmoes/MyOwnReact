import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt } from 'react-icons/bi'; 
import { AiOutlineClose } from 'react-icons/ai'; 


import { connect } from "react-redux";
import { switchOpen, switchSearch } from '../actions'; 


import { Link } from 'react-router-dom'; 





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
    transition: 900ms; 
    height: 100%; 
  }


  .active {
    left: 0; 
    transition: 900ms; 
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
  }


  .click-search {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    width: 100%; 
    transition: 900ms; 
    color: black; 
  }

  .open {
    top: 6%; 
    transition: 900ms; 
    display: none; 
    font-size: 1.5rem;
  }


  input {
    width: 90%; 
    margin: 1%; 
    border: none; 
  }

`;

const NavBar = ({isOpen, switchOpen, searchOpen, switchSearch}) => {
  return (
    <StyledNavBar>
      <div className="navigation">

        <nav>
          <FaBars onClick={switchOpen}  className="bars" />
        </nav>

        <Link className="title" to="/">
          Movies Info
        </Link>

        {searchOpen ? <AiOutlineClose className="search" onClick={switchSearch} /> : <BiSearchAlt onClick={switchSearch} className="search"/> }


      </div>
      <div className={`menu ${isOpen ? 'active' : ''}`}>
            <div className="links">

                <AiOutlineClose className="search" onClick={switchOpen} />
              
                <Link className="link" onClick={switchOpen} to="/popular">
                  Popular
                </Link>

                <Link className="link" onClick={switchOpen} to="/top-rated">
                  Top Rated
                </Link>

                <Link className="link" onClick={switchOpen} to="/upcoming">
                  Upcoming
                </Link>
            </div>
      </div>
      <div className={`click-search ${searchOpen ? '' : 'open'}`}>
        <BiSearchAlt className="search" /> 
        <input  type="text" placeholder="Search..." /> 
      </div>
    </StyledNavBar>
  );
};


const mapStateToProps = state => {


    return {
        isOpen: state.isOpen,
        searchOpen: state.searchOpen 
    }
}

export default connect(mapStateToProps, {switchOpen, switchSearch})(NavBar);
