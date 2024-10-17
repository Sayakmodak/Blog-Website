const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const multer = require("multer");
const authRoutes = require("./routes/authRoutes");
const postsRoutes = require("./routes/postsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const app = express();

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',  // Your frontend's URL
  // methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true,  // Allow cookies to be sent
}));



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/uploads/')
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + '-' ;
    cb(null, uniquePrefix + "-" + file.originalname);
  }
})

const upload = multer({ storage: storage })

app.post("/api/upload", upload.single("file"), (req, res)=>{
  // console.log(req.file);
  return res.status(200).json(req.file.filename);
})


app.use('/api/auth', authRoutes);
// app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
})