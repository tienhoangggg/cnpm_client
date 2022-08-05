import axios from "../axios"

const showImageApi = (idImage) =>{
    return axios.get('comment/read', {"idImage": idImage});
}

const getRandomImageApi = (tags,time,sortby,num) =>{
    return axios.post('getview/', {"sortby": sortby, "time": time, "num": num, "category": tags})
}
export { showImageApi, getRandomImageApi}