import React, {useState} from 'react'; 
import styled from 'styled-components'; 


const StyledExperience = styled.div`

& { 

    @import url(${'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap'});
    display: flex; 
    justify-content: center; 
    align-items: center; 
    background: #C3BFBB; 
    height: 45vh; 
}

.image-container {
    display: flex;
    justify-content: space-around;
    align-items: center;   
    
}

.about {
    /* margin-top: 2%;  */
    text-align: center; 
    font-size: 4rem; 
}


img {
    max-width: 50%; 
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
    justify-content: space-around; 
    width: 45%;
    margin: 2%; 

}

.buttons {
    display: flex; 
    align-items: center; 
}

i {
    font-size: 8rem;
}

i:hover {
    cursor: pointer;
    opacity: .7; 
}

`


const Experience = () => {


    const [id, setId] = useState(0); 

    const teamsArr = ['https://upload.wikimedia.org/wikipedia/en/9/9f/EastBayPioneers.png','https://lh3.googleusercontent.com/proxy/jVphehE6hY2YXtjC32DJ2c8zb1m82uJ40WsiVwFucLW8Sf3eu2zSmbjywYsodq2yePgV0stbgCk_ii5OYXgpPW6dSw','https://i.pinimg.com/originals/ad/2d/48/ad2d480be51520932dd5059511a07985.jpg', 'https://upload.wikimedia.org/wikipedia/en/2/21/Ontario_Fury_MASL_logo_%282014%29.png', 'https://upsl.sportzstudio.com/team_images/1524572413_a.png', 'https://upload.wikimedia.org/wikipedia/en/0/00/National_Premier_Soccer_League.png' ]


    const forwardButton = () => {

        setId(id + 1); 
        

        if(id === 5){
            setId(0); 
        }

    }

    return (
        <StyledExperience>

            <div className="image-container">
            <div className="info">
                    <h2>Experience</h2>
                    <p>Ex proident aute aliquip eiusmod aute id ipsum amet id. Nulla qui in tempor officia nisi eu minim officia ea fugiat. Duis amet irure sunt laboris. Et nulla commodo ullamco anim eu commodo nisi cupidatat enim. Sunt veniam proident voluptate minim enim est consequat aute sit dolor. Et amet enim officia sint deserunt. Do qui non amet adipisicing ipsum labore dolor culpa quis culpa.</p>
                </div>
            <div className="team-container">
                    <img src={teamsArr[id]}/>
                    <div className="buttons">
                        <i class="fas fa-angle-right" onClick={forwardButton}></i>
                    </div>
            </div>
            </div>

        </StyledExperience>
    )
}


export default Experience; 