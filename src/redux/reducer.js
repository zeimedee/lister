import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./constants"




const initialState = {
    todos: [],
    update: []
}

const rootReducer =  (state = initialState, action) => {
        
        switch(action.type){
            case ADD_TODO:
                return {...state, todos:  state.todos.concat(action.payload) } 

            case REMOVE_TODO:
                return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
                
            case UPDATE_TODO:
                return {...state, update: state.update.concat(action.payload)}        

            default:
            return state;
        }


}

export default rootReducer;