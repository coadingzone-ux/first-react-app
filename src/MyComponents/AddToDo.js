import React from 'react'

export default function AddToDo( ) {

    
  return (
    <div className="container">
        <h3>Add To Do</h3>
        <form>
            <div className="mb-3 my-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" />
            </div>           
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
  )
}
