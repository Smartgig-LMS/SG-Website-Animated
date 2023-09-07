import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'
import "./Landing.css";

export default function LeadershipTeam() {
    return (
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
                            <div className='user1 tooltip'>
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
                            </div>

                            {/* user2 */}
                            <div className='user2 tooltip'>
                                <img src='./Images/gobeyond/Rama.png' alt='' />
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
                            </div>

                            {/* user3 */}
                            <div className='user3 tooltip'>
                                <img src='./Images/gobeyond/Shankar.png' alt='' />
                                <div className='tooltip-hover yellow'>
                                    <div className='row'>
                                        <div className='col-9'>
                                            <h3>Siva Shankar</h3>
                                            <small >Co-Director</small>
                                        </div>
                                        <div className='col-3 d-flex itmes-center'>
                                            <IoIosArrowDroprightCircle />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* user4 */}
                            <div className='user4 tooltip'>
                                <img src='./Images/gobeyond/Swathi.png' alt='' />
                                <div className='tooltip-hover bluecolor'>
                                    <div className='row'>
                                        <div className='col-9'>
                                            <h3>Swathi K</h3>
                                            <small >Director</small>
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

                    <div className='col-md-6 d-flex itmes-center' style={{ marginTop: "50px" }}>
                        <div className='col-12'>
                            <div>
                                <img src='./Images/gobeyond/Group 427321128.png' width="150" height="50" />
                            </div>
                            <h1 style={{ color: "#0F0049", fontWeight: "700", width: "458", height: "124" }} className='col-12 mb-3 mt-2'>
                                Leadership <br />
                                Team
                            </h1>
                            <span style={{ color: "#5789DB", fontWeight: "400", fontStyle: "Roboto", fontSize: "24px" }}>
                                Meet our dynamic leadership team who are an <br />
                                epitome of unwavering dedication and <br />
                                determination in driving forward the organization <br />
                                towards excellence with innovation as vision and <br />
                                embarking new digital horizons as a <br />
                                mission. Mahesh Nayani : CEO ,Rama Krishna Vaddi <br />
                                : VP SALES & DELIVERY , Swathi K : DIRECTOR , Siva <br />
                                Sankar : CO - DIRECTOR , Damu Kamasani : DATA <br />PRACTICE LEAD, Leena Tigalapally : OPERATIONS <br />
                                HEAD , Mani Sai : HR LEAD
                            </span>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
