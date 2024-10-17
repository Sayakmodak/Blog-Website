import React from 'react'
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='border p-4 flex items-center justify-between bg-[#1f2937] text-white mt-14'>
                <div className="image">
                    <Link to="/">
                    <img src={Logo} alt="logo" />
                    </Link>
                </div>

                <div className='madeWith'>
                    <p>Made with React</p>
                </div>
            </div>
        </>
    )
}

export default Footer
