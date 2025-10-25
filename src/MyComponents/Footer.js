import React from 'react'

const Footer = () => {

    let footerStyle = {
      position: "relative",
      top: "50vh",
      width: "100%",
      backgroundColor: "black"
    }
  return (
    
    <div>
        <footer className=" text-center text-lg-start" style={footerStyle}>
          <div className="text-center p-3 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2023 To Do List App
          </div>
        </footer>
    </div>
  )
}

export default Footer
    