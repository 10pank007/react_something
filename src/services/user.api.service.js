import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
});

const getAllUsers = () => {
    return axiosInstance.get("/users");
}

const getUserById = (id) => {
    return axiosInstance.get(`/users/${id}`)
}

export {getAllUsers, getUserById}