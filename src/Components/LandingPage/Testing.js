import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Testing() {
    return (
        <div className='col-12 pt-5 vh-100 TestingContainer'>
            <div className='Testing1'>
                <div>
                    <img src='./Images/gobeyond/TAAS Icon.png' width="90" height="45" />
                </div>
                <h1 style={{ fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                    Testing as a<br />
                    Service
                </h1>
                <span>
                    We are committed to serve you with our finest testing <br />
                    services to empower your organisation with premium<br />
                    software products with the right blend of Quality and <br />
                    Reliability through our expertise and effective test<br />
                    management.
                </span>
                <div className='mt-4'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <img src='./Images/gobeyond/Group 427321256.png' width="25" height="25" />
                                <h6 className='mt-2 ml-3'>
                                    Mobile Apps
                                </h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                Unlock your app's full potential with our expert optimization <br />
                                and testing.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <img src='./Images/gobeyond/Group 427321254.png' width="25" height="25" />
                                <h6 className='mt-2 ml-3'>
                                    Web Application
                                </h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                Optimize your web app's performance with rigorous testing <br />
                                for impenetrable security and seamless user experience.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <img src='./Images/gobeyond/Group 427321257.png' height="25px" width="25px" />
                                <h6 className='mt-2 ml-3'>
                                    Security Services
                                </h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                Elevate your cybersecurity with expert Penetration Testing<br />
                                and cutting-edge solutions for robust protection.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='Testing2'>
                <img src='./Images/gobeyond/testingMain.png' />
            </div>
        </div>
    )
}
