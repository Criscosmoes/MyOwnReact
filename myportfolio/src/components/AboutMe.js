import React, {useEffect} from 'react'; 
import styled from 'styled-components'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css';  


const StyledAboutMe = styled.div`

& { 
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    background: transparent; 
    height: 100vh; 
    margin: 2% 0%; 
}

h1 {
    text-align: center; 
    font-size: 8rem; 
    margin: 1%; 
}

.background {
    display: flex; 
    justify-content: center; 
    flex-direction: column; 
    width: 100%; 
    background: #A16C32;
}

.info {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    text-align: center; 
}

.info > * {
    margin: 1%; 
    width: 53rem; 
    height: 53rem; 
    border: 4px solid white;
    -moz-box-shadow: 10px 10px 50px black;
    -webkit-box-shadow: 10px 10px 50px black;
    box-shadow: 10px 10px 50px black;
}

p {
    font-size: 3rem; 
    line-height: 1.2
}

h2 {
    text-align: center;
    font-size: 4rem;  
    width: 100%; 
    margin: 2% 0%; 
}

.folder {
    width: 100%; 

}

.skills {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-direction: column; 
    height: 50%; 
}
.skills > * {
    margin: 1%
}

h3 {
    font-size: 2rem; 
}

`

const AboutMe = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 }); 
    }, []); 


    return (
        <StyledAboutMe id="About" >
            
            <div data-aos="fade-up" data-aos-duration="2000"  className="background">
                <h1>About Me</h1>
                <div className="info">
                    <div data-aos="zoom-in" data-aos-duration={2500} >
                        <h2>Picture</h2>
                        <p>Cillum adipisicing laboris in consectetur Lorem proident. Est ex excepteur irure incididunt in excepteur elit duis. Eu et et ullamco fugiat sit deserunt commodo consectetur anim voluptate. Ipsum fugiat ad laboris officia quis ea cillum nisi qui fugiat nulla officia duis.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration={2500} >
                        <h2>Description</h2>
                        <p>Hi, my name is Cristian and I'm currently a student/bootcamp student persuing a B.A. in Computer Science. Over the past few years, coding has developed into a passion of mine. I love to dedicate my time to better my skills, and explore the world of web development. My overall goal is to work together in a team to make the world a more efficient place.  </p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration={2500}>
                        <h2>Skills</h2>
                        <div className="skills">
                            <h3>FrontEnd: </h3>
                            <p> HTML5, CSS3, JavaScript, JSX, ReactJS, Redux</p>
                            <h3>Backend: </h3>
                            <p>NodeJS, Express, MongoDB</p>
                            <h3>Other: </h3>
                            <p>GitHub, GitBash </p>
                        </div>
                    </div>
                </div>
            </div>

        </StyledAboutMe>
    )
}



export default AboutMe; 