const mongoose = require('mongoose');

const NewslettersSchema = mongoose.Schema({
    {
        email:{
        type: String,
        required: true,
        unique: true,
        trim: true,}
    },
},{
    timeStamps: true
})


module.exports = 