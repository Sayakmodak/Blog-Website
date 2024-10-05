import React from 'react'

const Home = () => {
    const post = [
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
    ]
    return (
        <>
            {post.map((elm) => {
                return <div className="post-container bg-[#f0f9fe] mb-14 border border-purple-500 flex items-center justify-center odd:flex-row-reverse p-4 text-black gap-[50px]" id={elm.id}>
                    <div className='image'>
                        <img src={elm.img} alt="image" className='h-72 w-64 border rounded-lg' />
                    </div>

                    <div className="content border border-blue-500 w-1/2 p-5">
                        <h2 className='text-4xl font-bold'>{elm.title}</h2>
                        <p className='mt-4 font-medium'>{elm.desc}</p>
                        <span className='cursor-pointer relative top-[30px] px-[5px] py-[10px] border border-[#1f2937] '>Read More</span>
                    </div>
                </div>
            })}
        </>
    )
}

export default Home
