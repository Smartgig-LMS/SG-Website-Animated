import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../LandingPage/NavBar';
import ProductPage from '../NavigationPages/ProductPage';
import CulturePage from '../NavigationPages/CulturePage';
import ContactUsPage from '../NavigationPages/ContactUsPage';
import LayoutPage from '../LandingPage/LayoutPage';
import CareerPage from '../NavigationPages/CareerPage';
import BlogPage from '../LandingPage/BlogFolder/LandingBlog';
import ManufactoringBlog1 from '../LandingPage/BlogFolder/ManufactoringBlog1';

export default function RouteFile() {
    return (
        <Routes>
            <Route path='/' element={<LayoutPage />} >
                <Route path='' element={<LandingPage />}></Route>
                <Route path='partnerships' element={<ProductPage />} ></Route>
                <Route path='culture' element={<CulturePage />}></Route>
                <Route path='career' element={<CareerPage />}></Route>
                <Route path='contact' element={<ContactUsPage />} ></Route>
                <Route path='blogs' element={<BlogPage />} ></Route>
                <Route path='manufactoringblog1' element={<ManufactoringBlog1 />} ></Route>
            </Route>
        </Routes >
    )
}
