import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1f2833; 
    min-height: 19vh;
    color: white;
  }

  a {
    color: #66fcf1
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Made with{" "}
        <a href="https://developers.themoviedb.org/3/getting-started/introduction">
          Movies DB{" "}
        </a>
        API
      </p>
    </StyledFooter>
  );
};

export default Footer;
