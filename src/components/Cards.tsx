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
    categories:string[]
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
    borderRadius:15,
    margin:'20px',
    backgroundColor:'blue',
    height:'650px',
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



    const filteredBooks: ItemsType[] = books?.filter((el) => {
        const categories = el.volumeInfo?.categories;
        console.log(categories); // Log the categories array
        return categories && categories.includes('Business & Economics');
    });





    useEffect(()=>{

        if (!genre){

        bookApiService.getAll(author,page,index).then((res)=>{


            setLoading(false)
            // dispatch(addBooksAC(res.data.items?.filter(el =>el.volumeInfo?.categories[0]==='Travel')))
            dispatch(addBooksAC(res.data.items))
            console.log(res.data.items);
            dispatch(addCountOfValuesAC(res.data.totalItems))


        })
            .catch(()=>{


            })


        }


    },[author,page,index])






    useEffect(()=>{

            if (genre){


            bookApiService.getGenres(genre,page,index).then((res)=>{
                setLoading(false)
                dispatch(addBooksAC(res.data.items))
                dispatch(addCountOfValuesAC(res.data.totalItems))


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

                    <CardActionArea sx={{height:'650px'}}>

                        <CardMedia
                            component="img"
                            height="240"
                            image={el.volumeInfo?.imageLinks?.thumbnail ? el.volumeInfo.imageLinks?.thumbnail : imgNotFound}
                            alt="img"
                        />
                        <CardContent>
                            <Typography  fontFamily={'fantasy'} fontSize={'15px'} gutterBottom variant="overline" component="small">
                            {el.volumeInfo?.title}
                        </Typography>
                            </CardContent>
                        <CardContent sx={{margin:'1px', textShadow:"revert-layer", color:'violet'}}>
                            <Typography  fontFamily={'monospace'} fontSize={'12px'}  gutterBottom variant="overline" component="small">
                                Category : {el.volumeInfo?.categories}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography fontFamily={'-moz-initial'} fontWeight={'bold'} gutterBottom variant="button" component="small">
                                Author | {el.volumeInfo?.authors}
                            </Typography>
                        </CardContent>
                        <CardContent>
                        <CardActions>
                           <Button component={Link} to={'/info'} state={{...el}} size="small" variant={'contained'} sx={{marginRight:1}} >More</Button>
                            <Button size="small" variant={'contained'} href={el.volumeInfo?.canonicalVolumeLink}>Read</Button>
                        </CardActions>
                    <Typography fontFamily={'cursive'} textOverflow={'clip'} sx={{height:20}} fontSize={'14px'} component="small">
                       {el.volumeInfo?.description}
                    </Typography>
                        </CardContent>
                    </CardActionArea>

            </Card>
    ))


}

    </Grid>}
    </div>
);
}



