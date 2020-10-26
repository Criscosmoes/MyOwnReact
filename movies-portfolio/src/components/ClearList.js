import React from 'react'
import styled from 'styled-components'; 


const StyledClearList = styled.div`

& {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    margin: 2% 0%; 
}


h1 {
    font-size: 5rem; 
}

button {
    font-size: 2rem;
    cursor: pointer;
}

div {
    margin-left: 6%; 
}

`

const ClearList = ({setMyList}) => {


    const onClearClick = () => {


        setMyList([]); 
    }



    return (
        <StyledClearList>
            <div>  </div>
            <h1>My List of Movies</h1>
            <button onClick={onClearClick}>Clear List!</button>
        </StyledClearList>
    )
}

export default ClearList
