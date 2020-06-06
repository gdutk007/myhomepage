import React from 'react'
import "../CSS/navbar.css"

function MyNavbar(){

    return(
        <div>
            <header>
                <nav>
                <ul className="top-header-nav-ul">
                    <li className="top-left-header-nav-li"><a href="#home">Gianfranco Dutka</a></li>
                    <li className="top-right-header-nav-li"><a href="#home">Home</a></li>
                    <li className="top-right-header-nav-li"><a href="#news">News</a></li>
                    <li className="top-right-header-nav-li"><a href="#contact">Contact</a></li>
                    <li className="top-right-header-nav-li"><a href="#about">About</a></li>
                </ul>
                </nav>
            </header>
        </div>
    )
}

export default MyNavbar