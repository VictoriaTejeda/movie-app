import axiosInstance from "./config"
import API_KEY from "../key";
 
const  getCategoriesPreview = ( )=>axiosInstance.get(`/genre/movie/list?api_key=${API_KEY}`)
export default getCategoriesPreview;
