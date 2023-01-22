import axios from "axios"

export const API = axios.create({
    baseURL: "http://localhost:6689/waysbooks"
    // baseURL: "https://test-production-6488.up.railway.app/waysbooks"
})

export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
        delete API.defaults.headers.common["Authorization"]
    }
}