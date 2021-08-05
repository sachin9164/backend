const mongoose =  require('mongoose');

const Schema = mongoose.Schema ;

const userSchema = new Schema({
    username : {
        type : String,
        require  : true,
    },
    heightFeet : {
        type : String,
        require  : true,
    },
    heightInch : {
        type : String,
        require  : true,
    },
    weight : {
        type : String,
        require  : true,
    },
    bmi : {
        type : Number,
        require  : true,
    },
    
}, {
    timestamps : true
});

const User = mongoose.model("User",userSchema);

module.exports =  User;