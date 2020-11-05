import React from 'react'; 
import styled from 'styled-components'; 


const StyledSearchBar = styled.div`


form {
    display: flex; 
    justify-content: center; 
    align-items: center; 
}

input {
    margin: 3%; 
}

`

const SearchBar = () => {



    return (
        <StyledSearchBar>
            <form>
                <input type="text" /> 
            </form>
        </StyledSearchBar>
    )
}

export default SearchBar; 