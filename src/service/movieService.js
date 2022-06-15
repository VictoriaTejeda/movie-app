import axiosInstance from "./config"
import API_KEY from "../key";

const  getTrendingMoviesPreview= ()=>axiosInstance.get(`/trending/movie/day?api_key=${API_KEY}`)
 
export default getTrendingMoviesPreview;
