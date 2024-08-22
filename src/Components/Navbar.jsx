import React, {useState} from 'react';
import "../Styles/Navbar.css";
import Hamburger from '../assets/icons8-hamburger-button-50.png'
import xbutton from '../assets/x-button.png';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`navbar ${isOpen ? "is--open" : ""}`}>
            <h1 className={`logo--name ${isOpen ? "is--open" : ""}`}><a href="#">Georgian.</a></h1>
            <ul className={`navbar--items ${isOpen ? "is--open" : ""}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
                
            </ul>  

            <a onClick={toggleMenu} className='mobile--trigger'>{isOpen ? <img src={xbutton} width={20}/> : <img src={Hamburger} width={30} /> }</a>      

         </nav>
    )
}