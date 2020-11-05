import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt } from 'react-icons/bi'; 


import { connect } from "react-redux";
import { switchOpen } from '../actions'; 


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
  }

  .search {
    font-size: 2.5rem; 
  }

  .title {
    color: #c5c6c7; 
  }


  /* dropdown menu */ 

  .menu {
    background: lightgray; 
    width: 52%; 
    position: fixed;
    top: 4.9rem;
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


`;

const NavBar = ({isOpen, switchOpen}) => {
  return (
    <StyledNavBar>
      <div className="navigation">

        <nav>
          <FaBars onClick={switchOpen} className="bars" />
        </nav>

        <Link className="title" to="/">
          Movies Info
        </Link>

        <BiSearchAlt className="search"/> 


      </div>


      <div className={`menu ${isOpen ? 'active' : ''}`}>
            <div className="links">
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
    </StyledNavBar>
  );
};


const mapStateToProps = state => {


    return {
        isOpen: state.isOpen, 
    }
}

export default connect(mapStateToProps, { switchOpen })(NavBar);
