import React from 'react'
import ToDoItem from '../MyComponents/ToDoItem'




export default function ToDos(props) {
  return (
   <div className="container my-3">
       <h3 className="mb-4">To Do List</h3>
       {props.ToDos.length === 0 ? 
       "No To Do Items to display" :    
          props.ToDos.map((todo, index) => (
           <ToDoItem key={index} todo={todo} onDelete={props.onDelete} />
        ))}

    </div>
  )
}


