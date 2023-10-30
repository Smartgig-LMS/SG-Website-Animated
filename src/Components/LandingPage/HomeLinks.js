import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";

const Homelinks = ({ setPageName, setActive, active }) => {
    const [addClass, setAddClass] = useState("");
    const listenScrollEvent = (e) => {
        if (window.scrollY > 4500 && window.scrollY < 6500) {
            setAddClass("darkLink");
        } else {
            setAddClass("");
        }
    };

    return (
        <>
            <div className={`${addClass} vertical-Links ml-3`} id="verticalNav" >
                <Scrollspy
                    items={[
                        "homeVideo",
                        "web-developement",
                        "cloud-services",
                        "mobile-app-developement",
                        "testing",
                        "data-services",
                        "cyber-security",
                        "gamification",
                        "integrations",
                        "leadership-team",
                        "our-clients",
                        "testimonials",
                    ]}
                    currentClassName="current"
                    className="ms-0 ps-0 list-unstyled d-none d-md-block"
                >
                    {/* scroll to section and update the style top */}

                    <li className={`${addClass}`}>
                        <a href="#homeVideo">
                            <span>Go Beyond</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#web-developement">
                            <span>Web Development</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#cloud-services">
                            <span>Cloud<br/>Services</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#mobile-app-developement">
                            <span>Mobile Apps</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#testing">
                            <span>Testing</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#data-services">
                            <span>Data Services</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#cyber-security">
                            <span>Cyber<br/>Security</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#gamification">
                            <span>Gamification</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#integrations">
                            <span>Integrations</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#leadership-team">
                            <span>Leadership Team</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#our-clients">
                            <span>Our Clients</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#testimonials">
                            <span>Testimonials</span>
                        </a>
                    </li>

                    {/* <li className={`${addClass}`}>
                        <a href="#odfai">
                            <span>Our Diverse</span>
                        </a>
                    </li> */}
                    {/* <li className={`${addClass}`}>
                        <a href="#careers">
                            <span>Careers</span>
                        </a>
                    </li> */}
                    {/* <li className={`${addClass}`}>
                        <a href="#our-culture">
                            <span>Our Culture</span>
                        </a>
                    </li> */}
                    {/* <li className={`${addClass}`}>
                        <a href="#contact">
                            <span>Contact Us</span>
                        </a>
                    </li> */}

                </Scrollspy>
            </div>
        </>
    );
};

export default Homelinks;