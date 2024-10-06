import React from 'react'
import "../styles/singlePage.css";
import sunset from "../assets/images/sunset.jpg";
import user from "../assets/images/user.jpg";
import remove from "../assets/images/delete.png";
import pencil from "../assets/images/pencil.png";
import Menu from '../comp/Menu';

const Single = () => {
    return (
        <>
            <div className='container'>

                <div className='content'>
                    <div className='image'>
                        <img src={sunset} alt="" className='' />
                    </div>

                    <div className="user">
                        <img src={user} alt="user" />
                        <div className="info">
                            <span>John Doe</span>
                            <p>Posted 2 days ago</p>
                        </div>
                        <div className="edit">
                            <img src={pencil} alt="" />
                            <img src={remove} alt="" />
                        </div>
                    </div>
                    <div className='blog'>
                        <h1>Heading of the blog</h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum nemo voluptatibus quibusdam quod officia deleniti nam expedita rerum adipisci, optio cupiditate dolor, repudiandae natus accusamus nisi quam repellat totam? Delectus laborum rerum id aliquid ab nam ducimus reiciendis neque tempore. Facilis nobis quisquam non explicabo enim molestiae aperiam eum esse, aspernatur nemo est quaerat a nihil quia fugit. Minus commodi quasi temporibus optio sapiente aliquam magni ipsa. Fuga consequuntur odio quasi perspiciatis, distinctio reprehenderit possimus, sint vitae nesciunt dolorem necessitatibus rerum, sit laborum? Facilis earum corrupti quia debitis, accusantium ea illum, sunt vitae aspernatur, sed labore laboriosam quod magni perferendis.
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
