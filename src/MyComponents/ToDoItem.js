import React from 'react'
import '../global.css';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';


export default function ToDoItem({todo,onDelete,createdAt, dueDate , status,onStatusChange}) {
    // Use React state to manage the current status of this specific todo item
    const [currentStatus, setCurrentStatus] = useState(status || 'pending');

    // Effect to update internal state if initialStatus prop changes from parent
    useEffect(() => {
        setCurrentStatus(status || 'pending');
    }, [status]);
    // Function to handle status change from the select box
    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        setCurrentStatus(newStatus); // Update local state
        if (onStatusChange) {
            onStatusChange(todo.sno, newStatus); // Notify parent component (empty function in your case)
        }
    };


  const handleDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-2",
        cancelButton: "btn btn-danger mx-2"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your To Do has been deleted.",
          icon: "success"
        });
        onDelete(todo);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your To Do is safe :)",
          icon: "error"
        });
      }
    });

  }


  return (
    <div className="col" >      
      {/* <div className="card card position-relative" style={{width: "18rem", marginBottom: "10px"}}>

        <button className="close-button" onClick={() => handleDelete()}>&times;</button>
        <span className="status-label-button badge bg-secondary">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{todo.description}</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

          <p style={{ marginBottom:0 }} >CreatedAt: {createdAt}</p>
          <p style={{ marginBottom:0 }} >DueDate: {new Date(dueDate).toLocaleString()}</p>

      </div>
      </div> */}


      <div className="task-card">



        


<div
  style={
    todo.status === 'completed'
      ? { background: "#4CAF50" }
      : todo.status === 'in-progress'
      ? { background: "#fe9c33ff" }
      : { background: "#83e4d7ff" }
  }
  className="card-status-bar"
></div>



        {/* <div style={todo.status === 'completed' ? { background: "green" } : {todo.status === 'in-progress' ? { background: "orange" } : { background: "gray" }} } className="card-status-bar"></div> */}
        <div className="card-content">
            <span onClick={() => handleDelete()} className="close-icon"><i className="fas fa-times"></i></span>  
            
            <div className="card-header-top">
              {/* Styled <select> dropdown for status */}
              <div  className={`status-select-wrapper ${currentStatus}`}>
                  <select
                      className="status-select"
                      value={currentStatus}
                      onChange={handleStatusChange}
                  >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                  </select>
                  {/* Add a custom arrow if desired, the CSS will hide native arrow */}
                  <i className="fas fa-chevron-down custom-select-arrow"></i>
              </div>
            </div>

            <h2 className="card-title">{todo.title}</h2>
            <h3  className="card-subtitle">{todo.description}</h3>
           <div
              style={
                todo.status === 'created'
                  ? { background: "#13b4a1ff" }
                  : todo.status === 'completed'
                  ? { background: "#4caf50" }
                  : { background: "#fe9c33ff" }
              }
              className="status-tag"
            >
              {todo.status.charAt(0).toUpperCase() + todo.status.slice(1)}
            </div>



            <p className="card-description">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div className="card-dates">
                <div className="date-item">
                    <i className="far fa-clock"></i>
                    <span>Created: {todo.createdAt}</span>
                </div>
                <div className="date-item">
                    <i className="far fa-calendar-alt"></i>
                    <span>Due: {new Date(todo.dueDate).toLocaleString()}</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
