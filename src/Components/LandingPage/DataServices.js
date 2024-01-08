import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DataServices() {
    return (
        <div className='TestingContainer'>
            <div className='col-lg-7'>
                <div>
                    <img src='./Images/gobeyond/data-service.svg' width="190" height="50" />
                </div>
                <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3 mt-2'>
                    Data Services
                </h1>
                <span>
                    Ever thought of turning your data into a strategic asset.
                    Make it happen with our exceptional data services - A combination of data Capturing,storing,
                    cleansing , modelling ,Integrating ,Analysis,Analytics and Insights based solutions using tools
                    and process available.Combined with Data Science,Cloud Computing and AI gives you the advantage of
                    bringing out solutions which foster an advantage to your customers.
                </span>
                <div className='mt-4 mb-3'>
                    {/* <Accordion defaultActiveKey="0"> */}
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <img className='dropDownImg' src='./Images/gobeyond/Group 427321261.svg' width="25" height="25" />
                                <div className='headingAccordion'> Artificial intelligence</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Experience innovation through AI, optimizing
                                operations and enhancing user experiences.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <img className='dropDownImg' src='./Images/gobeyond/Group 427321264.svg' width="25" height="25" />
                                <div className='headingAccordion'>  Machine learning</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Harnessing Cutting–Edge Machine
                                Learning for maximum Impact.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <img className='dropDownImg' src='./Images/gobeyond/Group 427321246.svg' width="25" height="25" />
                                <div className='headingAccordion'>  Data Migration</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Embrace Seamless data migration to ensure
                                continuity and quality.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='col-lg-5 img-left'>
                <img src='./Images/gobeyond/Data Services images.png' />
            </div>
        </div>
    )
}
