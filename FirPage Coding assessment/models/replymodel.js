//fetch mongoose
const mongoose = require("mongoose");

//define Schema
const replySchema = new mongoose.Schema({

    //on which event Admin is repling
    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Event"
    },

    //on which comment Admin is repling
    comment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },

    //What is reply
    body:{
        type:String,
        require : true
    }
});


module.exports = mongoose.model("Reply", replySchema);