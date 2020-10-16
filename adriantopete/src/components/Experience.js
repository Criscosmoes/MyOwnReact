import React, {useState} from 'react'; 
import styled from 'styled-components'; 


const StyledExperience = styled.div`

& { 

    @import url(${'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap'});
    background: #C3BFBB; 
}

.image-container {
    display: flex;
    justify-content: space-around;
    align-items: center; 
    height: 45vh; 
    
}

.about {
    margin-top: 2%; 
    text-align: center; 
    font-size: 4rem; 
}


img {
    max-width: 80%; 
    border:4px solid black;
    -moz-box-shadow: 10px 10px 50px black; 
    -webkit-box-shadow: 10px 10px 50px black;;
    box-shadow: 10px 10px 50px black;  
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


.info {

    width: 45%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    margin: 2%; 
}

.team-container {
    display: flex; 
    justify-content: space-evenly; 
    width: 45%;
    margin: 4%; 

}

.buttons {
    display: flex; 
    align-items: center; 
    margin-right: 3%; 
}

i {
    font-size: 8rem;
    
}

i:hover {
    cursor: pointer;
    opacity: .7; 
}

hr {
    width: 95%; 
    margin-top: 2.5%; 

}

`


const Experience = () => {


    const [id, setId] = useState(0); 

    const teamsArr = ['https://upload.wikimedia.org/wikipedia/en/9/9f/EastBayPioneers.png','https://lh3.googleusercontent.com/proxy/06gtvFEmVv6Iu7uBTANMjgI7oxu602Qr7fl2LsH61ukI0bKCqH4-rC9VYNSQrrbH-hEORLUmPAcjKgMixfYiV9KE6hwACQM','https://i.pinimg.com/originals/ad/2d/48/ad2d480be51520932dd5059511a07985.jpg', 'https://49th0q3ez9gr6di2u1gy1ta1-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/OF_White.png', 'https://upsl.sportzstudio.com/team_images/1524572413_a.png', 'https://upload.wikimedia.org/wikipedia/en/0/00/National_Premier_Soccer_League.png' ]


    const forwardButton = () => {

        setId(id + 1); 
        

        if(id === 5){
            setId(0); 
        }

    }

    return (
        <StyledExperience>

            <div className="image-container" id="experience">
            <div className="info">
                    <h2>Experience</h2>
                    <p>Ex proident aute aliquip eiusmod aute id ipsum amet id. Nulla qui in tempor officia nisi eu minim officia ea fugiat. Duis amet irure sunt laboris. Et nulla commodo ullamco anim eu commodo nisi cupidatat enim. Sunt veniam proident voluptate minim enim est consequat aute sit dolor. Et amet enim officia sint deserunt. Do qui non amet adipisicing ipsum labore dolor culpa quis culpa.</p>
                </div>
            <div className="team-container">
                    <img src={teamsArr[id]}/>
            </div>
            <div className="buttons">
                        <i class="fas fa-angle-right" onClick={forwardButton}></i>
                    </div>
            </div>
            <hr></hr>

        </StyledExperience>
    )
}


export default Experience; 