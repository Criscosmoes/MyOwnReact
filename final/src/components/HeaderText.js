import React from 'react'; 
import styled from 'styled-components'; 


const StyledHeaderText = styled.div`

& {
    text-align: center; 
    margin-top: 6%; 

}

`



const HeaderText = () => {


    return (
        <StyledHeaderText>
            <p> Welcome to Movies Info. Search over 1,000 movie titles. </p>
        </StyledHeaderText>
    )
}

export default HeaderText; 