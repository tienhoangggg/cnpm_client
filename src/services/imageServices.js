import axios from "../axios"

const showImageApi = (idImage) =>{
    //console.log('comment/read/'+idImage);
    return axios.get('comment/read/'+idImage);
}

const getRandomImageApi = (tags,time,sortby,num) =>{
    return axios.post('getview/', {"sortby": sortby, "time": time, "num": num, "category": tags})
}

const uploadImage =(afile,fileName,tag)=>{
    return axios.post('upload/',{"file":afile,"fileName":fileName,"tag":tag})
}

<<<<<<< HEAD
const getCate =(cateName)=>{
    return axios.post('getcate/',{"cateName":cateName})
}
export { showImageApi, getRandomImageApi,uploadImage,getCate}
=======
const readCategoriesApi = ()=>{
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
export { showImageApi, getRandomImageApi,uploadImage,sendComment,likeImage,starImage, readCategoriesApi, searchApi}
>>>>>>> c6ef3bdfcae1fcdaeefab8d4463e3bfc631aa725
