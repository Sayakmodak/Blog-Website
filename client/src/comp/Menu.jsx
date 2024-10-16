import React, { useEffect, useState } from 'react'
import "../styles/menuPage.css";
import axios from 'axios';

const Menu = ({cat}) => {
    const [post, setPost] = useState([]);
    // console.log(cat);
    console.log(post);
    useEffect((elm)=>{
        const fetchRecommendedPosts = async ()=>{
            const res = await axios.get(`http://localhost:3000/api/posts/?cat=${cat}`);
            console.log(res);
            setPost(res.data);
        }
        fetchRecommendedPosts();
    }, [cat])



    /*const post = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ]*/
    return (
        <div className='sidebar'>
            <h1>Other posts you many like</h1>
            {post.map((elm) => {
                return <div className='post' key={elm.id}>
                    <img src={elm.img} alt="" />
                    <h2>{elm.title}</h2>
                    <button>Read More</button>
                </div>
            })}
        </div>
    )
}

export default Menu
