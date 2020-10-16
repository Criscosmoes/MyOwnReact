import React from 'react'; 
import styled from 'styled-components'; 


const StyledLocation = styled.div`

& {
    @import url(${'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap'});
    display: flex; 
    justify-content: space-around;
    align-items: center; 
    background: #C3BFBB; 
}

iframe {
    border:4px solid black;
    -moz-box-shadow: 10px 10px 50px black; 
    -webkit-box-shadow: 10px 10px 50px black;;
    box-shadow: 10px 10px 50px black; 
}

.location {
    display: flex; 
    
    justify-content: center; 
    flex-direction: column; 
    width: 35%; 
    text-align: center; 
}

h2 {
    font-size: 3.4rem; 
    margin: 3%; 
}

p {
    font-size: 2.8rem; 
    font-family: 'Titillium Web', sans-serif;
}


`


const Location = () => {


    return (
        <StyledLocation id="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105913.76628197063!2d-117.46956781480026!3d33.94613812704888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca6df7ff47dbb%3A0xf7a1d705135e0ae8!2sRiverside%2C%20CA!5e0!3m2!1sen!2sus!4v1602807162347!5m2!1sen!2sus" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>


            <div className="location">
                <h2>Location</h2>
                <p>Ullamco consectetur esse ad est laboris ad et ad exercitation aliquip ad officia cillum ullamco. Irure officia culpa dolore eiusmod pariatur minim incididunt est anim tempor deserunt eiusmod. Exercitation est proident nulla sunt adipisicing ex exercitation qui ipsum et ipsum. Consequat incididunt nostrud amet anim sint nulla ea. Sit aute amet commodo fugiat reprehenderit excepteur commodo anim duis quis. Amet nostrud do non ad nulla proident laboris tempor. Fugiat laborum eiusmod ut labore aliquip ipsum minim ad eiusmod laboris ad.</p>
            </div>
        </StyledLocation>
    )
}


export default Location; 