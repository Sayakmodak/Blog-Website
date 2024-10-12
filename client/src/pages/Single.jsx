import React, { useContext, useEffect, useState } from 'react'
import "../styles/singlePage.css";
import sunset from "../assets/images/sunset.jpg";
import user from "../assets/images/user.jpg";
import remove from "../assets/images/delete.png";
import pencil from "../assets/images/pencil.png";
import Menu from '../comp/Menu';
import axios from 'axios';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import {AuthContext} from "../context/authContext";

const Single = () => {
    const {currentUser} = useContext(AuthContext);
    const [post, setPost] = useState({});
    console.log(post);
    const id = useLocation().pathname.split("/")[2];


    useEffect(()=>{
        const fetchSinglePost = async ()=>{
            const res = await axios.get(`http://localhost:3000/api/posts/${id}`);
            console.log(res);
            setPost(res);
        }
        fetchSinglePost();
    }, [id]);

    return (
        <>
            <div className='container'>

                <div className='content'>
                    <div className='image'>
                        <img src={post?.img} alt="" className='' />
                    </div>

                    <div className="user">
                        <img src={post.userImg} alt="user" />
                        <div className="info">
                            <span>{post.username}</span>
                            <p>Posted {moment(post.date).fromNow()}</p>
                        </div>

                        {currentUser.username === post.username && <div className="edit">
                            <img src={pencil} alt="" />
                            <img src={remove} alt="" />
                        </div>}
                    </div>
                    <div className='blog'>
                        <h1>{post.title}</h1>
                        {post.desc}
                    </div>

                </div>

                <div className="menu">
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default Single
