import axios from "axios";
import {base_url, myKey} from "../consts/constants";

const instance = axios.create({
    baseURL: base_url
})


const query = "?q=''";
export const bookApiService  = {
    getAll:(pages:number)=>instance.get(`/volumes${query}&maxResults=${pages}&${myKey}`),
    getGenres:(value:string|null,pages:number)=>instance.get(`/volumes?q=${value}&maxResults=${pages}&${myKey}`),
    getByName:(value:string|null,pages:number,query:string)=>instance.get(`/volumes?q=${query}:${value}&maxResults=${pages}&${myKey}`)
}