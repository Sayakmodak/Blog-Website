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
import { useNavigation } from 'react-router-dom';
import {AuthContext} from "../context/authContext";

const Single = () => {
    const navigate = useNavigation();
    const {currentUser} = useContext(AuthContext);
    // console.log(currentUser);
    const [post, setPost] = useState({});
    // console.log(post);
    const path_id = useLocation().pathname.split("/")[2];


    useEffect(()=>{
        const fetchSinglePost = async ()=>{
            const res = await axios.get(`http://localhost:3000/api/posts/${path_id}`);
            // console.log(res);
            setPost(res.data);
        }
        fetchSinglePost();
    }, [path_id]);

    const handleOnDelete = async()=>{
        await axios.delete(`http://localhost:3000/api/posts/${path_id}`);
        navigate("/");
    }
    return (
        <>
            <div className='container'>

                <div className='content'>
                    <div className='image'>
                        <img src={post?.img} alt="" className='' />
                    </div>

                    <div className="user">
                        {post.userImg && <img src={post.userImg} alt="user" />}
                        <div className="info">
                            <span>{post.username}</span>
                            <p>Posted {moment(post.date).fromNow()}</p>
                        </div>

                        {currentUser.username === post.username && <div className="edit">
                            <img src={pencil} alt="" />
                            <img src={remove} alt="" onClick={handleOnDelete}/>
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
