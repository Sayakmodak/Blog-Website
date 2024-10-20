import React from 'react'
import "../styles/writePage.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from "moment";
import JoditEditor from 'jodit-react';

const Update = () => {
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const state = useLocation().state;  // to reach that state of single page
    console.log(state);
    const editor = useRef(null);
    const [value, setValue] = useState(state?.desc || ''); // desc
    const [title, setTitle] = useState(state?.title || "");
    const [cat, setCat] = useState(state?.cat || "");
    const [file, setFile] = useState(null);


    
    console.log(value);
    const config = {
        buttons: ["bold", "italic", "underline"],
        placeholder : "Start typing..."
    }

    // console.log(config);
    const upload = async ()=>{
        if (!file) {
            return; // Exit if no file is selected
        }
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("http://localhost:3000/api/upload", formData);
        // console.log(res); 
        return res.data;   // 1729046384153--pexels-pixabay-414144.jpg --> image url
    }

    const handleOnPublish = async (e)=>{
        e.preventDefault();
        const imgUrl = await upload();
        // if(state) update method otherwise add method
        try {
            console.log("Entering");
            state ? await axios.put(`http://localhost:3000/api/posts/${state.id}`, {
                title,
                desc: value,
                img: file ? imgUrl : "",
                cat,
            }) : await axios.post("http://localhost:3000/api/posts", {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : "",
                date: moment(Date.now()).format("YY:MM:DD HH-mm-ss")
            });
            console.log("Successfully Inserted")
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='write'>

            <div className="content">
                <input type="text" placeholder='Title' value={title} name='title' onChange={(e)=> setTitle(e.target.value)}/>
                <div className="editorContainer">
                    {/* <ReactQuill className='editor' ref={editor} theme="snow" value={value} onChange={setValue} /> */}

                    <JoditEditor
			        ref={editor}
			        value={value}
                    tabIndex={1}
                    name="desc"
                    onChange={(newContent)=> setValue(newContent)}
		            />
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
                    <input style={{ display: "none" }} type="file" name="img" id="file" onChange={e=> setFile(e.target.files[0])}/>

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
            {console.log(value)}
        </div>
    )
}

export default Update
