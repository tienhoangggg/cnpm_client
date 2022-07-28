import axios from "../axios"

const handleLoginApi = (userUsername, userPassword) => {
    return axios.post('users/login', {"username": userUsername, "password": userPassword});
}
const handleRegisterApi = (userUsername, userEmail, userPassword, userFullname, userDateofbirth, userGender) => {
    return axios.post('users/register', {
        "username": userUsername,
        "email": userEmail, 
        "password": userPassword, 
        "fullname": userFullname,
        "dateofbirth": userDateofbirth,
        "gender": userGender
    });
}

export { handleLoginApi, handleRegisterApi}