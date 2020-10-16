import React from 'react';
import styled from 'styled-components';  


const StyledAboutMe = styled.div`

& { 
    @import url(${'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap'});
    background: #C3BFBB;
    padding: 2%; 
}


.about {
    margin-top: 2%; 
    text-align: center; 
    font-size: 4rem; 
}


img {
    width: 13%; 
    margin: 1%;
    border:4px solid #fff;
    -moz-box-shadow: 10px 10px 50px black; 
    -webkit-box-shadow: 10px 10px 50px black;;
    box-shadow: 10px 10px 50px black;; 
}

p {
    width: 90%; 
    text-align: center;
    font-size: 2.8rem;  
    font-family: 'Titillium Web', sans-serif;
}

h2 {
    text-align: center; 
    font-size: 3.4rem;
    margin: 2%; 
}


.image-container {
    width: 100%; 
    display: flex;
    justify-content: center; 
    align-items: center;  
}

.info {

    width: 35%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    margin-left: 15%; 
}

hr {
 margin-top: 3%; 
}

`


const AboutMe = () => {


    return (
        <StyledAboutMe id="about">

            <div className="image-container" id="about">
                <img src='https://eastbaypioneers.com/images/2015/8/27/adrian.jpg?width=300'/>
                <div className="info">
                    <h2>About Me</h2>
                    <p>Ex proident aute aliquip eiusmod aute id ipsum amet id. Nulla qui in tempor officia nisi eu minim officia ea fugiat. Duis amet irure sunt laboris. Et nulla commodo ullamco anim eu commodo nisi cupidatat enim. Sunt veniam proident voluptate minim enim est consequat aute sit dolor. Et amet enim officia sint deserunt. Do qui non amet adipisicing ipsum labore dolor culpa quis culpa.</p>
                </div>
            </div>
            <hr></hr>
       
        </StyledAboutMe>
    
    )
}


export default AboutMe; 