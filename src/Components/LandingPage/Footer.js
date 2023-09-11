import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='d-flex' style={{ justifyContent: "space-evenly" }}>
                <div style={{ marginLeft: "30px", marginTop: '7px' }}>
                    <img src='./Images/gobeyond/SmartGig-logo.png' height="70px" width="131px" />
                </div>
                <div className='d-flex' style={{ justifyContent: "space-between", fontWeight: "500", marginTop: '27px', paddingRight: "60px" }}>
                    <div className='ml-4'>
                        Products
                    </div>
                    <div className='ml-4'>
                        Culture
                    </div>
                    <div className='ml-4'>
                        Career
                    </div>
                    <div className='ml-4'>
                        Contact Us
                    </div>
                </div>
                <div className='d-flex mt-4'>
                    <div>
                        <img src='./Images/gobeyond/Twitter.png' height="24px" width="24px" />
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                        <img src='./Images/gobeyond/Facebook.png' height="24px" width="24px" />
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                        <img src='./Images/gobeyond/Linkedin.png' height="24px" width="24px" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='d-flex' style={{ justifyContent: "space-around" }}>
                <div style={{ fontWeight: "500" }}>
                    Copyright © 2023 SmartGig. All Rights Reserved.
                </div>
                <div className='d-flex' style={{ fontWeight: "500" }}>
                    <div>
                        Terms of Service
                    </div>
                    <div className='ml-4'>
                        Privacy Policy
                    </div>
                </div>
            </div>
        </>
    )
}
