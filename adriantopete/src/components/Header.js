import React, {useState} from 'react'; 
import styled from 'styled-components'; 
import { Link } from 'react-scroll'; 

const StyledHeader = styled.div`


& {
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    /* background-image: url(${'https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/eastbaypioneers.com/images/2014/9/12/Adrian_Topete-21.jpg'}); */ 

    background-image: url(${'https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/eastbaypioneers.com/images/2014/9/12/Adrian_Topete-19.jpg'});
    background-size: cover; 
    background-position: 25% 16%;  
    height: 78vh;  
    color: white; 
}

.nav-box {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    text-align: center; 
    position: fixed; 
    top: 0; 
    width: 100%; 
    color: white; 
    height: 9vh; 
    background: transparent; 
}

.active {
    border: 2px solid black; 
    background: rgba(251, 78, 34, 1)
    
}

.navigation {
    width: 30%; 
}

h1 {
    width: 30%; 
    font-size: 3.5rem; 
}


.socials {
    width: 30%; 

}

a { 
    color: white; 
    margin: 0% 4.5%; 
    font-size: 1.6rem;
    width: 50%;  
    cursor: pointer; 
}

a:hover {
    border-bottom: 1px solid white; 
}

.title-info {
    text-align: center; 
    margin-top: 10%; 
}

h3 {
    font-size: 2rem; 
    margin-bottom: 2%; 
}

h2 {
    font-size: 4.5rem; 
}

span {
    color: #FB4E22; 
}

i {
    font-size: 5rem; 
}

.socials {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
}

.socials a:hover {
    border-bottom: 1px transparent; 
}


span:before {
    content: ''; 
    animation: animate infinite 13s; 
}

@keyframes animate{
    0%{
        content: 'Heart'; 
    }
    20%{
        content: 'Passion'; 
    }
    40%{
        content: 'Dedication'; 
    }
    60%{
        content: 'Style'; 
    }
    80% {
        content: 'Commitment'; 
    }
    100% {
        content: 'Bravery'
    }
}


@media (max-width: 375px){

    .socials {
        font-size: 1rem; 
        width: 10%; 
    }
    
}



`

const Header = () => {


    const [navBar, setNavBar] = useState(false); 


    const changeNavBar = () => {

        if(window.scrollY >= 49){
            setNavBar(true); 
        }
        else {
            setNavBar(false); 
        }
    }; 

    window.addEventListener('scroll', changeNavBar); 


    return (
        <StyledHeader id="home" >
            <div className={`nav-box ${navBar ? 'active' : ''}`} >
                <nav className="navigation">
                    <Link activeClass="active" to="home" smooth={true} duration={500}>Home
                    </Link>

                    <Link activeClass="active" to="about" smooth={true} duration={500}>About
                    </Link>

                    <Link activeClass="active" to="experience" smooth={true} duration={500}>Experience
                    </Link>

                    <Link activeClass="active" to="location" smooth={true} duration={500}>Location
                    </Link>
                </nav>

                <h1>ATGT Goalkeeping</h1>

                <div className="socials">
                    <a className="icons" href='mailto:adriantopete01@icloud.com'><i className="far fa-envelope"></i></a>
                    
                    <a href='https://www.instagram.com/atgt_/'><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="title-info">
                <h3>Train With <span></span></h3>
                <h2>Your Goalkeeping Journey<br></br>Starts Here</h2>
            </div>
        </StyledHeader>
    )
}


export default Header; 