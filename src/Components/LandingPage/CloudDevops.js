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
        <div className='TestingContainer col-12 pt-5 vh-100'>
            <div className='CloudDev1'>
                <div>
                    <img src='./Images/gobeyond/Group42.svg' width="180" height="50" />
                </div>
                <h1 id='heading' style={{ color: "#2563AC" }}>
                </h1>
                <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                    Your cloud services<br />
                </h1>
                <span className='mb-3'>
                    Enhance your organization's operational efficiency across all stages with<br /> our robust cloud services, leveraging the power of AWS and Azure.<br />
                    For operational efficiency and sustainability, go Smart way  with us.
                </span>
                <hr />
                <div style={{ display: "flex", textAlign: "center", gap: "4%", marginTop: "2%" }}>
                    <div>
                        <div>
                            <div>
                                <img src='./Images/gobeyond/Cloud Migration and Modernisation.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Migration<br /> and Modernisation
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src='./Images/gobeyond/DevSecOps.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    DevSecOps
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Infrastructure Services.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Infrastructure<br /> Services
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Data and AI.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Data and AI
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Cloud Security.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud<br /> Security
                                </p>
                            </div>
                        </div>
                        <div >
                            <div>
                                <img src='./Images/gobeyond/Cloud Economics.svg' />
                            </div>
                            <div className='mt-2'>
                                <p>
                                    Cloud Economics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <div className='d-flex mt-2'>
                        <h3 style={{ color: "#28B29A" }}>
                            25%
                        </h3>
                        <p className='ml-3 mt-1'>
                            Increase in retentio
                        </p>
                    </div>
                    <div className='d-flex mt-2'>
                        <h3 style={{ color: "#28B29A" }}>
                            1.7X
                        </h3>
                        <p className='ml-3 mt-1'>
                            User Data base growth
                        </p>
                    </div>
                </div> */}
            </div>
            <div className='CloudDev2'>
                <img src='./Images/gobeyond/Cloud69.png' />
            </div>
        </div>
    )
}
