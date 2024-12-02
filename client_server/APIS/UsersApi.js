import { apiClient } from "./ApiService";
import {userToken} from "../util/userToken"

export const createUsers = async({name="", email="", password=""}) => {
    return await apiClient.post('/api/v1/users/sign-up',{name, email,password})
}

export const fetchUsers = async(payload) => {
    return await apiClient.post('/api/v1/users/sign-in',payload)
}

export const findUsers = async() => {
    const JWTTOKEN = await userToken()
    return await apiClient.get('/api/v1/users',{headers:{"access-token":JWTTOKEN}})
}

export const usersBookingTickets = async(tickets=[]) => {
    console.log(tickets)
    const JWTTOKEN = await userToken()
    return await apiClient.patch('/api/v1/users',{tickets:tickets},{headers:{"access-token":JWTTOKEN}})
}