const db = require("../config/db");

const getAllposts = (req, res)=>{
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";
    db.query(q, [req.query.cat], (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}
const getSinglepost = (req, res)=>{
    const q = "SELECT p.id, p.uid, p.title, p.desc, p.img, p.cat p.date, u.img AS userImg, u.username FROM users u JOIN posts p ON p.uid = u.id WHERE p.id = ?";
    db.query(q, [req.params.id], (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data[0]);
    })
}

const addPost = (req, res)=>{
    
}
const updatePost = (req, res)=>{
    
}
const deletePost = (req, res)=>{
    
}


module.exports = {
    getAllposts, 
    getSinglepost,
    addPost,
    updatePost,
    deletePost
}