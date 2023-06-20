import {ChangeEvent, useState} from 'react';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import Main from "./main";
import {useDispatch, useSelector} from "react-redux";
import {paginationAC} from "./redusers/bookReduser";
import {AppRootStateType} from "./redusers/store";
import Button from "@mui/material/Button";
import * as React from "react";
import {Label} from "@mui/icons-material";
import {useSearchParams} from "react-router-dom";
function AppMode() {

    let page = useSelector<AppRootStateType, number>(state => state.books.pages)

    let index = useSelector<AppRootStateType, number>(state => state.books.index)
    let totalItems = useSelector<AppRootStateType, number>(state => state.books.items.totalItems)

    const [searchParams, setSearchParams] = useSearchParams()

    console.log(index);

    // useEffect(() => {
    //     const params = Object.fromEntries(searchParams)
    //     sendQuery({page: params.page, count: params.count})
    //     setPage(+params.page || 1)
    //     setCount(+params.count || 4)
    // }, [])


    const dispatch = useDispatch();

    const [theme, settheme] = useState(false);
    const darkTheme = createTheme({
        palette: {
            mode: theme ? 'dark' : 'light',
        },
    });
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        settheme(event.target.checked);
    }

    const margin ={
        // marginRight:'10px',
        // marginTop:'60px',
        background:'3e2723',
        width:'90px',
        fontSize:'11px',
        marginLeft:1
    }
    const  addPage=(option:string)=>{

        if (option==='-'){

             if (index>10){

                 const action = index-page

           dispatch(paginationAC(action))

             }

        }
        if (option==='+')

        {


            console.log('yes2')

            const action = index+page

            dispatch(paginationAC(action))


        }



    }


    const valueOfPage = () => {

        return index===10?2:index/10
    }



       return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Main></Main>
                <label>Dark Mode</label>
                <Switch
                    checked={theme}
                    color='success'
                    onChange={handleChange} />
            </ThemeProvider>

            <Button disabled={index===10 || index===0} sx={margin} variant="contained" onClick={()=>addPage('-')}>{(index/10)}</Button>
            <Button sx={margin} variant="contained" onClick={()=>addPage('+')}>{(index/10)+1}</Button>
            <Button sx={margin} variant="contained"  disabled={true}>.....</Button>
            <Button sx={margin} variant="contained" >{Math.ceil(totalItems/page)}</Button>



        </div>
    );
}

export default AppMode;