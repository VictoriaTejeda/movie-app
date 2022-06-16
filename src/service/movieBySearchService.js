import axiosInstance from "./config"
import API_KEY from "../key";

const  getMoviesByShearch= (query)=>axiosInstance.get(`/search/movie?api_key=${API_KEY}`,{
    params: {
      query,
    }})
  

export default getMoviesByShearch;
