import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DataServices() {
    return (
        <div className=' col-12 pt-5 vh-100 TestingContainer'>
            <div className='DataService1'>
                <div>
                    <img src='./Images/gobeyond/Group 427321194 (1).png' width="190" height="50" />
                </div>
                <h1 style={{ fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                    Data Services
                </h1>
                <span>
                    Data services is a broad term that encompasses<br />
                    various activities and technologies related to<br />
                    managing, processing, and utilizing data. These<br />
                    services are essential in today's digital world where<br />
                    data plays a crucial role in decision-making, business <br />
                    operations, research, and more. Here are some key<br />
                    aspects of data services:
                </span>
                <div className='mt-5'>
                    {/* <Accordion defaultActiveKey="0"> */}
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <img src='./Images/gobeyond/Group 427321265.png' width="25" height="25" />
                                <div className='headingAccordion'> Artificial intelligence</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                AI refers to the simulation of human intelligence in<br />
                                machines or computer systems.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <img src='./Images/gobeyond/Group 427321264.png' width="25" height="25" />
                                <div className='headingAccordion'>  Machine learning</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Machine learning powers AI in applications like image <br />
                                recognition, language processing, and recommendations.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <img src='./Images/gobeyond/Website.png' width="25" height="25" />
                                <div className='headingAccordion'>  Data Migration</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Data migration is moving data from one location to <br />
                                another with careful planning for a smooth transition.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='DataService2'>
                <img src='./Images/gobeyond/Standard quality control collage concept.png' />
            </div>
        </div>
    )
}
