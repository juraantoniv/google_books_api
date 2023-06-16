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

type ActionsType = ChangeTaskTitleActionType|ChangePagesType|ChangePagesDecType|ChangeSeachType


const initialState:State = {
    items:[],
    pages:10,
    author:'title'
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



                        if (state.pages<=40){

                        return {...state,pages:action.page}

                        }
                        else {

                            return {...state}
                        }


        }
        case "DEC-PAGE": {



            if (state.pages>=20) {

                return {...state,pages:action.page}
            }

            else {

                return {...state}
            }

        }
        case 'SEARCH':{

            return {...state,author:action.name}
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

export const pagesDecAC = (page:number): ChangePagesDecType => {
    return {type: 'DEC-PAGE',page} as const
}

export const searchAC = (name:string): ChangeSeachType => {
    return {type: 'SEARCH',name} as const
}