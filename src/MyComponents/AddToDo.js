import React, { useState } from 'react'

export default function AddToDo(props ) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
    console.log("SNO is ", props,props.todos);
    const SubmitEvent = (e)=>{  
      e.preventDefault();
      if(props.todos && props.todos.length > 0){
        var sno = props.todos[props.todos.length -1].sno + 1;
      } else {
        var sno = 0;
      }
      if(title === "" || description === "" || dueDate === ""){
        alert("Title or Description or Due Date cannot be blank");
        return;
      }
      const tenMinutesInMs = 10 * 60 * 1000;
      const nowPlusTenMinutes = new Date(new Date().getTime() + tenMinutesInMs);
      if(new Date(dueDate) < nowPlusTenMinutes  ) {
        alert("Due Date cannot be in the past");
        return;
      }

      const newToDo = {sno, title, description, dueDate };
      console.log("Submitted:", newToDo);
      setTitle("");
      setDescription("");
      setDueDate("");
      props.addTodo(newToDo);
    }

  return (
    <div className="container">
        <h3>Add To Do</h3>
        <form onSubmit={SubmitEvent}>
            <div className="mb-3 my-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title}  onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="description" />
            </div> 
            <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">Due Date</label>
                <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-control" id="dueDate" />
            </div>           
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
  )
}
