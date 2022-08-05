import axios from "../axios"

const showImageApi = (idImage) =>{
    return axios.get('comment/read', {"idImage": idImage});
}

const getRandomImageApi = (tags,time,sortby,num) =>{
    return axios.post('getview/', {"sortby": sortby, "time": time, "num": num, "category": tags})
}

const uploadImage =(afile,fileName,tag)=>{
    return axios.post('upload/',{"file":afile,"fileName":fileName,"tag":tag})
}

export { showImageApi, getRandomImageApi,uploadImage}