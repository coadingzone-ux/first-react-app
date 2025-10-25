import './App.css';

import ToDos from './MyComponents/ToDos';
import Footer from './MyComponents/Footer';
import AddToDo from './MyComponents/AddToDo';

import React, { useState } from 'react';

import HeaderComponent from './MyComponents/HeaderComponent';

function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }) );

  }
  const [todos, setTodos] = useState([
  {
            title: "My To Do List",
            description: "This is my to do list description"
        },
        {
            title: "My To Do List 2",
            description: "This is my to do list description 2"
        },
        {
            title: "My To Do List 3",
            description: "This is my to do list description 3"
        },
  ]);

 
  return (
    <>
      <HeaderComponent title="To Do List"  searchBar={true} />
      <AddToDo />
      <ToDos ToDos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
