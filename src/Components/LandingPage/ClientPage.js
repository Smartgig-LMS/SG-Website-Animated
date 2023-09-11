import React from 'react'
import Slider from "react-slick";
import "./Landing.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import Footer from './Footer';

const OurClients = () => {

    return (
        <>
            <div className='col-12 pt-5 vh-100 fixed7'>
                <div className='container text-center'>
                    <img src='./Images/brand/OurClient.png' width="150" height="50" />
                    <h2 className='col-12 mb-3 mt-2' style={{ fontWeight: "700", marginTop: "20px" }}>Millions run on SmarGig every day</h2>
                    <span style={{ fontWeight: "400" }} className='col-12 mb-0 mt-2'>
                        Powering the best teams, from next-generation startups <br />
                        to established enterprises.
                    </span>
                </div>
                <div className="container">
                    <div style={{ marginLeft: "55px", marginTop: "0px" }}>
                        <div className='d-flex py-3 px-2' style={{ gap: "10px" }}>

                            <div style={{ backgroundColor: "#5B1CB0", height: "130px", width: "195px", borderRadius: "10px" }} ></div>

                            <MDBCard style={{ height: "130px", width: "195px" }}>
                                <MDBCardImage src='./images/brand/PhaseZeroLogo.png' className='mt-4 ml-1' alt='...' height="68px" width="176px" />
                            </MDBCard>

                            <div style={{ backgroundColor: "#40916C", height: "130px", width: "195px", borderRadius: "10px" }} ></div>

                            <MDBCard style={{ height: "130px", width: "195px" }}>
                                <MDBCardImage src='./images/brand/InfionicLogo.png' className='mt-4 ml-2' height="75px" width="169px" alt='...' />
                            </MDBCard>

                            <div style={{ backgroundColor: "#1F376C", height: "130px", width: "195px", borderRadius: "10px" }} ></div>
                        </div>

                        <div className='d-flex col-12 px-2' style={{ gap: "10px" }}>

                            <MDBCard style={{ height: "130px", width: "195px" }}>
                                <MDBCardImage src='./images/brand/InsurFinLogo.png' height="168px" width="177px" className='ml-2' alt='...' />
                            </MDBCard>
                            <div style={{ backgroundColor: "#D59B41", height: "130px", width: "195px", borderRadius: "10px" }} ></div>
                            <MDBCard style={{ height: "130px", width: "195px" }}>
                                <MDBCardImage src='./images/brand/atcs.png' height="58px" width="175px" className='mt-4 ml-2' alt='...' />
                            </MDBCard>
                            <div style={{ backgroundColor: "#2EC4B6", height: "130px", width: "195px", borderRadius: "10px" }} ></div>
                            <MDBCard style={{ height: "130px", width: "195px" }}>
                                <MDBCardImage src='./images/brand/InfinityLearnLogo.png' height="105px" width="140px" className='mt-2 ml-4' alt='...' />
                            </MDBCard>

                        </div>
                    </div>

                    <div className='col-12 text-center mt-3'>
                        <button type='button' className='btn btn-primary py-1 px-4 fs-4'>Try us out</button>
                    </div>
                </div>
                <div className='mt-5'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default OurClients