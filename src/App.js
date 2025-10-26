import './App.css';

import ToDos from './MyComponents/ToDos';
import Footer from './MyComponents/Footer';
import AddToDo from './MyComponents/AddToDo';

import React, { useEffect, useState } from 'react';

import HeaderComponent from './MyComponents/HeaderComponent';

function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    const updatedTodos = todos.filter((e) => {
      return e !== todo;
    })
    setTodos(updatedTodos);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

  }

  const addTodo = (newTodo) => {
    newTodo.createdAt = new Date().toLocaleString();
    newTodo.status = 'created';
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  }

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  // alert("Todos length is " + todos.length);


 

const onStatusChange = (id, newStatus) => {
  alert("Status changed for ToDo ID: " + id + " to " + newStatus);
  const updatedTodos = todos.map((todo) => {
    if (todo.sno === id) {
      return { ...todo, status: newStatus };
    }
    return todo;
  });
  setTodos(updatedTodos);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
};


  return (
    <>
      <HeaderComponent title="To Do List"  searchBar={true} />
      {/* <AddToDo addTodo={addTodo} todos={todos} /> */}
      <ToDos todos={todos} onDelete={onDelete}  addTodo={addTodo} onStatusChange={onStatusChange} />
      <Footer />
    </>
  );
}

export default App;
