import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";
import {authService} from "./authService";

const carService = {
    getAll: (page='1') => axiosService.get(urls.cars.baseURL, {params: {page}}),
    create: (car) => axiosService.post(urls.cars.baseURL, car)
}

export {carService}