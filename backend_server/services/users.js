const { hashPassword } = require('../util/hash')
const Users = require('../models/users')

//Find User by Email
const findUserByEmail = async (email) => {
    try{
        const user = await Users.findOne({ email })     
        return user;        
    }catch(err){
        throw err;
    }
}

//Create Users
const createUser = async (payload) => {
    try{
        const { name, email, password } = payload;
        const hash_Password = await hashPassword(password)
        const addUser = new Users({name, email, password: hash_Password});
        await addUser.save();
    }catch(err){
        throw err;
    }
}

const bookingEvent = async (email, payload) =>{
    try{
        const {bookingTickets} = payload
        const updateBookingEvent = await Users.findOneAndUpdate(
            { email: email },
            { bookingTickets: bookingTickets },
            { new: true }
        ).exec();
        return updateBookingEvent;
    }catch(err){
        console.log(err);
        throw err;
    }
}


module.exports = { findUserByEmail, createUser, bookingEvent }