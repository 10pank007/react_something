import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
});

const savePosts = (post) => axiosInstance.post("", {data: post} );

export {savePosts}