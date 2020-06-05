import React from 'react'

function MyNavbar(){
    const myStyles = {
        color: "#FF8C00",
        backgroundColor: "black"
    }
    return(
        <div>
            <nav>
                <ul>
                    <li> About Me</li>
                </ul>
                <ul>
                    <li> Projects </li>
                </ul>
                <ul>
                    <li> Contact </li>
                </ul>
            </nav>
        </div>
    )
}

export default MyNavbar