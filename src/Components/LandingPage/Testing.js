import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Testing() {
    return (
        <div className='col-12 pt-5 vh-100 TestingContainer'>
            <div className='Testing1'>
                <div>
                    <img src='./Images/gobeyond/TAAS Icon.svg' width="90" height="45" />
                </div>
                <div className='webhead'>
                    <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                        Quality Engineering for your <br />
                    </h1>
                    <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                        Digital transformations
                    </h1>
                </div>
                <span>
                    Are you in search for top notch software testing as<br />
                    a service, then look no further. We specialize in<br />
                    unbiased, high-quality testing, by utilizing both<br />
                    automated and manual methods, we make you to <br />
                    experience unparalleled excellence and efficiency.
                </span>
                <div className='mt-4'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <img src='./Images/gobeyond/Group 427321256.png' width="25" height="25" />
                                <div className='headingAccordion'>
                                    Mobile Apps
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Unlock your app's full potential with our expert<br />
                                testing solutions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <img src='./Images/gobeyond/Group 427321254.png' width="25" height="25" />
                                <div className='headingAccordion'>
                                    Web Application
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Achieve business outcomes with consumption<br />
                                based, integrated, scalable, flexible quality<br />
                                assurance services.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <img src='./Images/gobeyond/Group 427321257.png' height="25px" width="25px" />
                                <div className='headingAccordion'>
                                    Security Testing
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Our winning framework combined with  Right tools and ethical<br /> hacking ensures your applications are fool proof
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='Testing2'>
                <img src='./Images/gobeyond/Software-Tester 1.png' />
            </div>
        </div>
    )
}
