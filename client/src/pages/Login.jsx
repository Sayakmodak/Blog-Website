import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../context/authContext';
const Login = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const [value, setValue] = useState({
        username: "",
        password: ""
    });

    const handleOnChange = (e)=>{
        setValue((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleOnClick = async (e)=>{
        e.preventDefault();
        // await axios.post("http://localhost:3000/api/auth/login", value);
        await login(value);
        navigate("/");
    }
    return (
        <>
            <div className="form-container flex items-center justify-center h-dvh bg-[#152d45]">
                <div>
                    <h3 className='text-center text-2xl pb-2 text-white'>Welcome</h3>

                    <form action="" className='px-5 py-20 text-center border rounded-lg'>

                        <input type="text" placeholder='name' name='username' className='outline-none text-[#b6c0cd] block border-white border-b-[1px] w-full mb-4 bg-transparent' onChange={handleOnChange}/>

                        <input type="password" placeholder='password' name='password' className='block w-full outline-none text-[#b6c0cd] border-white border-b-[1px] bg-transparent' onChange={handleOnChange}/>

                        <p className='p-2 text-white text-base mt-6'>Don't have an account? <Link to="/register"><span className='text-cyan-600'>Create Account</span></Link> </p>

                        <button className='py-[4px] bg-[#0ea5e9] text-white rounded-lg px-[35px] border relative top-[35px]' onClick={handleOnClick}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
