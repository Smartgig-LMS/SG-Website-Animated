import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function CyberSecurity() {
    return (
        <div className=' row vh-100 TestingContainer'>
            <div className='col ml-4 pr-0'>
                <div className='Cyber1'>
                    <div>
                        <img src='./Images/gobeyond/CyberIocn1.svg' width="190" height="50" />
                    </div>
                    <div>
                        <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className='mt-2'>
                            Securing Your
                        </h1>
                        <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3 cyberSecHead'>
                            Tomorrow, Today
                        </h1>
                    </div>
                    <span>
                        In an increasingly connected world, security is not a choice; it's a necessity. At SmartGig, we're dedicated to providing top-tier cybersecurity solutions that empower businesses to thrive in the digital age.
                        We stay ahead of emerging threats to keep your systems secure. <br /><br />
                        Managed Cyber Security: Simplify cybersecurity for cloud, network and endpoints by using our cloud native suite in an extended detection and response (XDR) platform built with skilled and certified professionals, Technology partenerships and MITRE ATT&CK framework.
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
