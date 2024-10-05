import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className="form-container flex items-center justify-center h-dvh bg-[#152d45]">
                <div>
                    <h3 className='text-center text-2xl pb-2 text-white'>Welcome</h3>

                    <form action="" className='px-5 py-20 text-center border rounded-lg'>

                        <input type="text" placeholder='name' name='name' className='outline-none text-[#b6c0cd] block border-white border-b-[1px] w-full mb-4 bg-transparent' />

                        <input type="password" placeholder='password' name='password' className='block w-full outline-none text-[#b6c0cd] border-white border-b-[1px] bg-transparent' />

                        <p className='p-2 text-white text-base mt-6'>Don't have an account? <Link to="/register"><span className='text-cyan-600'>Create Account</span></Link> </p>

                        <button className='py-[4px] bg-[#0ea5e9] text-white rounded-lg px-[35px] border relative top-[35px]'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
