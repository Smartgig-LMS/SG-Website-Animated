import React from 'react'
import OurClients from './ClientPage'
import NavBar from './NavBar';
import Layout from './LayoutPage';
import WebDev from './WebDev';
import CloudDevops from './CloudDevops';
import MobileApp from './MobileApp';
import Testing from './Testing';
import Integration from './Integration';
import Footer from './Footer';
import Homevideo from './HomeVideo';
import { Outlet } from 'react-router-dom';
import Homelinks from './HomeLinks';
import DataServices from './DataServices';
import CyberSecurity from './CyberSecurity';
import LeadershipTeam from './LeadershipTeam';
import Gamification from './Gamification';
// import LeadershipTeam from './LeaderShip1';
// import OurTeam from './OurTeam';

export default function LandingPage() {

    const [pageName, setPageName] = React.useState("homeVideo");

    const [active, setActive] = React.useState({
        page: "homeVideo",
        bgColor: "blue",
    });

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <div >
                {/* <NavBar /> */}
                <Homelinks
                    setPageName={setPageName}
                    setActive={setActive}
                    active={active}
                />
                <div className="homesection">
                    <div className="main-homesection" id='homeVideo'>
                        <Homevideo />
                    </div>

                    <div className='main-homesection' id="web-developement">
                        <WebDev />
                    </div>

                    <div className="main-homesection" id='cloud-services'>
                        <CloudDevops />
                    </div>

                    <div className="main-homesection" id='mobile-app-developement'>
                        <MobileApp />
                    </div>

                    <div className="main-homesection" id='testing'>
                        <Testing />
                    </div>

                    <div className="main-homesection" id='data-services'>
                        <DataServices />
                    </div>

                    <div className="main-homesection" id='cyber-security'>
                        <CyberSecurity />
                    </div>

                    <div className="main-homesection" id='gamification'>
                        <Gamification />
                    </div>

                    <div className='main-homesection' id='integrations'>
                        <Integration />
                    </div>

                    <div className='main-homesection' id='leadership-team'>
                        <LeadershipTeam />
                    </div>

                    <div className='main-homesection' id='our-clients'>
                        <OurClients />
                    </div>

                </div>
            </div>
        </>
    )
}
