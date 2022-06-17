import axiosInstance from "./config"
import API_KEY from "../key";

const  getMoviesByCategory= (id)=>axiosInstance.get(`/discover/movie?api_key=${API_KEY}`,{
    params: {
      with_genres:id,
    }})
  

export default getMoviesByCategory;
