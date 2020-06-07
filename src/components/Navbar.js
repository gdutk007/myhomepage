import React from 'react'
import {useEffect, useState, useRef} from 'react'
import "../CSS/navbar.css"

function MyNavbar(){
    // const [isSticky, setSticky] = useState(false);
    // useEffect(()=>{
    //     const header = document.getElementById("mynavbar");
    //     const sticky = header.offsetTop;
    //     const scrollCallBack = window.addEventListener("scroll",()=>{    
    //         if(window.pageYOffset > sticky){
    //             //header.classList.add("sticky");
    //             setSticky(true);
    //             console.log("sticky is true");
    //         }else{
    //             //header.classList.remove("sticky");
    //             setSticky(false);
    //             console.log("sticky is true");
    //         }
    //     });
    //     return ()=> {
    //         window.removeEventListener("scroll",scrollCallBack)
    //     };
    // },[])
    return(
        <div>
            <header>
                <nav id="mynavbar" className="sticky">
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