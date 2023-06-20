import React, {useEffect, useReducer, useState} from 'react';
import logo from './logo.svg';


import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    Typography
} from "@mui/material";
import {bookApiService} from "../services/bookservise";

import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redusers/store";
import {addBooksAC, addCountOfValuesAC, paginationAC} from "../redusers/bookReduser";
import Button from "@mui/material/Button";
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';


export type State = {

    items:itemAllTypes
    pages:number
    author:string
    index:number
    query:string

}


export type ItemsType = {
    accessInfo:object
    etag:string
    id:string
    kind:string
    searchInfo:searchInfoType
    saleInfo:SalesType
    selfLink:string
    volumeInfo:bookInfoType
    totalItems:number
}


export type itemAllTypes ={
    items:ItemsType[]
    totalItems:number
}


export type SalesType ={
    country:string
    saleability:string
}

export type searchInfoType ={
    textSnippet:string
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
    justifyContent:'center',
    width:'360px',
    minHeight:'250px',
    borderRadius:15,
    margin:'20px',
    backgroundColor:'blue',

}

export const Cards = () => {


    const imgNotFound = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'


    const [loading,setLoading] = useState<boolean>(true)

    let {genre}= useParams()


    const navigate = useNavigate();

    const books = useSelector<AppRootStateType,ItemsType[] >(state => state.books.items.items)
    const page = useSelector<AppRootStateType, number>(state => state.books.pages)
    const index = useSelector<AppRootStateType, number>(state => state.books.index)
    const author = useSelector<AppRootStateType, string>(state => state.books.author)

    const dispatch = useDispatch();




    useEffect(()=>{

        if (!genre){

        bookApiService.getAll(author,page,index).then((res)=>{

            console.log('all')

            setLoading(false)
            dispatch(addBooksAC(res.data.items))
            dispatch(addCountOfValuesAC(res.data.totalItems))

        })
            .catch(()=>{


            })


        }


    },[author,page,index])


    console.log(page);

    useEffect(()=>{

            if (genre){


            bookApiService.getGenres(genre,page,index).then((res)=>{



                setLoading(false)
                dispatch(addBooksAC(res.data.items))
                dispatch(addCountOfValuesAC(res.data.totalItems))
                dispatch(paginationAC(10))

            })
                .catch(()=>{


                })

            }

    },[genre,page,index])




    return (
        <div style={{display:'flex', justifyContent:'center'}}>

        {loading?  <CircularProgress size="12rem"/> : <Grid style={{display:'flex', justifyContent:'center'}} container spacing={3}>

            {
                books?.map((el,index) => (

                <Card style={styleForCard}>

                    <CardActionArea>

                        <CardMedia
                            component="img"
                            height="230"
                            image={el.volumeInfo?.imageLinks?.thumbnail ? el.volumeInfo.imageLinks?.thumbnail : imgNotFound}
                            alt="img"
                        />
                        <CardContent>
                            <Typography  fontFamily={'fantasy'} fontSize={'15px'} gutterBottom variant="overline" component="small">
                            {el.volumeInfo?.title}
                        </Typography>
                            </CardContent>
                        <CardContent>
                            <Typography fontFamily={'-moz-initial'} fontWeight={'bold'} gutterBottom variant="button" component="small">
                                Author | {el.volumeInfo?.authors}
                            </Typography>
                        </CardContent>

                        <CardActions>
                           <Link to={'/info'} state={{...el}} ><Button size="small" variant={'contained'} sx={{marginRight:1}} >More</Button>  </Link>
                            <Button size="small" variant={'contained'} href={el.volumeInfo?.canonicalVolumeLink}>Read</Button>
                        </CardActions>
                    <Typography fontFamily={'cursive'}  fontSize={'15px'} component="small">
                        <p style={{padding:10}}>{el.searchInfo?.textSnippet}</p>
                    </Typography>
                    </CardActionArea>

            </Card>
    ))


}

    </Grid>}
    </div>
);
}



