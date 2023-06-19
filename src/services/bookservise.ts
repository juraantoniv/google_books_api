import axios, {Axios, AxiosResponse} from "axios";
import {base_url, myKey} from "../consts/constants";
import {ItemsType, State} from "../components/Cards";

const instance = axios.create({
    baseURL: base_url
})


const query = "q=''";
export const bookApiService  = {

    getAll:(params:string,pages:number,startIndex:number)=>instance.get<AxiosResponse,AxiosResponse<State>>(`/volumes?${query}&startIndex=${startIndex}&maxResults=${pages}&${myKey}`),
    getGenres:(value:string|null,pages:number,startIndex:number)=>instance.get(`/volumes?q=${value}&startIndex=${startIndex}&maxResults=${pages}&${myKey}`),
    getByName:(value:string|null,pages:number,query:string,startIndex:number)=>instance.get(`/volumes?q=${value}:${query}&startIndex=${startIndex}&maxResults=${pages}&${myKey}`)
}



// export const bookApiService = {
//     getAll: (params: string, pages: number, startIndex: number) =>
//         instance.get<State>(`/volumes`, {
//             params: {
//                 q: params,
//                 startIndex: startIndex,
//                 maxResults: pages,
//                 key: myKey
//             }
//         }),
//     getGenres: (value: string | null, pages: number, startIndex: number) =>
//         instance.get<State>(`/volumes`, {
//             params: {
//                 q: value,
//                 startIndex: startIndex,
//                 maxResults: pages,
//                 key: myKey
//             }
//         }),
//     getByName: (
//         value: string | null,
//         pages: number,
//         query: string,
//         startIndex: number
//     ) =>
//         instance.get<State>(`/volumes`, {
//             params: {
//                 q: `${query}:${value}`,
//                 startIndex: startIndex,
//                 maxResults: pages,
//                 key: myKey
//             }
//         })
// };
//
//
//
//
//
