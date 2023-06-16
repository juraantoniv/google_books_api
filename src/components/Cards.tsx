import React, {useEffect, useReducer, useState} from 'react';
import logo from './logo.svg';


import {Card, CircularProgress, Grid} from "@mui/material";
import {bookApiService} from "../services/bookservise";

import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redusers/store";
import {addBooksAC} from "../redusers/bookReduser";


export type State = {
    items:ItemsType[]
    pages:number
    author:string
}


export type ItemsType = {
    accessInfo:object
    etag:string
    id:string
    kind:string
    saleInfo:object
    selfLink:string
    volumeInfo:bookInfoType
}

export type bookInfoType = {
    authors:string
    canonicalVolumeLink:string
    categories:string
    contentVersion:string
    description:string
    imageLinks:imageLinksInfoType
    industryIdentifiers:string
    infoLink:string
    language:string
    maturityRating:string
    pageCount:string
    panelizationSummary:string
    previewLink:string
    printType:string
    publishedDate:string
    publisher:string
    readingModes:string
    subtitle:string
    title:string
}

export type imageLinksInfoType = {
    smallThumbnail:string
    thumbnail:string
}

const styleForCard = {
    padding:'20px',
    width:'250px',
    height:'450px',
    borderRadius:15,
    margin:'20px',
    backgroundColor:'blue',

    '&:hover': {
        backgroundColor: 'blue',
    }
}

export const Cards = () => {


    const [loading,setLoading] = useState<boolean>(true)

    let {genre}= useParams()


    const navigate = useNavigate();

    const books = useSelector<AppRootStateType, ItemsType[]>(state => state.books.items)
    const page = useSelector<AppRootStateType, number>(state => state.books.pages)

    const dispatch = useDispatch();




    useEffect(()=>{

        if (!genre){

        bookApiService.getAll(page).then((res)=>{
            setLoading(false)
            dispatch(addBooksAC(res.data))

        })
            .catch(()=>{


            })


        }


    },[page])

    useEffect(()=>{

            if (genre){


            bookApiService.getGenres(genre,page).then((res)=>{
                setLoading(false)
                dispatch(addBooksAC(res.data))


            })
                .catch(()=>{


                })

            }

    },[genre,page])



    return (
        <div style={{display:'flex', justifyContent:'center'}}>

        {loading?  <CircularProgress size="12rem"/> : <Grid style={{display:'flex', justifyContent:'center'}} container spacing={3}>

            {
                books.map(el => (

                <Card style={styleForCard}>

                    <div>{el.volumeInfo?.title}</div>
                    <img src={el.volumeInfo.imageLinks?.thumbnail} alt={el.volumeInfo.imageLinks?.thumbnail}></img>

            </Card>
    ))


}

    </Grid>}
    </div>
);
}


