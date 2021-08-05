const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");


const uri = 'mongodb+srv://sachin:LL5lrSQfCaOYdGOs@cluster0.6s9rx.mongodb.net/bmi?retryWrites=true&w=majority';
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true }).then(()=>
{
    app.listen( process.env.PORT || 5000,()=>{
        console.log("Porting running in 5000 !")
    });
    console.log("Connected to DB")
}).catch((error)=>{
    console.log(error)
})
const usersRouter = require('./routes/user');

app.use('/users', usersRouter);


app.get('/',(req,res)=>{
   res.send("Home Page!")
    
})

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("frontend/build"));

    const path = require("path");

    app.get("/react", (req, res) => {

        res.sendFile(path.res