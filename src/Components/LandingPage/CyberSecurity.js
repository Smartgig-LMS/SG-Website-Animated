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
                        SmartGigs CybersecurityIn an increasingly connected world, security is not a choice; it's a necessity. At SmartGigs, we're dedicated to providing top-tier cybersecurity solutions that empower businesses to thrive in the digital age.
                        <br />
                        <br />
                        <h5>
                            Our Approach:
                        </h5>
                        Threat Intelligence: We stay ahead of emerging threats to keep your systems secure.24/7 Monitoring: Our team never sleeps. We're always watching over your digital assets.Education and Training: We believe in empowering your team with the knowledge to defend against cyber threats.Rapid Response: In the event of an incident, we're ready to take swift action.
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
