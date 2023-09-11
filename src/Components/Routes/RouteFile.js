import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../LandingPage/NavBar';
import ProductPage from '../NavigationPages/ProductPage';
import CulturePage from '../NavigationPages/CulturePage';
import CarrerPage from '../NavigationPages/CarrerPage';
import ContactUsPage from '../NavigationPages/ContactUsPage';
import LayoutPage from '../LandingPage/LayoutPage';

export default function RouteFile() {
    return (
        // <Routes>
        //     {/* <Route index element={<LandingBanner />} /> */}
        //     <Route path='/' element={<LandingPage />} />
        //     <Route path='/products' element={<ProductPage />} />
        //     <Route path='/culture' element={<CulturePage />} />
        //     <Route path='/carrer' element={<CarrerPage />} />
        //     <Route path='/contact' element={<ContactUsPage />} />
        // </Routes >

        <Routes>
            <Route path='/' element={<LayoutPage />} >
                <Route path='landingpage' element={<LandingPage />}></Route>
                <Route path='products' element={<ProductPage />} ></Route>
                <Route path='culture' element={<CulturePage />}></Route>
                <Route path='carrer' element={<CarrerPage />}></Route>
                <Route path='contact' element={<ContactUsPage />} ></Route>
            </Route>
        </Routes >
    )
}
