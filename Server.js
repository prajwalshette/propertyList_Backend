const express = require("express");
const mongoose = require("mongoose")
const multer=require('multer')
const path = require("path");

require("dotenv").config()

const routes = require("../Backend/routes/authRoutes");

const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000

//Middleware
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(express.json())
app.use(cors())

 
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected...."))
.catch((err) => console.log(err));

app.use("/api", routes);

 

//image upload
const storage=multer.diskStorage({
    destination:(req,image,fn)=>{
        fn(null,"images")
    },
    filename:(req,image,fn)=>{
        fn(null,req.body.img)
        // fn(null,"image1.jpg")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("image"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})

// //static file
// app.use(express.static(path.join(__dirname, './property_listing_platform/build')));

// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname, './property_listing_platform/build/index.html'));
// })


 
app.listen(PORT, () => console.log('Listening at $(PORT)...'));