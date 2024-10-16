import React, { useContext, useEffect, useState } from 'react'
import "../styles/singlePage.css";
import remove from "../assets/images/delete.png";
import pencil from "../assets/images/pencil.png";
import Menu from '../comp/Menu';
import axios from 'axios';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/authContext";
import { Link } from 'react-router-dom';

const Single = () => {
    const navigate = useNavigate();
    const {currentUser} = useContext(AuthContext);
    // console.log(currentUser);
    const [post, setPost] = useState({});
    console.log(post);
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
                            <Link to={`/write?edit=2`} state={post}>
                                <img src={pencil} alt=""/>
                            </Link>
                            <img src={remove} alt="" onClick={handleOnDelete}/>
                        </div>}
                    </div>
                    <div className='blog'>
                        <h1>{post.title}</h1>
                        {post.desc}
                    </div>

                </div>

                <div className="menu">
                    <Menu cat={post.cat}/>
                </div>
            </div>
        </>
    )
}

export default Single
