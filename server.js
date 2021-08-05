const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');

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

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});


