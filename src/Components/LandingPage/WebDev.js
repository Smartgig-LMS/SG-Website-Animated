import { fontFamily, height, lineHeight } from '@mui/system'
import React from 'react'

export default function WebDev() {
    return (
        // <div className='webdev col-12 pt-5 vh-100 fixed'>
        <div className='row TestingContainer vh-100'>
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
                        Businesses constantly evolve to survive, grow, sustain and flourish and we are always at your service to start with your idea and end with building Customer delight Web Apps .Together with our domain experts and expertise in Cutting-Edge technologies, visualise and design futuristic web apps to simplify your massive core systems.
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
                    <img className='webImg2' src='./Images/gobeyond/web-development-image.png' />
                </div>
            </div>
        </div>
    )
}
