import React from 'react'
import Footer from '../LandingPage/Footer'

export default function ProductPage() {
    return (
        <div className='productpg '>
            <div className='opHeadnigs'>
                <h1>Our Products</h1>
            </div>
            <div className='totalMain'>
                <div className='Leftcontainer'>
                    <div className='opLeftSec'>
                        <img src='./Images/gobeyond/Group 427321121 (2).png' width="120" height="50" />
                    </div>
                    <h1 className='col-12 mb-4 mt-0'>
                        Breaking down Information<br />
                        Silos using Technology
                    </h1>
                    <span>
                        Infionic: Infionic evolved with an idea of a unified vision and collaborative approach towards <br />
                        business and traditional IT solutions. Through its path breaking ERP software it really revolutionized<br />
                        the Enterprise Resource Planning, in which it aligns IT solutions with agility and precision to<br />
                        transform the growth of business .with extensive domain knowledge and Increased Flexibility with<br />
                        the integration of multitude of departments in business.
                    </span>
                    <br />
                    <button className='visitbtn'>Visit Website</button>
                    <hr />
                    <h5 className='mb-3'>
                        Infionic Services
                    </h5>
                    <div className='d-flex'>
                        <div>
                            <div >
                                <div>
                                    <img src='./Images/gobeyond/Slick websites Icon.png' />
                                </div>
                                <div className='mt-2'>
                                    <h6 style={{ fontWeight: "700" }}>
                                        ZIM
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='ml-4'>
                            <div >
                                <div>
                                    <img src='./Images/gobeyond/Smooth Web Apps Icon.png' />
                                </div>
                                <div className='mt-2'>
                                    <h6 style={{ fontWeight: "700" }}>
                                        SnapDoc
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='ml-4'>
                            <div >
                                <div>
                                    <img src='./Images/gobeyond/Smooth Web Apps Icon.png' />
                                </div>
                                <div className='mt-2'>
                                    <h6 style={{ fontWeight: "700" }}>
                                        Evolve
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightContainer'>
                    <img src='./Images/gobeyond/Group 515833.png' />
                    <div className='subbu'>
                        <h6>
                            Subramanyam (Subbu)
                        </h6>
                        <p>
                            Founder
                        </p>
                        <p>
                            IIM and BITS Graduate. Worked in<br />
                            Pharma IT Solutions for over a 2 Decades.
                        </p>
                        <div className='d-flex mt-4'>
                            <div>
                                <img src='./Images/gobeyond/Twitter.png' height="24px" width="24px" />
                            </div>
                            <div style={{ marginLeft: "30px" }}>
                                <img src='./Images/gobeyond/Facebook.png' height="24px" width="24px" />
                            </div>
                            <div style={{ marginLeft: "30px" }}>
                                <img src='./Images/gobeyond/Linkedin.png' height="24px" width="24px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='totalMain2'>
                <div className='Leftcontainer'>
                    <img src="./Images/gobeyond/occult-image.png" alt="image" className='occult' />
                    <div className='jay'>
                        <h6>
                            Jay
                        </h6>
                        <p>
                            Founder
                        </p>
                        <p>
                            IIM and BITS Graduate. Worked in<br />
                            Pharma IT Solutions for over a 2 Decades.
                        </p>
                        <div className='d-flex mt-4'>
                            <div>
                                <img src='./Images/gobeyond/Twitter.png' height="24px" width="24px" />
                            </div>
                            <div style={{ marginLeft: "30px" }}>
                                <img src='./Images/gobeyond/Facebook.png' height="24px" width="24px" />
                            </div>
                            <div style={{ marginLeft: "30px" }}>
                                <img src='./Images/gobeyond/Linkedin.png' height="24px" width="24px" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightContainer'>
                    <div className='opLeftSec'>
                        <img src='./Images/gobeyond/Group 427321121 (1).png' width="119" height="48" />
                    </div>
                    <h1 className='col-12 mb-4 mt-0'>
                        Threat Intelligence Service<br />
                        Providers, Q3 2023
                    </h1>
                    <span>
                        Occult Cyber is a vitalizing hub for advanced threat surface management with a team of dedicated<br />
                        cyber professionals, who provide in-depth analyses, actionable recommendations, and the latest<br />
                        industry trends to mitigate the cyber threats and to elevate the cyber defenses of business<br />
                        organisations to ensure they stay one step ahead in fortification of their cyber fortress.
                    </span>
                    <br />
                    <button className='visitbtn'>Visit Website</button>
                    <hr />
                </div>
            </div>
            <Footer />
        </div>
    )
}
