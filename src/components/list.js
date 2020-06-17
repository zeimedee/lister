import React from 'react';
import {useDispatch } from 'react-redux';
import {removeTodo} from '../redux/actions'
import Post from './post'


function List(props) {   
    const dispatch = useDispatch();
   


    return (
        <div>
         {props.post.map((todo,index)=>{
             return <div><Post
                 key={index}
                 id={todo.id}
                 time={todo.time}
                 title={todo.title}
                 description={todo.description}
                 handleClick={()=>{dispatch(removeTodo(todo.id))}}
             />   
            </div> 
            
        })} 
            
        </div>
    )
}

export default List
