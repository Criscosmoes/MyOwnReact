import nextId from 'react-id-generator'



const initialState = {
    todos: [], 
    todoInput: '', 
    isCompleted: false, 
}


export default (state = initialState, action) => {


    switch(action.type){
        case "ADD_TODO": 

            return {
                ...state, 
                todos: [...state.todos, action.payload], 
            }
        case "INPUT_CHANGE": 


            return {
                ...state, 
                todoInput: action.payload, 
            }
        case "FORM_SUBMIT": 

            if(!state.todoInput) return; 

            return {
                ...state, 
                todos: [...state.todos, {
                    id: nextId(),
                    task: state.todoInput.trim(), 
                    completed: false, 
                }], 
                todoInput: '', 
                
            }
        case "TODO_CLICK": 


            return {
                ...state, 
                todos: state.todos.map(cur => {
                    if(action.payload === cur.id){
                        return {
                            ...cur, 
                            completed: !cur.completed, 
                        }
                    }
                    else {
                        return cur; 
                    }
                })
            }
        case "CLEAR_CLICK": 
        
            return {
                ...state, 
                todos: state.todos.filter(cur => cur.completed === false)
            }
        default: 
            return state; 
    }
}