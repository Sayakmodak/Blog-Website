const express = require("express");
const route = express.Router();

const {getAllposts, getSinglepost, deletePost, addPost, updatePost} = require("../controller/postsController");


route.get("/", getAllposts);

route.get("/:id", getSinglepost);

route.delete("/:id", deletePost);

route.post("/", addPost);

route.put("/:id", updatePost);

module.exports = route;