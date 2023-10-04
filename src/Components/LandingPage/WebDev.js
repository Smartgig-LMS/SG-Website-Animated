import { fontFamily, height, lineHeight } from '@mui/system'
import React from 'react'

export default function WebDev() {
    return (
        // <div className='webdev col-12 pt-5 vh-100 fixed'>
        <div className='row TestingContainer vh-100 pl-5'>
            <div className='col ml-4 pr-0'>
                <div className='Webdev1'>
                    <div>
                        <img src='./Images/gobeyond/Group 427321583.svg' width="180" height="50" />
                    </div>
                    <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                        We make it <br />
                    </h1>
                    <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3 mt-2'>
                        effortlessly for user
                    </h1>
                    <span>
                        We are determined in creating seamless user experiences for our Customers websites and web apps
                        by bringing design and functionality come together harmoniously to enhance the user experience
                        with efficiency in which users can interact, explore and be inspired by our magnificence.
                    </span>
                    <div className='d-flex mt-5'>
                        <div>
                            <div>
                                <div>
                                    <img src='./Images/gobeyond/Slick websites Icon2.svg' />
                                </div>
                                <div className='mt-2'>
                                    <h6 style={{ fontWeight: "700" }}>
                                        Slick Websites
                                    </h6>
                                </div>
                            </div>
                            <p >
                                Crafting digital experiences<br />
                                that captivate
                            </p>
                        </div>
                        <div className='ml-4'>
                            <div >
                                <div>
                                    <img src='./Images/gobeyond/Smooth Web Apps Icon.svg' />
                                </div>
                                <div className='mt-2'>
                                    <h6 style={{ fontWeight: "700" }}>
                                        Smooth Web Apps
                                    </h6>
                                </div>
                            </div>
                            <p className='webAppDec'>
                                Embark flawless user journey with <br />
                                converge of speed and usability
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col ml-3'>
                <div className='Webdev2 img-left'>
                    {/* <img src='./Images/gobeyond/Web39.png' /> */}
                    <img className='webImg2' src='./Images/gobeyond/WebDev.png' />
                </div>
            </div>
        </div>
    )
}
