import React from 'react'
import "../styles/writePage.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import moment from "moment";

const Update = () => {
    const state = useLocation().state;  // to reach that state of single page
    console.log(state);
    const [value, setValue] = useState(state?.desc || ''); // desc
    const [title, setTitle] = useState(state?.title ||"");
    const [cat, setCat] = useState(state?.cat ||"");
    const [file, setFile] = useState(null);

    const upload = async ()=>{
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("http://localhost:3000/api/upload", formData);
        // console.log(res); 
        return res.data;   // 1729046384153--pexels-pixabay-414144.jpg --> image url
    }

    const handleOnPublish = async (e)=>{
        e.preventDefault();
        await upload();
        const imgUrl = await upload();
        // if(state) update method otherwise add method
        try {
            state ? await axios.put(`http://localhost:3000/api/posts/${state.id}`, {
                title,
                desc: value,
                img: file ? imgUrl : "",
                cat
            }) : await axios.post("http://localhost:3000/api/posts/", {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : "",
                date: moment(Date.now()).format("YY:MM:DD HH-mm-ss")
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='write'>

            <div className="content">
                <input type="text" placeholder='Title' value={title} name='title' onChange={(e)=> setTitle(e.target.value)}/>
                <div className="editorContainer">
                    <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                </div>
            </div>

            <div className='writeSidebar'>
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Status: </b> Public
                    </span>
                    <input style={{ display: "none" }} type="file" name="file" id="file" onChange={e=> setFile(e.target.files[0])}/>

                    <label className='file' htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button className='draft'>Save as a draft</button>
                        <button className='update' onClick={handleOnPublish}>Publish</button>
                    </div>
                </div>

                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name='cat' value="science" id='science' onChange={(e)=> setCat(e.target.value)} checked={cat === "science"}/>
                        <label htmlFor="science">Science</label></div>

                    <div className="cat">
                        <input type="radio" name='cat' value="technology" id='technology' onChange={(e)=> setCat(e.target.value)} checked={cat === "technology"}/>
                        <label htmlFor="technology">Technology</label></div>

                    <div className="cat">
                        <input type="radio" name='cat' value="cinema" id='cinema' onChange={(e)=> setCat(e.target.value)} checked={cat === "cinema"}/>
                        <label htmlFor="cinema">Cinema</label></div>
                </div>
            </div>

        </div>
    )
}

export default Update
