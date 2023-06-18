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
function AppMode() {

    let page = useSelector<AppRootStateType, number>(state => state.books.pages)

    let index = useSelector<AppRootStateType, number>(state => state.books.index)

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
        fontSize:'11px'
    }
    const  addPage=()=>{

        dispatch(paginationAC(index+10))
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
            <Button sx={margin} variant="contained" onClick={addPage}>Page : {index==0?1:index/10+1}</Button>

        </div>
    );
}

export default AppMode;