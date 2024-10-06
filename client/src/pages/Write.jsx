import React from 'react'
import "../styles/writePage.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const Update = () => {
    const [value, setValue] = useState('');
    return (
        <div className='write'>

            <div className="content">
                <input type="text" placeholder='Title' />
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
                    <input style={{ display: "none" }} type="file" name="" id="file" />
                    <label className='file' htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button className='draft'>Save as a draft</button>
                        <button className='update'>Update</button>
                    </div>
                </div>

                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name='cat' value="science" id='science' />
                        <label htmlFor="science">Science</label></div>

                    <div className="cat">
                        <input type="radio" name='cat' value="technology" id='technology' />
                        <label htmlFor="technology">Technology</label></div>

                    <div className="cat">
                        <input type="radio" name='cat' value="cinema" id='cinema' />
                        <label htmlFor="cinema">Cinema</label></div>
                </div>
            </div>

        </div>
    )
}

export default Update
