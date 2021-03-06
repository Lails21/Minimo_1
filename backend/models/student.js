const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    enrolledsubjects: {type: Number, required: false},
    phone: [{
        id: String,
        value: String 
    }]
});

module.exports = mongoose.model('Student', StudentSchema);
