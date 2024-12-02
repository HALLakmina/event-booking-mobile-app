const mongoose = require("mongoose");
const schema = mongoose.Schema;

const eventsSchema = new schema({
    title: { type: String, required : true},
    sub_title: { type: String, required : true},
    date_and_time: { type: String, required : true},
    description: { type: String, required : true},
    image: { type: String, required : true},
    createdBy: { type : String, required : false },
    updatedBy: { type : String, required : false },
    
}, { timestamps: true })

const events = mongoose.model("events", eventsSchema);
module.exports = events;