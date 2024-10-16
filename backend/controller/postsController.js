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
    const token = req.cookies.token;
    console.log("token is", token);

    if(!token){
        return res.status(401).json("token is not provided");
    }
    
    jwt.verify(token, "privatekey", (err, decoded)=>{
        if(err){
            return res.json("Token is not authenticated!");
    }

    const q = "INSERT INTO posts (title, desc, img, date, cat, uid) VALUES (?)";
    values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.date,
        req.body.cat,
        decoded.id
    ]

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err);

        return res.json("Data has been updated");
    })
})
}

const updatePost = (req, res)=>{
    const token = req.cookies.token;
    console.log(token);

    if(!token){
        return res.status(401).json("token is not provided");
    }
    jwt.verify(token, "privatekey", (err, decoded)=>{
        if(err){
            return res.json("Token is not authenticated!");
    }

    const q = "UPDATE posts SET (title=?, desc=?, img?=, cat?=) VALUES (?) WHERE id=? AND uid=?";
    values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
    ]

    db.query(q, [...values, req.params.id, decoded.id], (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json("Post has been added");
    })
})
}


const deletePost = (req, res)=>{
    const token = req.cookies;
    // req.cookies.username
    console.log(token);

    if(!token){
        return res.status(401).json("token is not provided");
    }

    jwt.verify(token, "privatekey", (err, decoded)=>{
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