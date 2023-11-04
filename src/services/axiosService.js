import axios from "axios";

import {baseURL} from "../constants";
import {authService} from "./authService";

const axiosService = axios.create({
    baseURL
});

axiosService.interceptors.request.use(request => {
    let token = authService.getToken();
    if (token) {
        request.headers.Authorization = `Bearer ${authService.getToken()}`
    }
    return request;
})

export {axiosService}