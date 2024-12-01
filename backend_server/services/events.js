const Events = require('../models/events')

const create = async (data) => {
    try{
        const newEvent = new Events({ ...data});
        await newEvent.save();
        return newEvent;        
    }catch(err){
        throw err;
    }
}

const findEvents = async () =>{
    try{
        const events = await Events.find()
        return events
    }catch(err){
        throw err;
    }
}

const findById = async (id) => {
    try{
        const event = await Events.findOne({ _id: id,})
        return event
    }catch(err){
        throw err;
    }
}

const updateEventsById = async (id, payload) =>{
    try{
        const updateEvent = await Events.findOneAndUpdate(
            { _id: id },
            { ...payload },
            { new: true }
        ).exec();
        return updateEvent;
    }catch(err){
        throw err;
    }
}

const deleteEventsById = async (id) => {
    try{
        const event = await Events.findByIdAndDelete(id)
        return event
    }catch(err){
        throw err;
    }
}


module.exports = {
    create,
    findEvents,
    findById,
    updateEventsById,
    deleteEventsById
}