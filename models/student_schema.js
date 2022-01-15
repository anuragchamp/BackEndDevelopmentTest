const mongoose = require('mongoose');


const studentSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    age:{
        type:Number,
        require: true,
    }
});

module.exports = mongoose.model("studentSchema", studentSchema);