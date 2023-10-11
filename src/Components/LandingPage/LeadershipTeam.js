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
                                    <img className='mahesh' src='./Images/gobeyond/MicrosoftTeamsIm381.svg' data-tooltip-id="my-tooltip-1" />
                                </a>

                                <a href='https://www.linkedin.com/in/ramakrishnavaddi' target='_blank'>
                                    <img className='rama' src='./Images/gobeyond/RamaSVG.svg' data-tooltip-id="my-tooltip-2" />
                                </a>

                                <a href='https://www.linkedin.com/in/leena-tiganapally-313487214' target='_blank'>
                                    <img className='leena' src='./Images/gobeyond/LeenaSVG.svg' data-tooltip-id="my-tooltip-3" />
                                </a>

                                <a href='https://www.linkedin.com/in/sankar-r-499470210' target='_blank'>
                                    <img className='shankar' src='./Images/gobeyond/ShankarSVG.svg' data-tooltip-id="my-tooltip-4" />
                                </a>
                                <a href='https://www.linkedin.com/company/smartgig-technologies-private-limited/' target='_blank'>
                                    <img className='smartLogo' src='./Images/gobeyond/SGLOGOSVG.svg' data-tooltip-id="my-tooltip-5" />
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

                            <ReactTooltip
                                id="my-tooltip-5"
                                place="right"
                                variant="warning"
                            >
                                <h6>
                                    SmartGig Technologies
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small></small>
                            </ReactTooltip>

                        </div>
                    </div>
                    <div className='col'>
                        <div className='LeaderShip2'>
                            <div>
                                <img src='./Images/gobeyond/Group 427321128.svg' width="180" height="80" />
                            </div>
                            <h1 style={{ color: "#5789DB", fontWeight: "700", width: "458", height: "124" }} className='mb-3'>
                                Meet our Leadership Team
                            </h1>
                            {/* <p>
                                Our leadership team at SmartGig represents the driving force behind our organization's relentless pursuit of excellence. They are not just leaders, they are visionaries who have set their sights on innovation as the cornerstone of our journey. With a mission to explore new frontiers in the digital landscape, they inspire us to reach greater heights.
                                Their collective dedication and unwavering commitment serve as a guiding light for our entire organization. Through their strategic acumen and industry expertise, they have not only fortified our market position but also enabled us to provide unparalleled services to our cherished clients.
                            </p> */}
                            <p>
                                With over 100+ years of combined experience we have got a well diverse leadership team. With a mission to explore new frontiers in the digital landscape, the organization is skyrocketing high.
                            </p>
                        </div>
                    </div>
                </div >
            </div >

            {/* for mobile -----------------------------------------------------------------*/}

            <div className='LeadershipForMobile mt-4' >
                <div className='col-lg-7'>
                    <div>
                        <img src='./Images/gobeyond/Group 427321128.svg' width="180" height="80" />
                    </div>
                    <h1 style={{ color: "#5789DB", fontWeight: "700", width: "458", height: "124" }} className='mb-3'>
                        Leadership Team
                    </h1>
                    <p>
                        Meet our dynamic leadership team who are
                        an epitome of unwavering dedication and
                        determination in driving forward the organization
                        towards excellence with innovation as vision and
                        embarking new digital horizons as a
                        mission.
                    </p>
                    <div className='LeaderShipMob1'>
                        <div className='LeaderShipMob2'>
                            <div className='card shadow' style={{ textAlign: "center", backgroundColor: "#FFE6CF", height: "210px", width: "160px", justifyContent: "center" }}>
                                <a href='https://www.linkedin.com/in/mahesh-nayani-4a947a1a' target='_blank'>
                                    <img className='mahesh' src='./Images/gobeyond/MicrosoftTeamsIm381.svg' data-tooltip-id="my-tooltip-1" />
                                </a>
                                <h6 style={{ color: "#F38313" }}>
                                    Mahesh Nayani
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>
                                    CEO
                                </small>
                            </div>

                            <div className='card shadow' style={{ textAlign: "center", backgroundColor: "#DCECFF", height: "210px", width: "160px", justifyContent: "center" }}>
                                <a href='https://www.linkedin.com/in/ramakrishnavaddi' target='_blank'>
                                    <img className='rama' src='./Images/gobeyond/RamaSVG.svg' data-tooltip-id="my-tooltip-2" />
                                </a>
                                <h6 style={{ color: "#2563AC" }}>
                                    Rama Vaddi
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>CDO</small>
                            </div>
                        </div>
                        <div className='LeaderShipMob2' >
                            <div className='card shadow' style={{ textAlign: "center", backgroundColor: "#DCECFF", height: "210px", width: "160px", justifyContent: "center" }}>
                                <a href='https://www.linkedin.com/in/sankar-r-499470210' target='_blank'>
                                    <img className='shankar' src='./Images/gobeyond/ShankarSVG.svg' height="109" width="109" data-tooltip-id="my-tooltip-4" />
                                </a>
                                <h6 style={{ color: "#2563AC" }}>
                                    Shankar Reddy
                                    <img src='./Images/gobeyond/Linkedin.png' className='ml-2' width="20px" height="20px" />
                                </h6>
                                <small>COO</small>
                            </div>
                            <div className='card shadow' style={{ textAlign: "center", backgroundColor: "#FFE6CF", height: "210px", width: "160px", justifyContent: "center" }}>
                                <a href='https://www.linkedin.com/in/leena-tiganapally-313487214' target='_blank'>
                                    <img className='leena' src='./Images/gobeyond/LeenaSVG.svg' height="109" width="109" data-tooltip-id="my-tooltip-3" />
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
                <div className='footerForMobile'>
                    <hr />
                    Copyright © 2023 SmartGig. All Rights Reserved.
                </div>
            </div >
        </>
    )
}
