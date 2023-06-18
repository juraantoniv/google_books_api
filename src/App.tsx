import React, {useEffect, useState} from 'react';
import logo from './logo.svg';

import {bookApiService} from "./services/bookservise";
import {Breadcrumbs, Card, CircularProgress, Grid} from "@mui/material";
import SearchBar from "./components/SearchBar";
import {Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import {Cards} from "./components/Cards";
import BookInfo from "./components/BookInfo";

export type State = {
  items:ItemsType[]
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
  width:'180px',
  height:'350px',
  margin:'20px',
  ':hover': {
    boxShadow: 20
  }
}

function App() {


  return (
      <div>

        <Routes>
          <Route element={<MainLayout/>}>
            <Route index element={<Navigate to={'/Movies'}/>}/>
            <Route path={'Movies'} element={<Cards/>}/>
            <Route path={':genre'} element={<Cards/>}/>
            <Route path={'/info'} element={<BookInfo/>}/>
          </Route>
        </Routes>
      </div>

  );
}

export default App;
