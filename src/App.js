import React from 'react';
import {useSelector} from 'react-redux'
import Nav from './components/nav'
import List from './components/list'
import Form from './components/form'


function App(props) {
  const todos = useSelector(state => state.todos);
  return (
    <div>
    <Nav />
     <Form />
     <br/>
      <List post={todos} id={todos.id}/>
    </div>
  );
}

export default App;
