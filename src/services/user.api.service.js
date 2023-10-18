const getAllUsers = async () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(value => value.json());
}

export {getAllUsers}

