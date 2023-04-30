const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const inventoryItemRoute = require("./routes/inventoryItemRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const path = require("path");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true, //(frontend url) 
})
);

//upload images
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Routes Middleware
app.use("/api/InventoryItems" , inventoryItemRoute);

//Routes
app.get("/", (req,res) => {
    res.send("Home Page");
})

//Error Middleware
app.use(errorHandler);


//connect to mongoDB and start server
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(PORT, () =>{

            console.log(`Server running on port ${PORT}`);
            
        });
    })
    .catch ((err) => console.log(err));