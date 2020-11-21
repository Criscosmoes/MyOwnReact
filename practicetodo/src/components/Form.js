import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { onInputChange, onFormSubmit, onClearClick } from '../actions'; 


const StyledForm = styled.div`

& {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
}

.form {
    width: 50%
}

.form > * {
    margin: 1%; 
}


`


const Form = ({onFormSubmit, onInputChange, todoInput, onClearClick}) => {
    return (
       <StyledForm>
           <h1>Cristian's Todos</h1>
           <form onSubmit={onFormSubmit} className="form">
               <label>
                   <h2>Create Todo</h2>
                   <input onChange={onInputChange} value={todoInput} type="text" /> 
               </label>
               <button type="submit">Create Todo</button>
           </form>
           <button onClick={onClearClick} type="submit">Clear Todo List</button>
       </StyledForm>
    )
}

const mapStateToProps = state => {

    return {
        todoInput: state.todoInput, 
    }
}

export default connect(mapStateToProps, { onInputChange, onFormSubmit, onClearClick })(Form)
