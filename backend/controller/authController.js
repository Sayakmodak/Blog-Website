const db = require("../config/db");
const bcrypt = require("bcrypt");

// REGISTER FUNCTION
const register = (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // CHECK THE EXISTING OF THE USERS
    db.query("SELECT * FROM users WHERE email = ? OR username = ?", [email, username], (err, data)=>{
        if(err) return res.json(err);

        if(data.length) return res.status(409).json("User already exits");

    // INSERT DATA TO USER TABLE
    bcrypt.hash(password, 10, function(err, hash) {
        if(err) return res.json("Error in hashing");

        db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hash], (err, data)=>{
            if(err) return res.json(err);
    
            return res.status(200).json("User has been created!");
        })
    });
})
}

// LOGIN FUNCTION
const login = (req, res)=>{
    
}

// LOGOUT FUNCTION
const logout = (req, res)=>{
    
}

module.exports = {register, login, logout};