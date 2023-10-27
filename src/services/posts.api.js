const baseURL = "https://jsonplaceholder.typicode.com/posts";

const getAllPosts = ()=> {
    return fetch(baseURL).then(value => value.json())
}

export {getAllPosts}