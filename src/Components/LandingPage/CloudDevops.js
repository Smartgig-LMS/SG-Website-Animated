import React from 'react'

export default function CloudDevops() {

    var headingChange = {
        currentHeader: 0,
        headings: ['Accelerate', 'Transform', 'Innovate'],
        heading: function () {
            document.getElementById('heading').innerHTML = this.headings[this.currentHeader];
            if (this.currentHeader === this.headings.length - 1) {
                this.currentHeader = 0;
            } else {
                this.currentHeader = this.currentHeader + 1;
            }
        }
    };

    setInterval(function () {
        headingChange.heading();
    }, 2000)

    return (
        <div className='TestingContainer'>
            <div className='col-lg-7'>
                {/* <div className='CloudDev1'> */}
                <div>
                    <img src='./Images/gobeyond/Group42.svg' width="180" height="50" />
                </div>
                <h1 id='heading' style={{ color: "#2563AC" }}>
                </h1>
                <h1 style={{ color: "#F38211", fontWeight: "700" }} className='webhead mb-3 mt-2'>
                    Your cloud services<br />
                </h1>
                <span className='w-100'>
                    Enhance your organization's cloud systems operational efficiency across all stages of cloud system management with our certified and experienced cloud experts. Attain exceptional complaince and governance standards , through the seamless integration of cloud computing and DevOps methodologies,  unlocking unparalleled operational excellence.
                </span>

                <div className='mt-5 cloudcontents'>
                    <div className='formob mb-2 mr-lg-2'>
                        <div>
                            <div>
                                <img className='1' src='./Images/gobeyond/Cloud Migration and Modernisation.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Migration<br /> and Modernization
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className='2' src='./Images/gobeyond/DevSecOps.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    DevSecOps
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2 mr-lg-2'>
                        <div >
                            <div>
                                <img className='3' src='./Images/gobeyond/Infrastructure Services.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Infrastructure<br /> Services
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img className='4' src='./Images/gobeyond/Data and AI.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Data and AI
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2 mr-lg-2'>
                        <div >
                            <div>
                                <img className='5' src='./Images/gobeyond/Cloud Security.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud<br /> Security
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img className='6' src='./Images/gobeyond/Cloud Economics.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Economics
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2 mr-lg-2'>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Cloud-oprations.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud<br /> Operations
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/CloudConsult.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud<br /> Consulting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2 mr-lg-2'>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Industry-cloud.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Industry <br /> Cloud
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/CloudBusinesApplication.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Business<br /> Application
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}

                {/* <div className='mt-5'>
                    <div className='mb-2 mr-lg-2 d-flex cloudcontents'>
                        <div className='formob'>
                            <div>
                                <img className='1' src='./Images/gobeyond/Cloud Migration and Modernisation.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Migration and Modernisation
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img className='3' src='./Images/gobeyond/Infrastructure Services.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Infrastructure Services
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img className='5' src='./Images/gobeyond/Cloud Security.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Security
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Cloud-oprations.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Operations
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Industry-cloud.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Industry Cloud
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2 mr-lg-2 d-flex cloudcontents'>
                        <div>
                            <div>
                                <img className='2' src='./Images/gobeyond/DevSecOps.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    DevSecOps
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img className='4' src='./Images/gobeyond/Data and AI.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Data and AI
                                </p>
                            </div>
                        </div>

                        <div className='formobile'>
                            <div>
                                <img className='6' src='./Images/gobeyond/Cloud Economics.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Economics
                                </p>
                            </div>
                        </div>

                        <div >
                            <div>
                                <img src='./Images/gobeyond/CloudConsult.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Consulting
                                </p>
                            </div>
                        </div>

                        <div className='formob' >
                            <div>
                                <img src='./Images/gobeyond/CloudBusinesApplication.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Business Application
                                </p>
                            </div>
                        </div>

                    </div>

                </div> */}

            </div>
            <div className='col-lg-5 img-left'>
                <img src='./Images/gobeyond/Cloud-Devops-image.png' />
            </div>
        </div>
    )
}
