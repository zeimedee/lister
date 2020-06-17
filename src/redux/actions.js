import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from './constants'

export function addTodo(payload){
    return {type:ADD_TODO, payload:payload}
}

export function removeTodo(payload){
    return {type:REMOVE_TODO, payload:payload}
}

export function UpdateTodo(payload){
    return{type:UPDATE_TODO, payload:payload}
}