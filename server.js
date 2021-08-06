const express = require('express');

const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const uri = 'mongodb+srv://sachin:LL5lrSQfCaOYdGOs@cluster0.6s9rx.mongodb.net/bmi?retryWrites=true&w=majority';
const app = express();
app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/user');

app.use('/users', usersRouter);





if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend/build"));


    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));

    })

}


mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true }).then(()=>
{
    app.listen( PORT,()=>{
        console.log("Porting running in 5000 !")
    });
    console.log("Connected to DB")
}).catch((error)=>{
    console.log(error)
})
