// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import {combineReducers, createStore} from "redux";
import {bookReducer} from "./bookReduser";

const rootReducer = combineReducers({
    books: bookReducer

})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


