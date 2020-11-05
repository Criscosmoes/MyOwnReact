import React from "react";
import styled from "styled-components";

const StyledHomePage = styled.div`
  /* header */

  .header {
    background-image: url(${"https://images.unsplash.com/photo-1540266908617-307d8bdaacbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"});
    background-size: cover; 
    color: white;
  }

  .info > * {
   /*  margin: 1%;  */
    margin-left: 4%; 
  }

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
    line-height: 1.3;
  }

  input {
    margin: 1.5%; 
    width: 50%; 
  }

  .input {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="header">
        <div className="info">
          <h1>Greetings.</h1>
          <p>
            Millions of Movies at your touch.<br></br> Simply Search.{" "}
          </p>
        </div>

        <div className="input">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
