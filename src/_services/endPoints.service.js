import JsonPlaceHolder from "./caller.service";

let getAllUsers = () => {
    return JsonPlaceHolder.get('/users')
}

let getAllPosts = () => {
    return JsonPlaceHolder.get('/posts')
}

let getOnePost = (id) => {
    return JsonPlaceHolder.get(`/posts/${id}`)
}
    
export const endPointsService = {
    getAllUsers, getAllPosts, getOnePost
}