import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function CyberSecurity() {
    return (
        <div className=' col-12 pt-5 vh-100 TestingContainer'>
            <div className='Cyber1'>
                <div>
                    <img src='./Images/gobeyond/CyberIocn1.svg' width="190" height="50" />
                </div>
                <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className='mt-2'>
                    Improve cybersecurity for your <br />
                </h1>
                <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='mb-3'>
                    Company in the digital age
                </h1>
                <span>
                    Elevate your cyber security defences with our <br />
                    comprehensive cyber security services which fortify<br />
                    your digital fortress with tailored solutions to <br />
                    promote cyber safety and safeguard your business <br />
                    from cyber threats with In-depth analysis and actionable<br />
                    recommendations.
                </span>
            </div>
            <div className='Cyber2'>
                <img src='./Images/gobeyond/Group 427321293.png' />
            </div>
        </div>
    )
}
