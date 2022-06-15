import axios from "axios";

const URL='https://api.themoviedb.org/3'

const axiosInstance= axios.create({
    baseURL: URL
});

export default axiosInstance;