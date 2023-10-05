import React, { useState } from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";
import Footer from './Footer';

export default function LeadershipTeam() {
    const [flag, setFlag] = useState(false);

    return (
        <>
            {/* for web -----------------------------------------------------------------*/}
            <div className='LeadershipForWeb'>
                <div className='row vh-100 ml-5 LeadershipContainer'>
                    <div className='col ml-5 pr-0'>
                        <div className='LeaderShip1 ml-5'>
                            <div className='circle'>
                                <a href='https://www.linkedin.com/in/mahesh-nayani-4a947a1a' target='_blank'>
                                    <img className='mahesh' src='./Images/gobeyond/Mahesh.png' data-tooltip-id="my-tooltip-1" />
                                </a>

                                <a href='https://www.linkedin.com/in/ramakrishnavaddi' target='_blank'>
                                    <img className='rama' src='./Images/gobeyond/Rama.png' data-tooltip-id="my-tooltip-2" />
                                </a>

                                <a href='https://www.linkedin.com/in/leena-tiganapally-313487214' target='_blank'>
                                    <img className='leena' src='./Images/gobeyond/Leena.png' data-tooltip-id="my-tooltip-3" />
                                </a>

                                <a href='https://www.linkedin.com/in/sankar-r-499470210' target='_blank'>
                                    <img className='shankar' src='./Images/gobeyond/Shankar.png' data-tooltip-id="my-tooltip-4" />
                                </a>
                            </div>
                            <ReactTooltip
                                id="my-tooltip-1"
                                place="right"
                                variant="warning"
                            >
                                <h6 >
                                    Mahesh Nayani
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>
                                    Chief Executive Officer
                                </small>
                            </ReactTooltip>

                            <ReactTooltip
                                id="my-tooltip-2"
                                place="right"
                                variant="warning"
                            >
                                <h6>
                                    Rama Vaddi
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>Chief Development Officer</small>
                            </ReactTooltip>

                            <ReactTooltip
                                id="my-tooltip-3"
                                place="left"
                                variant="warning"
                            >
                                <h6>
                                    Leena Tiganapalli
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>Chief Human Resources Officer</small>
                            </ReactTooltip>

                            <ReactTooltip
                                id="my-tooltip-4"
                                place="right"
                                variant="warning"
                            >
                                <h6>
                                    Shankar Reddy
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>Cheif Operation Officer</small>
                            </ReactTooltip>

                        </div>
                    </div>
                    <div className='col'>
                        <div className='LeaderShip2'>
                            <div>
                                <img src='./Images/gobeyond/Group 427321128.svg' width="180" height="80" />
                            </div>
                            <h1 style={{ color: "#5789DB", fontWeight: "700", width: "458", height: "124" }} className='mb-3'>
                                Leadership Team
                            </h1>
                            <p style={{ fontWeight: "500", fontStyle: "Roboto", fontSize: "18px" }}>
                                Our leadership team at SmartGig represents the driving force behind our organization's relentless pursuit of excellence. They are not just leaders, they are visionaries who have set their sights on innovation as the cornerstone of our journey. With a mission to explore new frontiers in the digital landscape, they inspire us to reach greater heights.
                                Their collective dedication and unwavering commitment serve as a guiding light for our entire organization. Through their strategic acumen and industry expertise, they have not only fortified our market position but also enabled us to provide unparalleled services to our cherished clients.
                            </p>
                        </div>
                    </div>
                </div >
            </div >

            {/* for mobile -----------------------------------------------------------------*/}

            <div className='LeadershipForMobile' >
                <div className='row pt-1 vh-100 ml-1 LeadershipContainer '>
                    <div className='col'>
                        <div className='LeaderShip2'>
                            <div>
                                <img src='./Images/gobeyond/Group 427321128.svg' width="180" height="80" />
                            </div>
                            <h1 style={{ color: "#5789DB", fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                                Leadership Team
                            </h1>
                            <span style={{ fontWeight: "500", fontStyle: "Roboto", fontSize: "18px" }}>
                                Meet our dynamic leadership team who are
                                an epitome of unwavering dedication and
                                determination in driving forward the organization
                                towards excellence with innovation as vision and
                                embarking new digital horizons as a
                                mission.
                            </span>
                        </div>
                    </div>
                    <div className='LeaderShipMob1'>
                        <div className='LeaderShipMob2'>
                            <div className='card shadow' style={{ textAlign: "center", backgroundColor: "#FFE6CF", height: "210px", width: "160px", paddingTop: "10px", paddingBottom: "10px" }}>
                                <a href='https://www.linkedin.com/in/mahesh-nayani-4a947a1a' target='_blank'>
                                    <img className='mahesh' src='./Images/gobeyond/Mahesh.png' data-tooltip-id="my-tooltip-1" />
                                </a>
                                <h6 style={{ color: "#F38313" }}>
                                    Mahesh Nayani
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>
                                    CEO
                                </small>
                            </div>

                            <div className='card shadow' style={{ textAlign: "center", backgroundColor: "#DCECFF", height: "210px", width: "160px", paddingTop: "10px", paddingBottom: "10px" }}>
                                <a href='https://www.linkedin.com/in/ramakrishnavaddi' target='_blank'>
                                    <img className='rama' src='./Images/gobeyond/Rama.png' data-tooltip-id="my-tooltip-2" />
                                </a>
                                <h6 style={{ color: "#2563AC" }}>
                                    Rama Vaddi
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>CDO</small>
                            </div>
                        </div>
                        <div className='LeaderShipMob2' >
                            <div className='card shadow' style={{ textAlign: "center", backgroundColor: "#DCECFF", height: "210px", width: "160px", paddingTop: "10px", paddingBottom: "10px" }}>
                                <a href='https://www.linkedin.com/in/sankar-r-499470210' target='_blank'>
                                    <img className='shankar' src='./Images/gobeyond/Shankar.png' height="109" width="109" data-tooltip-id="my-tooltip-4" />
                                </a>
                                <h6 style={{ color: "#2563AC" }}>
                                    Shankar Reddy
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>COO</small>
                            </div>
                            <div className='card shadow' style={{ textAlign: "center", backgroundColor: "#FFE6CF", height: "210px", width: "160px", paddingTop: "10px", paddingBottom: "10px" }}>
                                <a href='https://www.linkedin.com/in/leena-tiganapally-313487214' target='_blank'>
                                    <img className='leena' src='./Images/gobeyond/Leena.png' height="109" width="109" data-tooltip-id="my-tooltip-3" />
                                </a>
                                <h6 style={{ color: "#F38313" }}>
                                    Leena Tiganapalli
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>CHRO</small>
                            </div>

                        </div>
                    </div>
                </div >
                <div style={{ fontWeight: "500", marginTop: "33%", textAlign: "center", marginLeft: "13%" }}>
                    <hr />
                    Copyright © 2023 SmartGig. All Rights Reserved.
                </div>
            </div >
        </>
    )
}
