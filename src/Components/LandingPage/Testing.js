import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Testing() {
    return (
        <div className='TestingContainer'>
            <div className='col-lg-7'>
                <div>
                    <img src='./Images/gobeyond/TAAS Icon.svg' width="90" height="45" />
                </div>
                <div >
                    <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className='mt-2'>
                        Quality Engineering for your <br />
                    </h1>
                    <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3'>
                        Digital transformations
                    </h1>
                </div>
                <span>
                    At Next Gen SmartGig Quality Engineering Services, we offer a tailored approach to defining and implementing strategies that elevate your QA landscape. In this era of digital transformations, our QA offerings cover requirements analysis, early security, performance engineering, and infrastructure testing, ultimately reducing your UAT efforts.
                    <br />
                    <span style={{ fontWeight: "bold" }}>Our Testing as a Service (TaaS) </span>  offering provides flexibility to our customers allowing them to subscribe to our testing services as needed,  to reduce resource costs ,enhance Agility ,assures Business continuity, and provide access to Tools and resources.
                </span>
                <div className='mt-3 mb-3'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <img className='dropDownImg' src='./Images/gobeyond/Group 427321256.svg' width="25" height="25" />
                                <div className='headingAccordion'>
                                    Mobile Apps
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Unlock your app's full potential with our expert
                                testing solutions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <img className='dropDownImg' src='./Images/gobeyond/Group 427321254.svg' width="25" height="25" />
                                <div className='headingAccordion'>
                                    Web Application
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Achieve business outcomes with consumption
                                based, integrated, scalable, flexible quality
                                assurance services.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <img className='dropDownImg' src='./Images/gobeyond/Group 427321257.svg' height="25px" width="25px" />
                                <div className='headingAccordion'>
                                    Security Testing
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Our winning framework combined with  Right tools and ethical hacking ensures your applications are fool proof
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='col-lg-5 img-left'>
                <img src='./Images/gobeyond/Taas.png' />
            </div>
        </div>
    )
}
