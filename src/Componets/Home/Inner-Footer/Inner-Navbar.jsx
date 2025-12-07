import React from 'react'
import './Inner-Navbar.css'
import Search from '../../../assets/new-sea.png'

const Inner = () => {
    return (
        <div className='div-conatiner-999'>
        
            <nav class="navbar-power">
                <div class="logo-power">
                    <img src={Search} alt="" />
                    <h1> Japan Tour </h1>
                </div>


                <ul class="nav-links-power">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button>Book</button>
            </nav>



        </div>
    )
}

export default Inner;