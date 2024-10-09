import React, { useContext } from 'react'
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
const Navbar = () => {
    const {currentUser, logout} = useContext(AuthContext);
    // console.log(currentUser.other.username);
    return (
        <>
            <nav className='border p-4 flex items-center justify-between bg-[#1f2937] text-white'>
                <div className="profile">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>

                <div className="menu flex justify-between gap-5">
                    <Link to="/?cat=science">
                        <p>Science</p>
                    </Link>
                    <Link to="/?cat=technology">
                        <p>Technology</p>
                    </Link>
                    <Link to="/?cat=cinema">
                        <p>Cinema</p>
                    </Link>
                    <span>
                        <p>{currentUser?.other.username}</p>
                    </span>
                    {
                        currentUser ? <span onClick={logout}>Logout</span>: <Link to="/login">
                        <p>Login</p>
                    </Link>
                    }
                    
                    <Link to="/write">
                        <button className='bg-cyan-700 px-5 border rounded-md hover:bg-transparent'>Write</button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
