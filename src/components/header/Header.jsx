import { useRef, useState, useEffect } from "react"
import {BiMenu} from "react-icons/bi"
import {IoClose} from "react-icons/io5"
import "../header/header.css"

export default function Header(){
  const [icon, setIcon] = useState(<BiMenu/>)
  const navRef = useRef()

  const toggleMenu = () => {
    if(navRef.current.classList.contains("active")) {
      navRef.current.classList.remove("active")
      setIcon(<BiMenu/>)
    }
    else {
      navRef.current.classList.add("active")
      setIcon(<IoClose/>)
    }
  }

  const hideScrollMenu = () => {
    window.addEventListener("scroll", () => {
      navRef.current.classList.remove("active")
      setIcon(<BiMenu/>)
    })
  }

  useEffect(hideScrollMenu)

  return (
      <header className="header">
        <a href='/' className='logo'>Batman A.K</a>

        <nav ref={navRef} onScroll={hideScrollMenu} className='navbar'>
          <ul className='nav-list'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Jogabilidade</a></li>
            <li><a href="#">Batmóvel</a></li>
            <li><a href="#">Cenário</a></li>
            <li><a href="#">Desenvolvimento</a></li>
          </ul>{/*End nav list*/}
        </nav>{/*End navbar*/}

        <div className="nav-menu">
          <a href="#">Comprar</a>
          <div onClick={toggleMenu} id="menu-icon">{icon}</div>
        </div>{/*End nav menu*/}
    </header>//End header
  )
}