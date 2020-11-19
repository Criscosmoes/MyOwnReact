import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { VscGithub } from 'react-icons/vsc'
import { SiGooglechrome } from 'react-icons/si'; 

const StyledProjects = styled.div`
  & {
    background: #8e8a89;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
  }

  h1 {
      font-size: 8rem;
      margin: 1%
  }

  .projects {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  .project {
    width: 45%;
    object-fit: cover;
    margin: 1%;
  }

  h2 {
    font-size: 4rem;
    text-align: center;
    margin: 2%; 
  }

  .code {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  a {
    font-size: 4rem; 
    transform: 1s; 
  }

  a:hover {
      transform: scale(1.2); 
      color: #F0F0F0 
  }

  img {
      transition: transform .2s; 
  }

  img:hover {
      transform: scale(1.04); 
      cursor: pointer;
  }

  img, .code {
    border: 4px solid white;
    -moz-box-shadow: 20x 20x 80px black;
    -webkit-box-shadow: 20x 20x 80px black;
    box-shadow: 20x 20x 100px black;
  }

  p {
      margin: 1%;
      font-size: 2rem;
      line-height: 1.2
  }

  .icon {
      border: none; 
  }

`;

const Projects = ({ projects }) => {
  const projectList = projects.map((cur, index) => {
    return (
      <div key={index} className="project" data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`} data-aos-duraton={2000}>
        <h2>{cur.title}</h2>
        <img src={cur.img_src} />
        <div className="code">
    <p>Made with: {cur.madeWith}<br></br> Other: Styled Components, AOS, React Scroll</p>
          <a href="#"><VscGithub className="icon" /> </a>
          <a href="#"><SiGooglechrome className="icon" /> </a>

        </div>
      </div>
    );
  });

  return (
    <StyledProjects data-aos="fade-down" data-aos-duration="2000" id="Projects">
        <h1>Projects</h1>
      <div className="projects">{projectList}</div>
    </StyledProjects>
  );
};

export default Projects;
