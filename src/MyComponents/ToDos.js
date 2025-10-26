import React from 'react'
import ToDoItem from '../MyComponents/ToDoItem'
import { useState , useRef } from 'react';
import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2';




export default function ToDos(props) {

    const closeButtonRef = useRef(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    console.log("SNO is ", props , props.todos);
    // return 
     const SubmitEvent = (e)=>{  
       e.preventDefault();

       if(props.todos && props.todos.length > 0){
         var sno = props.todos[props.todos.length -1].sno + 1;

       } else {
         var sno = 0;
       }

       console.log("SNO is ", sno,props.todos);
       if(title === "" || description === "" || dueDate === ""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Title or Description or Due Date cannot be blank',
        });
         //
        //  alert("Title or Description or Due Date cannot be blank");
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
      closeButtonRef.current?.click();
      
     }

  return (
      <>        

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"></h5>
                <button ref={closeButtonRef} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={(e) => SubmitEvent(e, props)}>
              <div class="modal-body">
                  <div className="container">
                      <h3>Add Item </h3>
                      {/* <form onSubmit={(e) => SubmitEvent(e, props)}> */}
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
                          {/* <button type="submit" className="btn btn-success">Submit</button> */}
                      {/* </form> */}
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-success">Submit</button>
              </div>
               </form>
            </div>
          </div>
        </div>

      <div className="container my-3">
        <button style={{float:"right"}}  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className="btn btn-sm btn-primary">Add To Do</button>
        <h3  className="mb-4">To Do List</h3>           
       
          <div className="row">
            <div className="col-md-4 d-flex flex-wrap">
              <div className="row">
                <h5 className="mb-4">To Do</h5>
                {(props.todos.length === 0 || props.todos.filter(todo => todo.status === "created").length === 0) ? 
                "No To Do Items to display" :    
                    props.todos.filter(todo => todo.status === "created").map((todo, index) => (
                    <ToDoItem key={index} todo={todo} onDelete={props.onDelete} createdAt={todo.createdAt} dueDate={todo.dueDate} status={todo.status} onStatusChange={props.onStatusChange}   />
                  ))}
              </div>
            </div>

            <div className="col-md-4 d-flex flex-wrap">
              <div className="row">
                <h5 className="mb-4">In Progress</h5>

                {(props.todos.length === 0 || props.todos.filter(todo => todo.status === "in-progress").length === 0) ? 
                "No To Do Items to display" :    
                    props.todos.filter(todo => todo.status === "in-progress").map((todo, index) => (
                    <ToDoItem key={index} todo={todo} onDelete={props.onDelete} createdAt={todo.createdAt} dueDate={todo.dueDate} status={todo.status} onStatusChange={props.onStatusChange} />
                  ))}
              </div>
            </div>


            <div className="col-md-4 d-flex flex-wrap">
              <div className="row">
                <h5 className="mb-4">Completed</h5>

                {(props.todos.length === 0 || props.todos.filter(todo => todo.status === "completed").length === 0)  ? 
                  "No To Do Items to display" :    
                    props.todos.filter(todo => todo.status === "completed").map((todo, index) => (
                    <ToDoItem key={index} todo={todo} onDelete={props.onDelete} createdAt={todo.createdAt} dueDate={todo.dueDate} status={todo.status} onStatusChange={props.onStatusChange}   />
                  ))}
              </div>
            </div>


          </div>
      </div>
    </>
  )
}


