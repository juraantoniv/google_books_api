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

    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams);


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

             if (index!=10){

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

            <Button disabled={index===10||index===20} sx={margin} variant="contained" onClick={()=>addPage('-')}>Page -</Button>
            <Button sx={margin} variant="contained" onClick={()=>addPage('+')}>Page +</Button>



        </div>
    );
}

export default AppMode;