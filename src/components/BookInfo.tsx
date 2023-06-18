import React from 'react';
import {useLocation} from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import {ItemsType} from "./Cards";

const BookInfo = () => {

    let {state}=useLocation()

    const newState:ItemsType = state

    const imgNotFound = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

    return (
        <div style={{ width:800, marginLeft:20 }}>
            <CardMedia
                sx={{ height: 290, borderRadius:2}}
                image={newState?.volumeInfo?.imageLinks?.thumbnail?newState?.volumeInfo?.imageLinks?.thumbnail:imgNotFound}
                title="info"

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {newState.saleInfo.saleability}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {newState.volumeInfo.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Categories: {newState.volumeInfo.categories}
                </Typography>
                <Typography variant="body2" fontSize={'larger'} color="text.secondary">
                    pageCount: {+newState.volumeInfo.pageCount!==0?newState.volumeInfo.pageCount:null}
                </Typography>
                <Typography variant="body2"  fontSize={'larger'} color="text.secondary">
                    publishedDate: {newState.volumeInfo.publishedDate}
                </Typography>
            </CardContent>

        </div>
    );
};

export default BookInfo;