import React from 'react'

export default function NavBar() {
    return (
        <div className='d-flex' style={{ justifyContent: "space-between" }}>
            <div style={{ marginLeft: "30px" }}>
                <img src='./Images/gobeyond/SmartGig-logo.png' height="70px" width="131px" />
            </div>
            <div className='d-flex' style={{ justifyContent: "space-between", fontWeight: "500", marginTop: '19px', paddingRight: "60px" }}>
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
        </div>
    )
}
