const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser')

const authRoutes = require("./routes/authRoutes");
const postsRoutes = require("./routes/authRoutes");
const usersRoutes = require("./routes/authRoutes");
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRoutes);
// app.use('/api/users', postsRoutes);
// app.use('/api/posts', usersRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
})