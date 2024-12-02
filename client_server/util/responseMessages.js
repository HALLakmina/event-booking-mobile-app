const common = {
    add: (resource) => `A New ${resource} Added Successfully`,
    updated: (resource) => `${resource} Updated Successfully`,
    deleted: (resource) => `${resource} Deleted Successfully`,
}
const error ={
    400:`Bard Request`,
    404:(resource)=>`${resource} Not Found`,
    409:(resource)=>`${resource} Conflict By Code`,
    topic409:(resource)=>`${resource} Conflict By Topic`,
    500:`Internal Server Error`
}
const type ={
    event:`Event`,
    user :`User`
}

const user = {   
    found:`You Have Successfully Logged In.`,
    register:`You Have Successfully Register.`,
    notFound: `Invalid Email Or Password`
}
const event = {
    add: `A New Event Added Successfully`,
    updated: `Event Updated Successfully`,
    deleted: `Event Deleted Successfully`,    
    notFound: `Event Not Found`,
    conflictByCode : `Event Conflict By Code`,
    patchById: `Event Patch By Code`
}




module.exports = {
    common,
    error,
    type,
    event,
    user
}