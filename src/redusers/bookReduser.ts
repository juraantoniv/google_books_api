import {ItemsType, State} from "../components/Cards";



export type ChangeTaskTitleActionType = {
    type: 'ADD-BOOKS',
    books: State

}

export type ChangePagesType = {
    type: 'ADD-PAGE',
    page:number


}

export type ChangePagesDecType = {
    type: 'DEC-PAGE',
    page:number

}

export type ChangeSeachType = {
    type: 'SEARCH',
    name:string

}

export type PaginationTypeType = {
    type: 'PAGINATION-VALUE',
    index:number

}

type ActionsType = ChangeTaskTitleActionType|ChangePagesType|ChangePagesDecType|ChangeSeachType|PaginationTypeType


const initialState:State = {
    items:[],
    pages:10,
    author:'title',
    index:10
}

export const bookReducer = (state= initialState, action: ActionsType): State => {
    switch (action.type) {
        case "ADD-BOOKS":{

            return {
                ...state,
                items:action.books.items
            }
        }
        case "ADD-PAGE":{

            return {...state,pages:action.page}
        }

        case 'SEARCH':{

            return {...state,author:action.name}
        }
        case 'PAGINATION-VALUE':{

            return {...state,index:action.index}
        }
        default:
            return state;
    }
}


export const addBooksAC = (books:State): ChangeTaskTitleActionType => {
    return {type: 'ADD-BOOKS', books} as const
}

export const pagesAddAC = (page:number): ChangePagesType => {
    return {type: 'ADD-PAGE',page} as const
}


export const searchAC = (name:string): ChangeSeachType => {
    return {type: 'SEARCH',name} as const
}
export const paginationAC = (index:number): PaginationTypeType => {
    return {type: 'PAGINATION-VALUE',index} as const
}