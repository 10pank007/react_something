import axios from "axios";
import {baseURL} from "../constants/urls";

export const axiosService = axios.create({
    baseURL
});
axiosService.interceptors.request.use(request => {
    request.headers['x-rapidapi-key'] = 'a7753af6c36bb179e66e455a9517167b';
    return request;
})