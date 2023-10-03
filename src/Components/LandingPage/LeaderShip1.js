import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'
import "./Landing.css";
import { Link } from 'react-router-dom'

export default function LeadershipTeam() {
    return (
        <>
            <div className="col-12 py-5 bgPart fixed">
                <div className="container pb-5">
                    <div className='row'>
                        <div className="col-md-6">
                            <div className='teampolygon'>

                                {/* <div className='user6 tooltip'>
                                <img src='./Images/gobeyond/SG_Dp(3).png' alt='neww' />
                                <div className='tooltip-hover bluecolor'>
                                    <div className='row'>
                                        <div className='col-9'>
                                            <h3>Rama</h3>
                                            <small >VP & Delivery Head</small>
                                        </div>
                                        <div className='col-3 d-flex itmes-center'>
                                            <IoIosArrowDroprightCircle />
                                        </div>
                                    </div>

                                </div>
                            </div> */}

                                {/* user1 */}
                                {/* <div className='user1 tooltip'> */}
                                <img src='./Images/gobeyond/Mahesh.png' alt='' />
                                <div className='tooltip-hover bluecolor'>
                                    <div className='row'>
                                        <div className='col-9'>
                                            <h3>Mahesh Nayani</h3>
                                            <small >CEO</small>
                                        </div>
                                        <div className='col-3 d-flex itmes-center'>
                                            <IoIosArrowDroprightCircle />
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}

                                {/* user2 */}
                                <div className='user2 tooltip'>
                                    <img src='./Images/gobeyond/Rama.png' alt='' />
                                    <div className='tooltip-hover yellow'>
                                        <div className='row'>
                                            <div className='col-9'>
                                                <h3>Rama</h3>
                                                <small >VP & Delivery Head</small>
                                            </div>
                                            <div className='col-3 d-flex itmes-center'>
                                                <IoIosArrowDroprightCircle />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* user3 */}
                                <div className='user3 tooltip'>
                                    <img src='./Images/gobeyond/Shankar.png' alt='' />
                                    <div className='tooltip-hover orangcolor'>
                                        <div className='row'>
                                            <div className='col-9'>
                                                <h3>Siva Shankar</h3>
                                                <small >COO</small>
                                            </div>
                                            <div className='col-3 d-flex itmes-center'>
                                                <IoIosArrowDroprightCircle />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* user5 */}
                                <div className='user4 tooltip'>
                                    <img src='./Images/gobeyond/Leena.png' alt='' />
                                    <div className='tooltip-hover bluecolor'>
                                        <div className='row'>
                                            <div className='col-9'>
                                                <h3>Leena</h3>
                                                <small >Operations Head</small>
                                            </div>
                                            <div className='col-3 d-flex itmes-center'>
                                                <IoIosArrowDroprightCircle />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 d-flex' style={{ marginTop: "50px" }}>
                            <div className='col-12'>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321128.png' width="150" height="50" />
                                </div>
                                <h1 style={{ color: "#0F0049", fontWeight: "700", width: "458", height: "124" }} className='col-12 mb-3 mt-2'>
                                    Leadership <br />
                                    Team
                                </h1>
                                <span style={{ fontWeight: "400", fontStyle: "Roboto", }}>
                                    Meet our dynamic leadership team who are an 
                                    epitome of unwavering dedication and 
                                    determination in driving forward the organization 
                                    towards excellence with innovation as vision and 
                                    embarking new digital horizons as a 
                                    mission.
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
