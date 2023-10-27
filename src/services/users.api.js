const baseURL = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = ()=> {
    return fetch(baseURL).then(value => value.json());
}

export {getAllUsers}