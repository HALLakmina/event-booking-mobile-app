const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: { type: String, required : true},
    email: { type: String, required : true},
    password: { type: String, required : true},
    bookingTickets:{ type: Array, required : false},
    createdBy: { type : String, required : false },
    updatedBy: { type : String, required : false },
    
}, { timestamps: true })

const UserModel = mongoose.model("users", schema);
module.exports = UserModel;