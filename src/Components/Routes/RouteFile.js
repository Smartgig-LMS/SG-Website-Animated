import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

export default function RouteFile() {
    return (
        <Routes>
            {/* <Route index element={<LandingBanner />} /> */}
            <Route path='/' element={<LandingPage />} />
        </Routes>
    )
}
