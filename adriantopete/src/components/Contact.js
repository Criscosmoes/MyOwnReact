import React from 'react'; 
import styled from 'styled-components'; 


const StyledContact = styled.div`

& {

    display: flex; 
    align-items: center; 
    flex-direction: column; 
    height: 50vh;
    background-image: url(${`https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/eastbaypioneers.com/images/2014/9/12/Adrian_Topete-20.jpg`}); 
    background-size: cover; 
    background-position: 20% 67%; 
    color: white; 
}

h2 {
    margin-top: 3%; 
}


.ready {
    font-size: 6.5rem; 
    text-align: center; 
    width: 30%; 
    line-height: 1.2; 
}

.contacts {

    width: 60%; 
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    margin-top: 2%; 
    font-size: 2rem; 
    text-align: center; 
}

.email {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 80%; 
}

i:hover {
    color: #FE681F; 
}



p {
    font-size: 2.9rem;
}

i {
    font-size: 5rem; 
    color: white;
    margin-top: 60%;  
}

.active {
    height: 13vh;
    margin-bottom: .5% 
}

h3 {
    font-size: 2.6rem; 
}

.placeholder {
    height: 4.5vh; 
}

span {
    color: #FE681F; 
}



@media (max-width: 375px){


}

`


const Contact = () => {

    return (
        <StyledContact>
            <h2 className="ready">Ready to Train? <span>Contact Me.</span></h2>
            <div className="contacts">
                <div className="email">
                    <h3>Email</h3>
                    <a href='mailto:adriantopete01@icloud.com'><i className="far fa-envelope"></i></a>
                </div>
                <div className="email">
                    <h3>Instagram</h3>
                    <a href='https://www.instagram.com/atgt_/'><i className="fab fa-instagram"></i></a>
                </div>
                <div className="email active">
                    <h3>Phone Number</h3>
                    <div className="placeholder"></div>
                    <p>(626)-222-2222</p>
                </div>
            </div>
        </StyledContact>
    )
}


export default Contact; 