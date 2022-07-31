import axios from "../axios"

const handleLoginApi = (userUsername, userPassword) => {
    return axios.post('users/login', {"username": userUsername, "password": userPassword});
}
const handleRegisterApi = (userUsername, userEmail, userPassword) => {
    return axios.post('users/register', {
        "username": userUsername,
        "email": userEmail, 
        "password": userPassword
    });
}

export { handleLoginApi, handleRegisterApi}