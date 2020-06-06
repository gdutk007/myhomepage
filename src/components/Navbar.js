import React from 'react'
import "../CSS/navbar.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

/* <header>
<div>
    <ul className="myname-navbar-ul">
        <li className="left-navbar-list-item" ><a href="#home">Gianfranco Dutka</a></li>
    </ul>
</div>
 <navbar class="nav">            
    <ul className="navbar-unordered-list">
        <li className="navbar-list-item" ><a href="#home">Home</a></li>
        <li className="navbar-list-item" ><a href="#news">News</a></li>
        <li className="navbar-list-item" ><a href="#contact">Contact</a></li>
        <li className="navbar-list-item" ><a href="#about">About</a></li>
    </ul>
</navbar>
</header> */



function MyNavbar(){
    const myStyles = {
        color: "#FF8C00",
        backgroundColor: "black"
    }
    return(
        <div>
            <Navbar  bg="dark" variant="dark">
                <Nav className="mr-auto-1">
                    <Nav.Link className="left-navbar-link" href="#home" >Gianfranco Dutka</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link className="navbar-links" href="#home"> About </Nav.Link>
                    <Nav.Link className="navbar-links" href="#home"> Portfolio </Nav.Link>
                    <Nav.Link className="navbar-links" href="#home"> Contact </Nav.Link>
                </Nav>
            </Navbar>
            <br />
            <br />
        </div>
    )
}

export default MyNavbar