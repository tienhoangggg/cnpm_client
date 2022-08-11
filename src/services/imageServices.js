import axios from "../axios"

const showImageApi = (idImage) =>{
    //console.log('comment/read/'+idImage);
    return axios.get('comment/read/'+idImage);
}

const getRandomImageApi = (tags,time,sortby,num) =>{
    return axios.post('getview/', {"sortby": sortby, "time": time, "num": num, "category": tags})
}

const uploadImage =(afile,fileName,tag,description)=>{
    return axios.post('upload/',{"file":afile,"fileName":fileName,"tag":tag,"description":description})
}
const getCategoryValues = ()=>{
    return axios.get('category/read',{});
}

const sendComment = (idImage, idAvatar, username, content)=>{
    return axios.post('comment/create', {"idImage": idImage, "idAvatar": idAvatar, "username": username, "content": content});
}
const likeImage = (idImage) =>{
    return axios.post('image/like', {"idImage": idImage});
}
const starImage = (idImage) =>{
    return axios.post('image/star', {"idImage": idImage});
}
const searchApi = (searchKey) =>{
    console.log('search/'+searchKey);
    return axios.get('search/'+searchKey)
}
const getCate =(cateName)=>{
    return axios.post('getcate/',{"cateName":cateName})
}
const getDataImg = (idImage)=>{
    return axios.get('image/getImage/'+idImage);
}
export { showImageApi, getRandomImageApi,uploadImage,sendComment,likeImage,starImage, getCategoryValues, searchApi, getCate, getDataImg}
