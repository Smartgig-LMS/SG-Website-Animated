import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../LandingPage/NavBar";
import ProductPage from "../NavigationPages/ProductPage";
import CulturePage from "../NavigationPages/CulturePage";
import ContactUsPage from "../NavigationPages/ContactUsPage";
import LayoutPage from "../LandingPage/LayoutPage";
import CareerPage from "../NavigationPages/CareerPage";
import BlogPage from "../LandingPage/BlogFolder/LandingBlog";
import ManufactoringBlog1 from "../LandingPage/BlogFolder/ManufactoringBlog1";
import ManufactoringBlog2 from "../LandingPage/BlogFolder/ManufactoringBlog2";
import ManufactoringBlog3 from "../LandingPage/BlogFolder/ManufactoringBlog3";
import PharmaBlog1 from "../LandingPage/BlogFolder/PharmaBlog1";
import PharmaBlog2 from "../LandingPage/BlogFolder/PharmaBlog2";
import PharmaBlog3 from "../LandingPage/BlogFolder/PharmaBlog3";
import RetailBlog1 from "../LandingPage/BlogFolder/RetailBlog1";
import RetailBlog2 from "../LandingPage/BlogFolder/RetailBlog2";
import RetailBlog3 from "../LandingPage/BlogFolder/RetailBlog3";
import PharmaBlog4 from "../LandingPage/BlogFolder/PharmaBlog4";
import RetailBlog4 from "../LandingPage/BlogFolder/RetailBlog4";
import ManufactoringBlog4 from "../LandingPage/BlogFolder/ManufactoringBlog4";
import PharmaBlog5 from "../LandingPage/BlogFolder/PharmaBlog5";

export default function RouteFile() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="" element={<LandingPage />}></Route>
        <Route path="partnerships" element={<ProductPage />}></Route>
        <Route path="culture" element={<CulturePage />}></Route>
        <Route path="career" element={<CareerPage />}></Route>
        <Route path="contact" element={<ContactUsPage />}></Route>
        <Route path="blogs" element={<BlogPage />}></Route>
        <Route
          path="manufactoringblog1"
          element={<ManufactoringBlog1 />}
        ></Route>
        <Route
          path="manufactoringblog2"
          element={<ManufactoringBlog2 />}
        ></Route>
        <Route
          path="manufactoringblog3"
          element={<ManufactoringBlog3 />}
        ></Route>
         <Route
          path="manufactoringblog4"
          element={<ManufactoringBlog4 />}
        ></Route>
        <Route path="pharmablog1" element={<PharmaBlog1 />}></Route>
        <Route path="pharmablog2" element={<PharmaBlog2 />}></Route>
        <Route path="pharmablog3" element={<PharmaBlog3 />}></Route>
        <Route path="pharmablog4" element={<PharmaBlog4 />}></Route>
        <Route path="pharmablog5" element={<PharmaBlog5 />}></Route>
        <Route path="retailblog1" element={<RetailBlog1 />}></Route>
        <Route path="retailblog2" element={<RetailBlog2 />}></Route>
        <Route path="retailblog3" element={<RetailBlog3 />}></Route>
        <Route path="retailblog4" element={<RetailBlog4 />}></Route>
      </Route>
    </Routes>
  );
}
