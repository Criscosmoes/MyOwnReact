import React from 'react'
import styled from 'styled-components'; 
import { connect } from 'react-redux'
import Todo from './Todo';

const StyledTodoList = styled.div`

& {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-wrap: wrap; 
    height: 50vh; 
}


`

const TodoList = ({todos}) => {

  
    const renderedList = todos.map((cur, index) => {
        return <Todo key={index} task={cur.task} id={cur.id} completed={cur.completed} /> 
    })

    return (
        <StyledTodoList>
            {renderedList}
        </StyledTodoList>
    )
}

const mapStateToProps = state => {

    return {
        todos: state.todos, 
    }
}

export default connect(mapStateToProps)(TodoList)
