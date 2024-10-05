import React from 'react'
import Logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <>
            <div className='border p-4 flex items-center justify-between bg-[#1f2937] text-white mt-14'>
                <div className="image">
                    <img src={Logo} alt="logo" />
                </div>

                <div className='madeWith'>
                    <p>Made with React</p>
                </div>
            </div>
        </>
    )
}

export default Footer
