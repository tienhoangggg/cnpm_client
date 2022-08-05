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
const handleGetProfileApi = (userId) =>{
    console.log(userId);
    return axios.get('users/getprofile', {data: {id: userId}});
}

export { handleLoginApi, handleRegisterApi, handleGetProfileApi}