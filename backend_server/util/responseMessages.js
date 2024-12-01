const common = {
    created: (resource) => `${resource} Created Successfully.`,
    conflictById : (resource) => `${resource} Already Exists.`,
    updatedById: (resource) => `${resource} Updated Successfully.`,
    deletedById: (resource) => `${resource} Deleted Successfully.`,
    notFound: (resource = 'Resource') => `${resource} Not Found.`,
}

const contactUs = {
    created: `Your Request Sent Successfully. We Will Contact You Soon.`
}

module.exports = {
    common,
    contactUs  
}