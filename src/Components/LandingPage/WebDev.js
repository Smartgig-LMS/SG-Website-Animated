import React from 'react'

export default function WebDev() {
    return (
        // <div className='webdev col-12 pt-5 vh-100 fixed'>
        <div className='TestingContainer pt-5 vh-100'>
            <div className='Webdev1'>
                <div>
                    <img src='./Images/gobeyond/Web Development Icon.svg' width="180" height="50" />
                </div>
                <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3 mt-2'>
                    We make it effortlessly
                    for user
                </h1>
                <span>
                    We are determined in creating seamless user experience<br />
                    for our customers through websites and web apps developed <br />
                    by us while bringing design and functionality excellence.<br />
                    Enhance your customers user experience with futuristic<br />
                    designs thereby making their interaction with the application<br />
                    rich.
                </span>
                <hr />
                <div className='d-flex'>
                    <div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Slick websites Icon.png' />
                            </div>
                            <div className='mt-2'>
                                <h6 style={{ fontWeight: "700" }}>
                                    Slick Websites
                                </h6>
                            </div>
                        </div>
                        <p>
                            Crafting digital experiences<br />
                            that captivate
                        </p>
                    </div>
                    <div className='ml-4'>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Smooth Web Apps Icon.png' />
                            </div>
                            <div className='mt-2'>
                                <h6 style={{ fontWeight: "700" }}>
                                    Smooth Web Apps
                                </h6>
                            </div>
                        </div>
                        <p>
                            Embark flawless user journey with <br />
                            converge of speed and usability
                        </p>
                    </div>
                </div>
            </div>
            <div className='Webdev2'>
                {/* <img src='./Images/gobeyond/Web39.png' /> */}
                <img src='./Images/gobeyond/WebDev.png' />
            </div>
        </div>
    )
}
