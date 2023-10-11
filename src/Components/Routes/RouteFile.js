import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../LandingPage/NavBar';
import ProductPage from '../NavigationPages/ProductPage';
import CulturePage from '../NavigationPages/CulturePage';
import ContactUsPage from '../NavigationPages/ContactUsPage';
import LayoutPage from '../LandingPage/LayoutPage';
import CareerPage from '../NavigationPages/CareerPage';

export default function RouteFile() {
    return (
        <Routes>
            <Route path='/' element={<LayoutPage />} >
                <Route path='' element={<LandingPage />}></Route>
                <Route path='partnerships' element={<ProductPage />} ></Route>
                <Route path='culture' element={<CulturePage />}></Route>
                <Route path='career' element={<CareerPage />}></Route>
                <Route path='contact' element={<ContactUsPage />} ></Route>
            </Route>
        </Routes >
    )
}
