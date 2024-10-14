const db = require("../config/db");
const jwt = require("jsonwebtoken");

const getAllposts = (req, res)=>{
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";
    db.query(q, [req.query.cat], (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}
const getSinglepost = (req, res)=>{

    const q = "select posts.id, posts.title, posts.desc, posts.img, posts.cat, posts.date, users.img AS userImg from posts join users on users.id = posts.uid where posts.id = ?";

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
    const token = req.cookies.acc_token;
    console.log(token);

    if(!token){
        return res.status(401).json("token is provided");
    }

    jwt.verify(acc_token, "privatekey", (err, decoded)=>{
        if(err){
            return res.json("Token is not authenticated!");
        }

        const id = req.params.id;
        db.query("DELETE FROM posts WHERE id = ? AND uid = ?", [id, decoded.id], (err, data)=>{
            if(err) return res.status(403).json("Could not delete");

            return res.status(200).json("Successfully Deleted!");
        })
    })
}


module.exports = {
    getAllposts, 
    getSinglepost,
    addPost,
    updatePost,
    deletePost
}