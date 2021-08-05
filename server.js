const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');

const uri = 'mongodb+srv://sachin:LL5lrSQfCaOYdGOs@cluster0.6s9rx.mongodb.net/bmi?retryWrites=true&w=majority';
const app = express();
app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/user');

app.use('/users', usersRouter);






    app.use(express.static("frontend/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));

    })




mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true }).then(()=>
{
    app.listen( process.env.PORT || 8080,()=>{
        console.log("Porting running in 5000 !")
    });
    console.log("Connected to DB")
}).catch((error)=>{
    console.log(error)
})
