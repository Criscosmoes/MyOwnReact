import React from "react";
import styled from "styled-components";

const StyledHomePage = styled.div`
  /* header */

  .header {
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    background-image: url(${"https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"});
    background-size: cover; 
    color: white;
    height: 30vh;
  }

  .info > * {
   /*  margin: 1%;  */
    margin-left:4%;
  }

  h1 {
    font-size: 5rem;
    margin-top: 18%; 
  }

  p {
    font-size: 2rem;
    line-height: 1.3;
    width: 100%; 
    margin: 5%; 
  }

  input {
    margin: 1.5%; 
    width: 70%; 
  }

  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
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
