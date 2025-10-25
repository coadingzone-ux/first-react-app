import React from 'react'

export default function ToDoItem({todo,onDelete}) {
  return (
    <div>
       <h4>{todo.title}</h4>
       <p>{todo.description}</p>
       <button className="btn mb-3  btn-sm btn-danger"  onClick={() => onDelete(todo)}>Delete</button>
    </div>
  )
}
