import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DataServices() {
    return (
        <div className=' col-12 pt-5 vh-100 TestingContainer'>
            <div className='DataService1'>
                <div>
                    <img src='./Images/gobeyond/DataSer1.svg' width="190" height="50" />
                </div>
                <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3 mt-2'>
                    Data Services
                </h1>
                <span className='dateServiceContent'>
                    Ever thought of turning your data into a strategic asset.<br />
                    Make it happen with our exceptional data services, which <br />
                    make you to handle the complexities with ease in your own<br />
                    path of excellence as we effortlessly manage, analyse and <br />
                    leverage your data to harness the full potential of your <br />
                    information assets to make you stay ahead in today’s <br />
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
            <div className='DataService2'>
                <img className='dataServiceImg' src='./Images/gobeyond/7xm456259 2.png' />
            </div>
        </div>
    )
}
