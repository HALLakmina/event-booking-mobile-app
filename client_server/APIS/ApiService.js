import axios from "axios";

const API_Base_URL =  `http://localhost:3000`

export const apiClient = axios.create({baseURL: API_Base_URL});