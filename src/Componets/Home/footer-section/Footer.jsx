import React from 'react'
import { useRef } from 'react';
import "./Footer.css";
import { IoPeopleSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane, FaFacebook} from "react-icons/fa";
import Inner from '../Inner-Footer/Inner-Navbar'
import { MdOutlineFlight, MdOutlineNoTransfer, MdOutlineBedroomChild  } from "react-icons/md";

const Footer = () => {
    



    return (
        <div className='Travel-conatiner'>
            <h1 id='house-power'>WHAT`S INCLUDED</h1>
            <div className='Travel-part23'>
                <div id='Tour-Travel-section' className='Travel-row'>
                    <span id='Travel-icon'>
                        <IoPeopleSharp />
                    </span>
                    <span id='Travel-span'>Guides</span>
                    <p>2 awesome guides who know everything
                        about japan~
                        .</p>
                </div>
                <div id='Tour-Travel-section-2' className='Travel-row'> <span id='Travel-icon'>
                    <MdOutlineFlight />
                </span>
                    <span id='Travel-span'>Flights</span>
                    <p>Routes <br/> Moscow-Osaka <br/> Tokyo-Moscow
                        .</p></div>
                <div className='Travel-row'>
                    <span id='Travel-icon'>
                        <MdOutlineNoTransfer />
                    </span>
                    <span id='Travel-span'>Transfers</span>
                    <p>From the airpot to the hotels
                        .</p>
                </div>
                <div className='Travel-row'>
                    <span id='Travel-icon'>
                        <MdOutlineBedroomChild />
                    </span>
                    <span id='Travel-span'>Hostels</span>
                    <p>comfortable accommodation 2 people per room (breakfasts included)
                        .</p>
                </div>

            </div>
            <div className='Travel-footer-TP'>

                <h1>Want To Join us but still have questions?</h1>
                <p>Leave a request</p>
                <div className='Travel-check'>
                <input type="text" placeholder='Your name' />
                <input type="text"  placeholder='Phone number'/>
                <input type="text" placeholder='comment' />
                <button>Send</button>
                </div>
            </div>
            <div className='id-conatiner-0222'>
            <span id='id-container'><FaInstagram /></span>
            <span id='id-container'><FaFacebook /></span>
            <span id='id-container'><FaTelegramPlane /></span>
            </div>
            <Inner />
        </div>
    )
}

export default Footer;