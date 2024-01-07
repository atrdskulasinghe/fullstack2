const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routers = require("./src/routes/routes");
const cors = require("cors");

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/ticket-book");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

app.use("/", routers);

app.listen(PORT, ()=>{
     console.log(`Server is running on port ${PORT}`)
});
