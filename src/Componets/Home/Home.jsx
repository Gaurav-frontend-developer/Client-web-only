import React, { useEffect, useRef } from 'react'
import './Home.css'
import { IoEarth } from "react-icons/io5";
import Search from '../../assets/new-sea.png'
import Japan from '../../assets/japan.png'
import Famous from '../../assets/famous-palce.jpg'
import Girl from '../../assets/girl3.png'
import TourSection from '../Home/TourSection/TourSection'
import Footer from '../Home/footer-section/Footer'
import Navbar from '../Home/Inner-Footer/Inner-Navbar'
import Natural from '../../assets/natural-girl.png'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Home = () => {

    const homeref = useRef()

    useGSAP(() => {
        gsap.from(homeref.current, {
            y: 30,
            opacity: 0,
            duration: 1,

        })
    })
    // useEffect(() => {

    //     gsap.from(homeref.current, {
    //         y: 30,
    //         opacity:0,
    //     })


    // })


    // const handlechange = () =>{
    //     console.log("the are working");

    // }
    return (
        <>
            <div className='Div-conatiner'>


                <nav ref={homeref} class="navbar">
                    <div class="logo">
                        <img src={Search} alt="" />
                        <h1> Japan Tour </h1>
                        <span className='Menu-icon'><CiMenuBurger /></span>

                    </div>


                    <ul class="nav-links">
                        <li ><a href="#about">About</a></li>
                        <li ><a href="#services">Included</a></li>
                        <li ><a href="#contact">Contact</a></li>
                    </ul>
                    <button >Book</button>
                </nav>

                <div className='icon-menu-bar'>
                    <h4>About</h4>
                    <h4>Included</h4>
                    <h4>Contact</h4>
                    <span className='Close-icon'><IoMdClose /></span>
                </div>

                <div className='Div-conatiner-22'>
                    <a href="">
                        <div className='div-part2'>

                            <p id='Tool-2'>3 cities in japan</p>
                        </div>
                    </a>
                    <a href="">
                        <div className='div-part3'>

                            <p id='Tool-3'>10 days</p>
                        </div>
                    </a>
                    <a href="">
                        <div className='div-part4'>

                            <p id='Tool-4'>gigabytes of photos</p>
                        </div>
                    </a>
                    <a href="">
                        <div className='div-part5'>

                            <p id='Tool-5'>eat ramen</p>
                        </div>
                    </a>

                </div>
                <div className='Div-container-002'>
                    <img src={Natural} alt="" />


                </div>


            </div>

            {/* <div className='Div-Ranger-0001'>
            <div className='part-0002'></div>
            <h1>About the Tour</h1>
            <div className='part-0003'></div>
        </div> */}
            <TourSection />
            <Footer />


        </>

    )
}

export default Home;