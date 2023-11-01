import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const leaguesService = {
    getAll: ()=> axiosService.get(urls.leagues)
}

export {leaguesService}