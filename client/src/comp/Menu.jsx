import React, { useEffect, useState } from 'react'
import "../styles/menuPage.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Menu = ({cat}) => {
    const [post, setPost] = useState([]);
    // console.log(cat);
    // console.log(post);
    useEffect((elm)=>{
        const fetchRecommendedPosts = async ()=>{
            const res = await axios.get(`http://localhost:3000/api/posts/?cat=${cat}`);
            // console.log(res);
            setPost(res.data);
        }
        fetchRecommendedPosts();
    }, [cat])

    return (
        <div className='sidebar'>
            <h1>Other posts you many like</h1>
            {post.map((elm) => {
                return <div className='post' key={elm.id}>
                    <img src={`../uploads/${elm.img}`} alt="" />
                    <h2>{elm.title}</h2>
                    <Link to={`/post/${elm.id}`}>
                    <button>Read More</button>
                    </Link>
                </div>
            })}
        </div>
    )
}

export default Menu
