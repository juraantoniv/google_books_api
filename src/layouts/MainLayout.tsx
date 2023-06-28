import React from 'react';
import SearchBar from '../components/SearchBar';
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (

        <div >
            <SearchBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;