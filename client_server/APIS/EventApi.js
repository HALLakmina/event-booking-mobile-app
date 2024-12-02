import { apiClient } from "./ApiService";


export const getAllEvents = async() => {
    return await apiClient.get('/api/v1/events')
}

export const getEventsById = async(id) => {
    return await apiClient.get(`/api/v1/events/${id}`)
}