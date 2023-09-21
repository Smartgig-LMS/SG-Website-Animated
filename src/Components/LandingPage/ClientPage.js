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
import { useNavigate } from 'react-router-dom';

const OurClients = () => {

    const navigate = useNavigate();

    const navigatetoContact = () => {
        navigate("/contact");
    }

    return (
        <>
            <div className='col-12 pt-5 vh-100 Clientpg'>
                <div className='text-center'>
                    <img src='./Images/brand/OurClient.png' width="150" height="50" />
                    <h2 className='col-12 mb-3 mt-2 clientPgHeading'>Millions run on SmarGig every day</h2>
                    <span className='col-12 mb-0 mt-2 clientPgPara'>
                        Powering the best teams, from next-generation startups <br />
                        to established enterprises.
                    </span>
                </div>
                <div className="ClientpgImgs">
                    <div className='mdbcardMain'>
                        <div className='d-flex py-3 px-2 GapForClient' >

                            <div className='card ClientPgCard' style={{ backgroundColor: "#5B1CB0", borderRadius: "10px" }} >
                                <img src='./Images/gobeyond/Peddle.png' />
                            </div>

                            {/* <MDBCard className='mdbcard2'*/}
                            <div className='card ClientPgCard' >
                                <img src='./Images/brand/PhaseZeroLogo.png' alt='...' className='InfioIMG' />
                            </div>

                            <div className='card ClientPgCard' style={{ backgroundColor: "#40916C", borderRadius: "10px" }} >
                                <img src='./Images/gobeyond/AltimetrikLogo.png' />
                            </div>

                            <div className='card ClientPgCard'>
                                <img src='./Images/brand/InfionicLogo.png' className='InfioIMG' alt='...' />
                            </div>

                            <div className='card ClientPgCard' style={{ backgroundColor: "#1F376C", borderRadius: "10px" }} >
                                <img src='./Images/gobeyond/Savitr.png' />
                            </div>
                        </div>

                        <div className='d-flex px-2 GapForClient' >

                            <div className='card ClientPgCard' >
                                <img src='./Images/brand/InsurFinLogo.png' className='InsureIMG' alt='...' />
                            </div>
                            <div className='card ClientPgCard' style={{ backgroundColor: "#D59B41", borderRadius: "10px" }} >
                                <img src='./Images/gobeyond/Axiom.png' />
                            </div>
                            <div className='card ClientPgCard' >
                                <img src='./Images/gobeyond/FineKonLogo.png' className='InsureIMG' alt='FineKon Logo' />
                            </div>
                            <div className='card ClientPgCard' style={{ backgroundColor: "#2EC4B6", borderRadius: "10px" }} >
                                <img src='./Images/gobeyond/MectecH.png' />
                            </div>
                            <div className='card ClientPgCard' >
                                <img src='./Images/brand/InfinityLearnLogo.png' className='InsureIMG' alt='...' />
                            </div>

                        </div>
                    </div>

                    <div className='col-12 text-center tryusbtn'>
                        <button type='button' className='btn btn-primary' onClick={navigatetoContact}>Try us out</button>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurClients