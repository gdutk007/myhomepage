import React from 'react'
import "../CSS/navbar.css"

function MyNavbar(){
    const myStyles = {
        color: "#FF8C00",
        backgroundColor: "black"
    }
    return(
        <div>
            <header>
                <div>
                    <li className="left-navbar-list-item" ><a href="#home">Gianfranco Dutka</a></li>
                </div>
                 <nav>            
                    <ul className="navbar-unordered-list">
                        <li className="navbar-list-item" ><a href="#home">Home</a></li>
                        <li className="navbar-list-item" ><a href="#news">News</a></li>
                        <li className="navbar-list-item" ><a href="#contact">Contact</a></li>
                        <li className="navbar-list-item" ><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MyNavbar