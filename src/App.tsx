import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import {Cards} from "./components/Cards";
import BookInfo from "./components/BookInfo";


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
