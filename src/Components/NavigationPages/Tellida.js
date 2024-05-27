import React from "react";
import Footer from "../LandingPage/Footer";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LanguageIcon from "@mui/icons-material/Language";

export default function Tellida() {
  return (
    <>
      <div className="videoTextContainer d-flex justify-content-center align-items-center">
        {/* <video className="w-100" autoPlay loop muted> */}
        <video className="w-100" controls autoPlay loop>
          <source
            src="https://sgvideofreetoouse.s3.ap-south-1.amazonaws.com/Perch+Walkthrough+Final.mp4"
            type="video/mp4"
            allowFullScreen
          />
        </video>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-md-5 p-3">
        <div className="mx-5 w-100 w-md-50">
          <h1
            className="font-weight-bold"
            style={{ color: "#024D94", fontSize: "5rem" }}
          >
            Tellida
          </h1>
          <h3>
            Say Goodbye to Project Management Headaches and Hello to Happy
            Clients
          </h3>
          <p>No More Chaos, Budget Woes, or Frustrated Clients</p>
          <button className="trailBtn d-flex align-items-center justify-content-between">
            Get Started
            <span className="rightArrow" style={{ marginLeft: "10px" }}>
              <KeyboardArrowRightIcon />
            </span>
          </button>
          <p className="py-md-4">
            Used and helping over more{" "}
            <span className="font-weight-bold">
              10+ Companies <LanguageIcon />
            </span>{" "}
          </p>
        </div>
        <div className="shadow w-100 w-md-50">
          <img
            src="./Images/gobeyond/Dashboard(Projects).svg"
            alt="perchMobile"
            className="w-100"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
