import React from 'react'

export default function Footer() {
    return (
        <div style={{ marginTop: "5%", paddingBottom: "1%", backgroundColor: "#F0F0F0" }}>
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
        </div>
    )
}
