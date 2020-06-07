import {useEffect, useState, useRef} from 'react'

function useSticky(){
    const [isSticky, setSticky] = useState(false)
    const element = useRef(null)

    const handleScroll = ()=>{
        window.scrollY > element.current.getBoundingClientRect().bottom
        ? setSticky(true)
        : setSticky(false)
    }
    // not adding the debounce for now
    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
        return () => {
            window.removeEventListener("scroll",()=>handleScroll)
        }
    }, handleScroll)
    return {isSticky,element}
}

export default useSticky;


