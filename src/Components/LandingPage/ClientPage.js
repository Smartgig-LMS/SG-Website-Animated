import React from 'react'
import "./Landing.css";
import { useNavigate } from 'react-router-dom';

const OurClients = () => {

    const navigate = useNavigate();

    const navigatetoContact = () => {
        navigate("/contact");
    }

    return (
        <div className='clientPageforWeb'>
            <div className='col-12 pt-5 vh-100 Clientpg'>
                <div className='text-center'>
                    <img src='./Images/gobeyond/OurClient.svg' width="150" height="50" />
                    <h2 className='col-12 mb-3 mt-2 clientPgHeading'>Fueling Innovation Through Collaborative Excellence</h2>
                    <span className='col-12 mb-0 mt-2 clientPgPara'>
                        Powering the best teams, from next-generation startups to establish enterprises.
                    </span>
                </div>
                <div className="ClientpgImgs">
                    <div className='mdbcardMain'>
                        <div className='d-flex py-3 px-2 GapForClient' >

                            <div className='card shadow ClientPgCard' >
                                <img src='./Images/gobeyond/Atcs.png' className='ATCSIMG' />
                            </div>

                            <div className='card shadow ClientPgCard' >
                                <img src='./Images/brand/PhaseZeroLogo.png' alt='...' className='InfioIMG' />
                            </div>

                            <div className='card shadow ClientPgCard'>
                                <img src='./Images/gobeyond/Group 427321539.svg' />
                            </div>

                            <div className='card shadow ClientPgCard'>
                                <img src='./Images/brand/InfionicLogo.png' className='InfioIMG' alt='...' />
                            </div>

                            <div className='card shadow ClientPgCard'>
                                <img src='./Images/gobeyond/TEAM15919945.png' className='ITUSIMG' />
                            </div>
                        </div>

                        <div className='d-flex px-2 py-1 GapForClient' >

                            <div className='card shadow ClientPgCard' >
                                <img src='./Images/brand/InsurFinLogo.png' className='InsureIMG' alt='...' />
                            </div>
                            <div className='card shadow ClientPgCard'>
                                <img src='./Images/gobeyond/AnimotionLogo_final.png' width="45%" />
                            </div>
                            <div className='card shadow ClientPgCard' >
                                <img src='./Images/gobeyond/FineKonLogo.png' className='InsureIMG' alt='FineKon Logo' />
                            </div>
                            <div className='card shadow ClientPgCard'>
                                <img src='./Images/gobeyond/Group4273215.png' width="75%" />
                            </div>
                            <div className='card shadow ClientPgCard' >
                                <img src='./Images/brand/InfinityLearnLogo.png' className='InsureIMG' alt='...' />
                            </div>

                        </div>
                        <div className='mt-5'>
                            and many more...
                        </div>
                    </div>

                    {/* <div className='col-12 text-center tryusbtn'>
                        <button type='button' className='btn btn-primary' onClick={navigatetoContact}>Try us out</button>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default OurClients