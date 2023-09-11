import React from 'react'

export default function WebDev() {
    return (
        <div className='webdev col-12 pt-5 vh-100 fixed'>
            <div className='container' style={{ marginTop: "60px" }}>
                <div>
                    <img src='./Images/gobeyond/Web Development Icon.png' width="180" height="50" />
                </div>
                <h1 style={{ fontWeight: "700", width: "458", height: "124" }} className='col-12 mb-3 mt-2'>
                    We make it <br /> effortlessly for user
                </h1>
                <span>
                    We are determined in creating seamless user experience<br />
                    through our websites and web apps by bringing design<br />
                    and functionality come together harmoniously to<br />
                    enhance the  user experience with efficiency in which<br />
                    users can interact, explore and be inspired by our<br />
                    magnificence.
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
                            It is a long established fact<br />
                            that a reader
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
                            There are many variations of<br />
                            passages
                        </p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <img src='./Images/gobeyond/Web development Image.png' />
            </div>
        </div>
    )
}
