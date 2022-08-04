import axios from "../axios"

const showImageApi = (idImage) =>{
    return axios.get('comment/read', {"idImage": idImage});
}

export { showImageApi }