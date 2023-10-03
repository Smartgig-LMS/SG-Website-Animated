import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DataServices() {
    return (
        <div className=' row pt-5 vh-100 pl-5 TestingContainer'>
            <div className='col ml-4 pr-0'>
                <div className='DataService1'>
                    <div>
                        <img src='./Images/gobeyond/DataSer1.svg' width="190" height="50" />
                    </div>
                    <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3 mt-2'>
                        Data Services
                    </h1>
                    <span>
                        Ever thought of turning your data into a strategic asset.
                        Make it happen with our exceptional data services, which
                        make you to handle the complexities with ease in your own
                        path of excellence as we effortlessly manage, analyse and
                        leverage your data to harness the full potential of your
                        information assets to make you stay ahead in today’s
                        data – driven world.
                    </span>
                    <div className='mt-5'>
                        {/* <Accordion defaultActiveKey="0"> */}
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header >
                                    <img className='dropDownImg' src='./Images/gobeyond/Group 427321265.png' width="25" height="25" />
                                    <div className='headingAccordion'> Artificial intelligence</div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Experience innovation through AI, optimizing <br />
                                    operations and enhancing user experiences.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <img className='dropDownImg' src='./Images/gobeyond/Group 427321264.png' width="25" height="25" />
                                    <div className='headingAccordion'>  Machine learning</div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Harnessing Cutting – Edge Machine<br />
                                    Learning for maximum Impact.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <img className='dropDownImg' src='./Images/gobeyond/Website.png' width="25" height="25" />
                                    <div className='headingAccordion'>  Data Migration</div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Embrace Seamless data migration to ensure<br />
                                    continuity and quality.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className='col ml-3'>
                <div className='DataService2 img-left'>
                    <img src='./Images/gobeyond/7xm456259 2.png' />
                </div>
            </div>
        </div>
    )
}
