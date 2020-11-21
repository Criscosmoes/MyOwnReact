export const addTodo = todo => {
    
    return {
        type: "ADD_TODO", 
        payload: todo, 
    }
}

export const onInputChange = e => {


    return {
        type: "INPUT_CHANGE", 
        payload: e.target.value, 
    }
}


export const onFormSubmit = e => {

    e.preventDefault(); 

    return {
        type: "FORM_SUBMIT",
    }
}

export const onTodoClick = (id) => {



    return {
        type: "TODO_CLICK", 
        payload: id, 
    }
}

export const onClearClick = () => {


    return {
        type: "CLEAR_CLICK", 
        
    }
}