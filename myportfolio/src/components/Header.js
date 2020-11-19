import React, {useState} from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-scroll';
import Aos from 'aos'; 


const Header = () => {


    const StyledHeader = styled.div`
    
    & {
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-direction: column; 
        color: white;
        margin: 3%; 
    }


    // header links 
    
    .links {
        display: flex; 
        justify-content: flex-end; 
        width: 66%; 
        background: #363432;
        border: 1px solid white;   
        position: fixed;
        top: 0px; 
        z-index: 100; 
    }



    a {
        color: white; 
        font-size: 2.5rem; 
        margin: .7% 4%;
        cursor: pointer;
    }

    a:hover {
        color: #AE713D; 
    }
    
    .name-container {
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-direction: column; 
        width: 70%; 
        height: 70vh; 
        background-image: url(${'https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}); 
        background-size: cover; 
        background-position: 0% -5%; 
        border: 1px solid white; 
    }   

    h1 {
        font-size: 9rem; 
        margin: 3%; 
    }

    h2 {
        font-size: 7rem; 
        margin-bottom: 26%; 
    }

    .test {
        display: flex; 
        justify-content: center; 
        align-items: center; 
        height: 5vh; 
        width: 70%; 
        font-size: 3.1rem; 
        margin: 1% 0%; 
        border: 1px solid white; 
    }


    .active {
        width: 100%; 
        position: fixed; 
        top: 0px; 
    }
    


    
    `

    const [navBar, setNavBar] = useState(false); 
    


    const changeNavBar = () => {

        if(window.scrollY >= 49){
            setNavBar(true); 
        }
        else {
            setNavBar(false); 
        }

    }


    window.addEventListener('scroll', changeNavBar); 

    return (
        <StyledHeader>
            <div className={`links ${navBar ? 'active' : ''}`}>
                <Link  to='Home' smooth={true}   offset={-70} >
                    Home
                </Link>
                <Link to='About' smooth={true}  >
                    About
                </Link>
                <Link to='Projects' smooth={true} offset={30}>
                    Projects
                </Link>
            </div>
            <div className="name-container">
                <h1>Hello, I'm Cristian Fernandez.</h1>
                <h2>Front End Developer</h2>
            </div>
            <div className="test" data-aos="flip-down" data-aos-duration={1000}>
                <i  class="fas fa-arrow-down"></i>
            </div>
        </StyledHeader>
    )
}


export default Header; 