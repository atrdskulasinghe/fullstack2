const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routers = require("./src/routes/routes");
const cors = require("cors");
const session = require("express-session");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8000;


app.use(cors());

// mongoose.connect("mongodb://localhost:27017/ticket-book");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // specify the destination folder
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    ); // use the original file name
  },
});

const upload = multer({ storage: storage });

app.post('/upload',upload.single('file'), (req,res) => {
     console.log(req.file)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/uploads", express.static("uploads"));

app.use("/", routers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
