import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {bookApiService} from "../services/bookservise";
import {useDispatch, useSelector} from "react-redux";
import {addBooksAC, addCountOfValuesAC, pagesAddAC, paginationAC} from "../redusers/bookReduser";
import AppMode from "../provoder.mode";
import {AppRootStateType} from "../redusers/store";
import ControlledOpenSelect from "./Select";
import HomeIcon from '@mui/icons-material/Home';
import SelectForName from "./SelectForName";



export default function SearchAppBar() {

    const navigate = useNavigate();

    const [query, setQuery] = useState("")
    const [error, setError] = useState<boolean>(false)

    let page = useSelector<AppRootStateType, number>(state => state.books.pages)
    let author = useSelector<AppRootStateType, string>(state => state.books.author)
    let index = useSelector<AppRootStateType, number>(state => state.books.index)

    const dispatch = useDispatch();


const margin ={
    marginRight:'10px',
    marginTop:'60px',
    background:'blue',
    width:'290px',
    fontSize:'11px'
}

    const toolBarStyles = {
        height:'10px',
        marginBottom:'40px'
    }

    let {genre}= useParams()

    useEffect(()=>{

            if (query){

                bookApiService.getByName(query,page,author,index).then((res)=>{
                    dispatch(addBooksAC(res.data.items))
                    dispatch(addCountOfValuesAC(res.data.totalItems))
                })
            }

    },[query,author,page,index])


    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
         setQuery(e.currentTarget.value)
    }

   const  decPage=()=> {
       navigate('/')
       dispatch(paginationAC(0))
    }

    return (
        <Box sx={{ flexGrow: 1, marginBottom:5, display:'flex' ,justifyContent:'center', alignItems:'center'}}>
            <AppBar position="static">
                <Toolbar sx={toolBarStyles}>

                    <Button  sx={{background:'5e35b1', marginRight:10}} variant="contained" onClick={decPage}>{ <HomeIcon />}</Button>
                    <Button disabled={genre==='Fiction' } sx={margin} variant="contained" onClick={()=>navigate('Fiction')}>Fiction</Button>
                    <Button disabled={genre==='Computers'} sx={margin} variant="contained" onClick={()=>navigate('Computers')}>Computers</Button>
                    <Button disabled={genre==='Law'} sx={margin} variant="contained" onClick={()=>navigate('Law')}>Law</Button>
                    <Button disabled={genre==='Business'} sx={margin} variant="contained" onClick={()=>navigate('Business')}>Business</Button>

                    <TextField
                        id="outlined-basic" label="Search Book" variant="filled" size={'small'}
                        sx={{width:500,marginLeft:10,marginTop:'46px'}}
                        onChange={event => onChangeHandler(event)}
                        value={query}
                        error={error}

                    />
                    <SelectForName/>
                    <ControlledOpenSelect/>
                </Toolbar>
                <AppMode/>
            </AppBar>
        </Box>
    );
}