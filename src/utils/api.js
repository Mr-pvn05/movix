import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY

export const fetchDataFromApi = async (endPoint, params) => {
    try {
        const data = await axios.get(`${BASE_URL}/${endPoint}${endPoint.includes("search") ? "&" : "?"}api_key=${API_KEY}`, {params})
        return data;
    } catch (error) {
        console.log("Error ocurred => ", error)
    }
}