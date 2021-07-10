import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className="container">
        <div className="nav__elements">
            <div className="name">
                <h2> &#128293; Ameya Joshi</h2>
            </div>
            <div className="links">
               <a href="#Projects"> <button className="links__button">Projects</button></a>
               <a href="#Skills"> <button className="links__button">Skills</button></a>
                <button className="links__button">Blog</button>
                <button className="links__button">Resume</button>
            </div>
        </div>
        </div>
    )
}

export default NavBar
