import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavBar = styled.div`
  & {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #1f2833;
  }

  .link, .top-rated, .popular, .upcoming {
    margin: 1%; 
  }

  button {
    font-size: 2.2rem;
    margin: 1%;
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none; 
    color: white;
  }

  button:hover {
    color: #66fcf1;
  }

  .home {
    background: transparent;
    color: white;
  }

  .home:hover {
    background: #66fcf1;
    color: black;
  }

  .link {
    background: transparent;
  }

  .top-rated {
    text-align: center;
    width: 8%;
  }

  .mylist {
    width: 8%
  }
`;

const NavBar = ({ buttonClick }) => {
  return (
    <StyledNavBar>
      <Link className="link" to="/">
        <button className="home" onClick={buttonClick}>Home</button>
      </Link>

      <Link className="top-rated" to="/top-rated">
        <button onClick={buttonClick}>Top Rated</button>
      </Link>

      <Link className="popular" to="/popular">
        <button onClick={buttonClick}>Popular</button>
      </Link>

      <Link className="upcoming" to="/upcoming">
        <button onClick={buttonClick}>Upcoming</button>
      </Link>

      <Link className="mylist" to="/mylist" >
        <button onClick={buttonClick}>My List</button>
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
