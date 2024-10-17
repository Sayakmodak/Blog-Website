const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

// REGISTER FUNCTION
const register = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // CHECK THE EXISTING OF THE USERS
    db.query("SELECT * FROM users WHERE email = ? OR username = ?", [email, username], (err, data) => {
        if (err) return res.json(err);

        if (data.length) return res.status(409).json("User already exits");

        // INSERT DATA TO USER TABLE
        bcrypt.hash(password, 10, function (err, hash) {
            if (err) return res.json("Error in hashing");

            db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hash], (err, data) => {
                if (err) return res.json(err);

                return res.status(200).json("User has been created!");
            })
        });
    })
}

// LOGIN FUNCTION
const login = (req, res) => {
    // CHECK THE USER 
    db.query("SELECT * FROM users WHERE username = ?", [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) {
            return res.status(404).json("User not found!");
        }

        // const password = data[0].password;
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!isPasswordCorrect)
            return res.status(400).json("Wrong username or password!");
      
          const token = jwt.sign({ id: data[0].id }, "privatekey");
          const { password, ...other } = data[0];
      
          res
            .cookie("token", token, {
              httpOnly: true,
            })
            .status(200)
            .json({ message: "Successfully Login", other});
        });


        /*bcrypt.compare(req.body.password, password, function (err, result) {
            if (err) return res.status(500).json({ message: "Error comparing passwords" });

            if (!result) return res.status(401).json({ message: "Invalid credentials" });
            console.log(result);

            if(result){
                const token = jwt.sign({ id: data[0].id }, "privatekey");

                const { password, ...other } = data[0];
                console.log("Token is ", token);
            
           // res.cookie('token', token, { httpOnly: true });
            // console.log(req.cookies);
            // console.log("Req token is ", req.cookies.token);
            // req.cookies.token

            return res.cookie('token', token, { httpOnly: true, secure: false,
                sameSite: 'lax'}).status(200).json({ message: "Successfully Login", other});

            // we should not send our token in frontend application, it is very confidential 

            } else{
                return res.json({Error: "Password not matched"});
            }
        });*/

        console.log("cookies are", req.cookies);
}

// LOGOUT FUNCTION
const logout = (req, res) => {
    res.clearCookie("token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.");
}

module.exports = { register, login, logout };