import axios from "axios";

const JsonPlaceHolder = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

export default JsonPlaceHolder