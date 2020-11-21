import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'; 
import { onTodoClick } from '../actions'; 


const StyledTodo = styled.div`

.todo {
    cursor: pointer;
}

.active {
    text-decoration: line-through; 
}

`

const Todo = ({task, id, completed, onTodoClick}) => {


    return (
        <StyledTodo >
            <h2 className={`todo ${completed ? 'active' : ''}`} onClick={() => onTodoClick(id)} >{task}</h2>
        </StyledTodo>
    )
}

const mapStateToProps = state => {

    return {
        isCompleted: state.isCompleted, 
    }
}

export default connect(mapStateToProps, {onTodoClick})(Todo)
