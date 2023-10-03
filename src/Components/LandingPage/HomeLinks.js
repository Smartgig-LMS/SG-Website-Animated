import React, { useEffect, useState } from "react";
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from "react-scrollspy";
// import Scrollspy from 'react-scrollspy'
// const verticalLinkst = [
//     { href: 'homeVideo', title: "To Link", bgColo: '' },
//     { href: 'web-developement', title: "Web Developement", bgColo: 'bg-orange' },
//     { href: 'mobile-app-developement', title: "Mobile App Developement", bgColo: 'bg-green' },
//     { href: 'gamification', title: "Gamification", bgColo: 'bg-darkblue' },
//     { href: 'aws-azure', title: "AWS AZURE", bgColo: 'bg-lightblue' },
//     { href: 'devops', title: "devops", bgColo: 'bg-bringle' },
//     { href: 'cloud-services', title: "Cloud Services", bgColo: 'bg-purple' },
//     { href: 'security-services', title: "SECURITY Services", bgColo: 'bg-darkgreen' }
// ]
const Homelinks = ({ setPageName, setActive, active }) => {
    const [addClass, setAddClass] = useState("");
    const listenScrollEvent = (e) => {
        if (window.scrollY > 4500 && window.scrollY < 6500) {
            setAddClass("darkLink");
        } else {
            setAddClass("");
        }
    };
    // useEffect(() => {
    //   window.addEventListener("scroll", listenScrollEvent);
    // }, []);

    //need to execute responsively

    //width: 1920 , width:1440, width:767 

    //for vertical scrolling need to check the height tooo

    function modifyit() {
        // const listitems=document.querySelectorAll('vertical-Links')
        // // document.getElementsByTagName('li').classList.addClass('current')
        // console.log(listitems)
    }

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
                        "integrations",
                        "leadership-team",
                        "our-clients",
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
                            <span>Web Developement</span>
                        </a>
                    </li>
                    <li className={`${addClass}`}>
                        <a href="#cloud-services">
                            <span>Cloud Services</span>
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
                            <span>Cyber Security</span>
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