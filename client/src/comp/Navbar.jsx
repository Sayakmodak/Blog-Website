import React, { useContext } from 'react'
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
const Navbar = () => {
    const {currentUser, logout} = useContext(AuthContext);
    // console.log(currentUser.other.username);
    return (
        <>
            <nav className='border py-[1rem] px-[9rem] flex items-center justify-between bg-[#1f2937] text-white'>
                <div className="profile">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>

                <div className="menu flex justify-between items-center gap-5">
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
                        <button className='bg-cyan-700 p-[5px] border rounded-[50%] hover:bg-transparent '>Write</button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
