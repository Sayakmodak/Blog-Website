import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [value, setValue] = useState({
        username: "",
        email: "",
        password: ""
    });
    const handleOnChange = (e)=>{
        setValue((prev)=> ({ ...prev, [e.target.name]: e.target.value})) ;
    }

    console.log(value);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            // http://localhost:3000/api/auth/register
            const res = await axios.post("http://localhost:3000/api/auth/register", value);
            console.log(res);
            navigate("/login");
        } catch (error) {
            console.log(error);
            setError("User already exists!");
        }
    }
    return (
        <>
            <div className="form-container flex items-center justify-center h-dvh bg-[#152d45] ">
                <div>
                    <h3 className='text-center text-2xl pb-2 text-white'>Register</h3>

                    <form action="" className='px-5 py-20 text-center border rounded-lg w-[28vw] h-[30vw]'>

                        <input type="text" placeholder='username' name='username' className='outline-none text-[#b6c0cd] block border-white border-b-[1px] w-full mb-4 bg-transparent' onChange={handleOnChange}/>

                        <input type="email" placeholder='email' name='email' className='outline-none text-[#b6c0cd] block border-white border-b-[1px] w-full mb-4 bg-transparent' onChange={handleOnChange}/>

                        <input type="password" placeholder='password' name='password' className='block w-full outline-none text-[#b6c0cd] border-white border-b-[1px] bg-transparent' onChange={handleOnChange}/>

                        <p style={{color: "red", marginTop: "10px"}}>{error}</p>

                        <p className='p-2 text-white text-base mt-6'>Have an account? <Link to="/login"><span className='text-cyan-600'>Login</span></Link> </p>
                        

                        <button className='py-[4px] bg-[#0ea5e9] text-white rounded-lg px-[35px] border relative top-[35px]' onClick={handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;