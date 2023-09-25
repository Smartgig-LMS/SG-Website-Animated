import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function CyberSecurity() {
    return (
        <div className=' col-12 pt-5 vh-100 TestingContainer'>
            <div className='Cyber1'>
                <div>
                    <img src='./Images/gobeyond/Group 427321194 (2).png' width="190" height="50" />
                </div>
                <h1 style={{ fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                    Improve cybersecurity<br />
                    for your Company in <br />
                    the digital age
                </h1>
                <span>
                    Cybersecurity refers to the practice of protecting computer <br />
                    systems, networks, and data from various forms of cyber <br />
                    threats and attacks. It encompasses a wide range of <br />
                    technologies, processes, and practices designed to <br />
                    safeguard digital information and ensure the confidentiality,<br />
                    integrity, and availability of data.
                </span>
            </div>
            <div className='Cyber2'>
                <img src='./Images/gobeyond/Group 427321293.png' />
            </div>
        </div>
    )
}
