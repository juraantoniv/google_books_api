import axios, {Axios, AxiosResponse} from "axios";
import {base_url, myKey} from "../consts/constants";
import {ItemsType, State} from "../components/Cards";

const instance = axios.create({
    baseURL: base_url
})


const query = "?q=''";
export const bookApiService  = {
    getAll:(pages:number,startIndex:number)=>instance.get<AxiosResponse,AxiosResponse<State>>(`/volumes${query}&maxResults=${pages}&start-Index=${startIndex}&${myKey}`),
    getGenres:(value:string|null,pages:number)=>instance.get(`/volumes?q=${value}&maxResults=${pages}&${myKey}`),
    getByName:(value:string|null,pages:number,query:string)=>instance.get(`/volumes?q=${query}:${value}&maxResults=${pages}&${myKey}`)
}