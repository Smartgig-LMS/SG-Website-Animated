import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function CyberSecurity() {
    return (
        <div className=' row vh-100 pl-5 TestingContainer'>
            <div className='col ml-4 pr-0'>
                <div className='Cyber1'>
                    <div>
                        <img src='./Images/gobeyond/CyberIocn1.svg' width="190" height="50" />
                    </div>
                    <div className='webhead'>
                        <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className='mt-2'>
                            Improve cybersecurity for  <br />
                        </h1>
                        <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='mb-3 cyberSecHead'>
                            your Company in the digital age
                        </h1>
                    </div>
                    <span>
                        Elevate your cyber security defences with our
                        comprehensive cyber security services which fortify
                        your digital fortress with tailored solutions to
                        promote cyber safety and safeguard your business
                        from cyber threats with In-depth analysis and actionable
                        recommendations.
                    </span>
                </div>
            </div>
            <div className='col ml-3'>
                <div className='Cyber2 img-left'>
                    <img src='./Images/gobeyond/Group 427321293.png' />
                </div>
            </div>
        </div>
    )
}
