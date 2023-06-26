import axios, {Axios, AxiosResponse} from "axios";
import {base_url, myKey} from "../consts/constants";
import {itemAllTypes, ItemsType, State} from "../components/Cards";

const instance = axios.create({
    baseURL: base_url
})



export const bookApiService  = {

    getAll:(params:string,pages:number,startIndex:number)=>instance.get<AxiosResponse,AxiosResponse<itemAllTypes>>(`/volumes?q=intitle&startIndex=${startIndex}&maxResults=${pages}&${myKey}`),
    getGenres:(value:string|null,pages:number,startIndex:number)=>instance.get<AxiosResponse,AxiosResponse<itemAllTypes>>(`/volumes?q=subject:${value}&startIndex=${startIndex}&maxResults=${pages}&${myKey}`),
    getByName:(value:string|null,pages:number,query:string,startIndex:number)=>instance.get<AxiosResponse,AxiosResponse<itemAllTypes>>(`/volumes?q=${value}:${query}&startIndex=${startIndex}&maxResults=${pages}&${myKey}`)
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
