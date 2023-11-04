import {axiosService} from "./axiosService";
import {urls} from "../constants";

const authService = {
    register(data) {
        axiosService.post(urls.auth.register, data)
    } ,
    async login(data) {
        let {data: {access}} = await axiosService.post(urls.auth.login, data);
        this.setToken(access)
    } ,
    me(){
        return axiosService.get(urls.auth.me)
    },

    setToken(token) {localStorage.setItem('token', token)},
    getToken() { return localStorage.getItem('token')},
    deleteToken(){localStorage.removeItem('token')}
}

export {authService}